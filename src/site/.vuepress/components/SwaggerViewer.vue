<template>
  <div>
    <script
      type="text/javascript"
      src="https://unpkg.com/swagger-ui-dist@3/swagger-ui-bundle.js"
    ></script>
    <div id="swagger-ui"></div>
  </div>
</template>

<script>
export default {
  mounted () {
    // Retreive prop value
    var pOpenApiFileUrl = this.openApiFileUrl

    window.onload = function () {
      // Begin Swagger UI call region
      const ui = SwaggerUIBundle({
        url: pOpenApiFileUrl,
        dom_id: '#swagger-ui',
        deepLinking: false,
        displayOperationId: false,
        displayRequestDuration: true,
        presets: [SwaggerUIBundle.presets.apis], //, SwaggerUIStandalonePreset],
        plugins: [SwaggerUIBundle.plugins.DownloadUrl]
        // ,
        // layout: 'StandaloneLayout'
      })

      window.ui = ui
    }
  },
  props: ['openApiFileUrl']
}
</script>

<style scoped></style>
