// ################################################################################################
// # AZURE AD AUTHENTICATION MODULE
// ################################################################################################

// #region AUTH CONFIG

// Config object to be passed to Msal on creation.
// For a full list of msal.js configuration parameters, 
// visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/modules/_authenticationparameters_.html
const msalConfig = {
  auth: {
    clientId: "107219e4-ae69-4096-800e-c9cc2be660c7",
    authority: "https://login.microsoftonline.com/common",
    redirectUri: "http://localhost:8080/api/explorer",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  }
}

// Add here scopes for id token to be used at MS Identity Platform endpoints.
const loginRequest = {
  scopes: ["openid", "profile", "User.Read"]
}

// Add here scopes for access token to be used at MS Graph API endpoints.
const tokenRequest = {
  scopes: ["User.Read"]
}

// #endregion AUTH CONFIG

// #region GRAPH CONFIG

// Add here the endpoints for MS Graph API services you would like to use.
const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};

// #endregion GRAPH CONFIG

// #region GRAPH HELPERS

// Helper function to call MS Graph API endpoint 
// using authorization bearer token scheme
function callMSGraph (endpoint, token, callback) {
  const headers = new Headers();
  const bearer = `Bearer ${token}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers
  };

  console.log('request made to Graph API at: ' + new Date().toString());

  fetch(endpoint, options)
    .then(response => response.json())
    .then(response => callback(response, endpoint))
    .catch(error => console.log(error))
}

// #endregion GRAPH HELPERS

// #region AUTHENTICATION - POPUP MODE

// Create the main myMSALObj instance
// configuration parameters are located at authConfig.js
const myMSALObj = new Msal.UserAgentApplication(msalConfig);

function signIn () {
  myMSALObj.loginPopup(loginRequest)
    .then(loginResponse => {
      console.log('id_token acquired at: ' + new Date().toString());
      console.log(loginResponse);

      if (myMSALObj.getAccount()) {
        seeProfile()
        getSalesTimApps()
      }
    }).catch(error => {
      console.log(error);
    });
}

function signOut () {
  myMSALObj.logout();
}

function getTokenPopup (request) {
  return myMSALObj.acquireTokenSilent(request)
    .catch(error => {
      console.log(error);
      console.log("silent token acquisition fails. acquiring token using popup");

      // fallback to interaction when silent call fails
      return myMSALObj.acquireTokenPopup(request)
        .then(tokenResponse => {
          return tokenResponse;
        }).catch(error => {
          console.log(error);
        });
    });
}

function seeProfile () {
  if (myMSALObj.getAccount()) {
    getTokenPopup(loginRequest)
      .then(response => {
        console.info('Access Token:')
        console.dir(response.accessToken)
        callMSGraph(graphConfig.graphMeEndpoint, response.accessToken, function (data, endpoint) {
          console.log('Data:')
          console.dir(data)
          console.log('Endpoint:')
          console.dir(endpoint)
        })
      }).catch(error => {
        console.log(error);
      });
  }
}

function getSalesTimApps () {

}

// #endregion AUTHENTICATION - POPUP MODE

// #region SWAGGER UI INTEGRATION

// Keys:
// - bearerAuth
// - appId
// - appSecret
function setKeyValue (authDefinitionKey, apiKeyValue) {
  ui.preauthorizeApiKey(authDefinitionKey, apiKeyValue)
  // ui.preauthorizeApiKey('bearerAuth','aaa')
}

// #endregion SWAGGER UI INTEGRATION

// #region UNUSED | AUTHENTICATION - REDIRECT MODE

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
