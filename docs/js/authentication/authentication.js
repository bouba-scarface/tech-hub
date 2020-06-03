// AUTH CONFIG

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

// GRAPH CONFIG

// Add here the endpoints for MS Graph API services you would like to use.
const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};

// GRAPH

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

// AUTH POPUP

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
        getSalesTimPlugIns()
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

function getSalesTimPlugIns () {

}

// SWAGGER UI INTEGRATION

// Keys:
// - bearerAuth
// - pluginId
// - pluginSecret
function setKeyValue (authDefinitionKey, apiKeyValue) {
  ui.preauthorizeApiKey(authDefinitionKey, apiKeyValue)
  // ui.preauthorizeApiKey('bearerAuth','aaa')
}
