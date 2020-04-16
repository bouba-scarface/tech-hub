<template>
  <div>
    <div id="swagger-ui"></div>
  </div>
</template>

  <script>
    export default {
      mounted() {
    // Retreive prop value
    var pOpenApiFileUrl = this.openApiFileUrl;

    // Inject swagger ui css
    const bundleCss = document.createElement("link");
    bundleCss.setAttribute("rel", "stylesheet");
    bundleCss.setAttribute("type", "text/css");
    bundleCss.setAttribute(
      "href",
      "https://prd.salestim.io/swaggeruiassets/swagger-ui.css"
    );
    document.head.appendChild(bundleCss);

    // Inject swagger ui js
    const pluginBundle = document.createElement("script");
    pluginBundle.setAttribute(
      "src",
      "https://prd.salestim.io/swaggeruiassets/swagger-ui-bundle.js"
    );
    pluginBundle.async = true;
    document.head.appendChild(pluginBundle);

    // Inject swagger ui presets
    const pluginPreset = document.createElement("script");
    pluginPreset.setAttribute(
      "src",
      "https://prd.salestim.io/swaggeruiassets/swagger-ui-standalone-preset.js"
    );
    pluginPreset.async = true;
    document.head.appendChild(pluginPreset);

    window.onload = function() {
      // Begin Swagger UI call region
      const ui = SwaggerUIBundle({
      url: pOpenApiFileUrl,
        dom_id: "#swagger-ui",
        deepLinking: false,
        displayOperationId: false,
        displayRequestDuration: true,
        presets: [SwaggerUIBundle.presets.apis], //, SwaggerUIStandalonePreset],
        plugins: [SwaggerUIBundle.plugins.DownloadUrl]
        // ,
        // layout: 'StandaloneLayout'
      });
      // End Swagger UI call region

      window.ui = ui;
    };
  },
  props: ["openApiFileUrl"]
};
</script>

  <style scoped>
  </style>
