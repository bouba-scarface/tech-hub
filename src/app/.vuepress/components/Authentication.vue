<template>
  <div>
    <button
      type="button"
      id="signIn"
      class="btn btn-secondary"
      onclick="signIn()"
    >
      Sign In
    </button>
    <button
      type="button"
      id="signOut"
      class="btn btn-success d-none"
      onclick="signOut()"
    >
      Sign Out
    </button>

    <!-- importing app scripts (load order is important) -->
    <script
      type="text/javascript"
      src="/js/authentication/authentication.js"
    ></script>
  </div>
</template>
