<!--
Usage: <Classification level="public" />
-->

<template>
  <div v-if="level === 'public'">
    Classification: <b>📢 PUBLIC</b>. <i><a href="/platform/classification">(What does it means?)</a></i>
  </div>
  <div v-else-if="level === 'external'">
    Classification: <b>🔑 EXTERNAL</b>. <i><a href="/platform/classification">(What does it means?)</a></i>
  </div>
  <div v-else-if="level === 'internal'">
    Classification: <b>🔐 INTERNAL</b>. <i><a href="/platform/classification">(What does it means?)</a></i>
  </div>
  <div v-else-if="level === 'confidential'">
    Classification: <b>💥 CONFIDENTIAL</b>. <i><a href="/platform/classification">(What does it means?)</a></i>
  </div>
</template>

<script>
export default {
  props: ['level']
}
</script>

<style scoped>

</style>
