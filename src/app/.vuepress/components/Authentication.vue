<template>
  <div>
    <script src="/js/authentication.js"></script>
    <div id="loading" class="uk-text-center">
      <span class="uk-text-lead">Checking your previous sessions</span>
      <br />
      <br />
      <div uk-spinner></div>
    </div>
    <div id="loginCard" style="display: none;" class="uk-card uk-card-default">
      <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
          <div class="uk-width-auto">
            <img
              id="profilePicture"
              class="uk-border-circle"
              width="40"
              height="40"
              src="/img/avatar.png"
            />
          </div>
          <div class="uk-width-expand">
            <h3
              id="userDisplayName"
              class="uk-card-title uk-margin-remove-bottom"
            >
              Anonymous
            </h3>
            <p id="loginDateTime" class="uk-text-meta uk-margin-remove-top">
              <time datetime="">...</time>
            </p>
          </div>
        </div>
      </div>
      <div class="uk-card-body">
        <div id="anonymousMessage">
          To use the admin API endpoints and use your virtual apps, you need to
          sign-in with your Microsoft 365 account. But you can still access the
          anonymous endpoints under /store.
        </div>
        <div id="authenticatedMessage" style="display: none;">
          You can now use the admin endpoints.
          <div id="AppSelector"></div>
        </div>
      </div>
      <div id="loginFooter" class="uk-card-footer">
        <button
          id="loginButton"
          class="uk-button uk-align-right uk-button-danger"
          onclick="signIn()"
        >
          SIGN-IN
        </button>
        <button
          id="logoutButton"
          style="display: none;"
          class="uk-button uk-align-right uk-button-default"
          onclick="setAnonymous()"
        >
          SIGN-OUT
        </button>
      </div>
    </div>
  </div>
</template>
