<!--
Classification Component
Embeds a classification label in a page depending on the "label" property
Usage: <Classification label="public" />
-->

<template>
  <div>
    <div v-if="label === 'public'">
      <a href="/platform/classification.html"
        ><img
          alt="classification:PUBLIC"
          src="https://img.shields.io/badge/classification-PUBLIC-red"
      /></a>
    </div>
    <div v-else-if="label === 'external'">
      <a href="/platform/classification.html"
        ><img
          alt="classification:EXTERNAL"
          src="https://img.shields.io/badge/classification-EXTERNAL-red"
      /></a>
    </div>
    <div v-else-if="label === 'internal'">
      <a href="/platform/classification.html"
        ><img
          alt="classification:INTERNAL"
          src="https://img.shields.io/badge/classification-INTERNAL-red"
      /></a>
    </div>
    <div v-else-if="label === 'confidential'">
      <a href="/platform/classification.html"
        ><img
          alt="classification:CONFIDENTIAL"
          src="https://img.shields.io/badge/classification-CONFIDENTIAL-red"
      /></a>
    </div>
  </div>
</template>

<script>
// Get access to the "label" property
export default {
  props: ['label']
}
</script>

<style scoped></style>
