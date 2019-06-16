<template>
  <script type="application/ld+json" v-html="schemaData" />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    properties: {
      type: Object,
      default() {
        return {}
      }
    },
    schema: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    const schemaKey = `${this.type.charAt(0).toLowerCase() +
      this.type.slice(1)}Schema`
    const schemaData = JSON.stringify({
      ...this.schema[schemaKey],
      ...this.properties
    })
    return {
      schemaData
    }
  }
}
</script>
