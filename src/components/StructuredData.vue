<template>
  <script type="application/ld+json" v-html="schemaData" />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'WebSite'
    },
    properties: {
      type: Object,
      default() {}
    },
    schema: {
      type: Object,
      default() {}
    }
  },
  computed: {
    schemaData() {
      const schemaKey = `${this.type.charAt(0).toLowerCase() +
        this.type.slice(1)}Schema`
      return JSON.stringify({
        ...this.schema[schemaKey],
        ...this.properties
      })
    }
  }
}
</script>
