// ################################################################################################
// # AZURE AD AUTHENTICATION MODULE
// ################################################################################################

// #region DECLARATIONS

// Config object to be passed to Msal on creation.
// For a full list of msal.js configuration parameters,
// visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/modules/_authenticationparameters_.html
var msalConfig = null

// Add here scopes for id token to be used at MS Identity Platform endpoints.
var loginRequest = null

// Add here scopes for access token to be used at MS Graph API endpoints.
var tokenRequest = null

// Add here the endpoints for MS Graph API services you would like to use.
var graphConfig = null

// Create the main myMSALObj instance
// configuration parameters are located at authConfig.js
var myMSALObj = null

// #endregion DECLARATIONS

// #region GRAPH HELPERS

// Helper function to call MS Graph API endpoint
// using authorization bearer token scheme
function callMSGraph (endpoint, token, callback) {
  const bearer = `Bearer ${token}`
  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': bearer
    }
  }
  console.log('request made to Graph API at: ' + new Date().toString())
  fetch(endpoint, options)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return response.json()
    })
    .then(function (response) {
      callback(response, endpoint)
    })
    .catch(function (error) {
      console.log(error)
    })
}

function callMSGraphBinary (endpoint, token, callback) {
  const bearer = `Bearer ${token}`
  const options = {
    method: 'GET',
    headers: {
      'Authorization': bearer
    }
  }
  console.log('binary request made to Graph API at: ' + new Date().toString())
  fetch(endpoint, options)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return response.blob()
    })
    .then(function (response) {
      callback(response, endpoint)
    })
    .catch(function (error) {
      console.log(error)
    })
}

// #endregion GRAPH HELPERS

// #region SALESTIM API HELPERS

function getApps (callback) {
  const bearer = 'Bearer ' + window.explorerLoggedUser.accessToken
  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': bearer
    }
  }
  console.log('request made to SalesTim API at: ' + new Date().toString())
  fetch('https://api.salestim.io/v1.0/apps', options)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return response.json()
    })
    .then(function (response) {
      callback(response)
    })
    .catch(function (error) {
      console.log(error)
    })
}

// #endregion SALESTIM API HELPERS

// #region AUTHENTICATION - POPUP MODE

function init () {
  // Init vars
  if (!msalConfig) {
    msalConfig = {
      auth: {
        clientId: '107219e4-ae69-4096-800e-c9cc2be660c7',
        // authority: "https://login.microsoftonline.com/common",
        authority: 'https://login.microsoftonline.com/common',
        redirectUri: window.location.origin + '/api/explorer'
      },
      cache: {
        cacheLocation: 'sessionStorage', // This configures where your cache will be stored
        storeAuthStateInCookie: false // Set this to "true" if you are having issues on IE11 or Edge
      }
    }
  }
  if (!loginRequest) {
    loginRequest = {
      scopes: ['email', 'offline_access', 'openid', 'profile', 'User.Read']
    }
  }
  if (!tokenRequest) {
    tokenRequest = {
      scopes: ['User.Read']
    }
  }
  if (!graphConfig) {
    graphConfig = {
      graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me',
      graphPhotoEndpoint: 'https://graph.microsoft.com/v1.0/me/photo/$value'
    }
  }
  if (!myMSALObj) {
    myMSALObj = new Msal.UserAgentApplication(msalConfig)
  }
  // Check pre-existing account
  if (myMSALObj.getAccount()) {
    getAccessToken()
  } else {
    setAnonymous()
  }
}
init()

function signIn () {
  myMSALObj
    .loginPopup(loginRequest)
    .then(loginResponse => {
      console.log('id_token acquired at: ' + new Date().toString())
      console.log(loginResponse)

      if (myMSALObj.getAccount()) {
        getAccessToken()
      }
    })
    .catch(error => {
      console.log(error)
    })
}

function getAccessToken () {
  getTokenPopup(loginRequest)
    .then(response => {
      console.info('Access Token:')
      console.dir(response.accessToken)
      callMSGraph(
        graphConfig.graphMeEndpoint,
        response.accessToken,
        function (data, endpoint) {
          console.log('Data:')
          console.dir(data)
          console.log('Endpoint:')
          console.dir(endpoint)
          window.explorerLoggedUser = response
          getApps(function (apps) {
            console.info(apps)
          })
          setAuthenticated(response, data)
          UIkit.notification({
            message: 'Successfully signed-in...',
            status: 'success',
            timeout: 2000
          })
        }
      )
    })
    .catch(error => {
      console.log(error)
      setAnonymous()
    })
}

function signOut () {
  window.explorerLoggedUser = null
  myMSALObj.logout()
  UIkit.notification({
    message: 'Successfully signed-out...',
    status: 'success',
    timeout: 2000
  })
}

function getTokenPopup (request) {
  return myMSALObj.acquireTokenSilent(request).catch(error => {
    console.log(error)
    console.log(
      'silent token acquisition fails. acquiring token using popup'
    )

    // fallback to interaction when silent call fails
    return myMSALObj
      .acquireTokenPopup(request)
      .then(tokenResponse => {
        return tokenResponse
      })
      .catch(error => {
        console.log(error)
      })
  })
}

// #endregion AUTHENTICATION - POPUP MODE

// #region UI

function enableLoading(){
  document.getElementById('loading').style.display = ""
  document.getElementById('loginCard').style.display = "none"
}

function disableLoading(){
  document.getElementById('loading').style.display = "none"
  document.getElementById('loginCard').style.display = ""
}

function setAnonymous () {
  disableLoading()
  window.explorerLoggedUser = null
  document.getElementById("loginDateTime").innerText = '...'
  document.getElementById("userDisplayName").innerText = 'Anonymous'
  document.getElementById('profilePicture').setAttribute('src', '/img/avatar.png')
  document.getElementById('anonymousMessage').style.display = ""
  document.getElementById('authenticatedMessage').style.display = "none"
  document.getElementById('loginButton').style.display = ""
  document.getElementById('logoutButton').style.display = "none"
}

function setAuthenticated (userInfos, profile) {
  disableLoading()
  document.getElementById("loginDateTime").innerText = profile.mail + ' (sign-in: ' + moment().format('MMMM Do YYYY, h:mm:ss a') + ')'
  document.getElementById("userDisplayName").innerText = profile.displayName
  setProfilePicture(userInfos.accessToken)
  document.getElementById('anonymousMessage').style.display = "none"
  document.getElementById('authenticatedMessage').style.display = ""
  document.getElementById('loginButton').style.display = "none"
  document.getElementById('logoutButton').style.display = ""
}

function setProfilePicture (token) {
  callMSGraphBinary(graphConfig.graphPhotoEndpoint, token, function (response, endpoint) {
    const url = window.URL || window.webkitURL
    const blobUrl = url.createObjectURL(response)
    document.getElementById('profilePicture').setAttribute("src", blobUrl)
  })
}

// #endregion UI

// #region AUTHENTICATION - REDIRECT MODE

/*

// Create the main myMSALObj instance
// configuration parameters are located at authConfig.js
const myMSALObj = new Msal.UserAgentApplication(msalConfig);

let accessToken;

// Register Callbacks for Redirect flow
myMSALObj.handleRedirectCallback(authRedirectCallBack);

function authRedirectCallBack (error, response) {
if (error) {
console.log(error);
} else {
if (response.tokenType === "id_token") {
  console.log('id_token acquired at: ' + new Date().toString());
} else if (response.tokenType === "access_token") {
  console.log('access_token acquired at: ' + new Date().toString());
  accessToken = response.accessToken;

  callMSGraph(graphConfig.graphMailEndpoint, accessToken, updateUI);
  profileButton.style.display = 'none';
  mailButton.style.display = 'initial';
} else {
  console.log("token type is:" + response.tokenType);
}
}
}

// Redirect: once login is successful and redirects with tokens, call Graph API
if (myMSALObj.getAccount()) {
showWelcomeMessage(myMSALObj.getAccount());
}

function signIn () {
myMSALObj.loginRedirect(loginRequest);
}

function signOut () {
myMSALObj.logout();
}

// This function can be removed if you do not need to support IE
function getTokenRedirect (request, endpoint) {
return myMSALObj.acquireTokenSilent(request, endpoint)
.then((response) => {
  console.log(response);
  if (response.accessToken) {
    console.log('access_token acquired at: ' + new Date().toString());
    accessToken = response.accessToken;

    callMSGraph(endpoint, response.accessToken, updateUI);
    profileButton.style.display = 'none';
    mailButton.style.display = 'initial';
  }
})
.catch(error => {
  console.log("silent token acquisition fails. acquiring token using redirect");
  // fallback to interaction when silent call fails
  return myMSALObj.acquireTokenRedirect(request)
});
}

function seeProfile () {
getTokenRedirect(loginRequest, graphConfig.graphMeEndpoint);
}

function readMail () {
getTokenRedirect(tokenRequest, graphConfig.graphMailEndpoint);
}

*/

// #endregion AUTHENTICATION - REDIRECT MODE
