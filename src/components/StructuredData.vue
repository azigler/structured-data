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
      default() {
        return schemaObject.webSite
      }
    },
    schemaObject: {
      type: Object,
      default() {}
    }
  },
  computed: {
    schemaData() {
      const schemaKey = `${this.type.charAt(0).toLowerCase() +
        this.type.slice(1)}Schema`
      return JSON.stringify({
        ...this.schemaObject[schemaKey],
        ...this.properties
      })
    }
  }
}
</script>
