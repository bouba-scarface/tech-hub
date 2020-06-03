<template>
  <div>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://unpkg.com/swagger-ui-dist@3/swagger-ui.css"
    />
    <script
      type="text/javascript"
      src="https://unpkg.com/swagger-ui-dist@3/swagger-ui-bundle.js"
    ></script>
    <script src="https://unpkg.com/swagger-ui-dist@3/swagger-ui-standalone-preset.js"></script>
    <div id="swagger-ui"></div>
  </div>
</template>

<script>
export default {
  mounted () {
    console.info('Mounted')
    // Retreive prop value
    var pOpenApiFileUrl = this.openApiFileUrl
    if (window.ui) {
      loadUi(pOpenApiFileUrl)
    }
    window.onload = function () {
      loadUi(pOpenApiFileUrl)
    }
    function loadUi (url) {
      // Build a system
      const ui = SwaggerUIBundle({
        url: url,
        dom_id: '#swagger-ui',
        deepLinking: true,
        displayOperationId: false,
        displayRequestDuration: false,
        presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
        plugins: [SwaggerUIBundle.plugins.DownloadUrl]
        // To make the open api file url visible, add:
        // layout: 'StandaloneLayout'
      })
      window.ui = ui
    }
  },
  props: ['openApiFileUrl']
}
</script>

<style scoped></style>
