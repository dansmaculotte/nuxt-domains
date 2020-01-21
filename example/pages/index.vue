<template>
  <div>
    Works! ({{ domain }})
  </div>
</template>

<script>
export default {
  computed: {
    domain() {
      const { fqdn } = this.$domain()
      return fqdn
    }
  }
}
</script>
