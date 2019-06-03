<template>
  <script type="application/ld+json" v-html="schemaData" />
</template>

<script>
let schemaObject

const schema = {
  '@context': 'http://schema.org'
}

/*
  PERSON
  ------
  N/A
*/
const person = {
  '@id': 'AndrewZigler',
  description:
    'Andrew Zigler is a director and front-end developer at an education company. He makes interactive learning experiences used by thousands of students annually.',
  email: 'me@andrewzigler.com',
  familyName: 'Zigler',
  givenName: 'Andrew',
  image:
    'https://en.gravatar.com/userimage/28005451/31f00adf19b8a17dc8fc7e92aca68bdf.jpg?size=300',
  jobTitle: 'Director of Business Development',
  name: 'Andrew Zigler',
  mainEntityOfPage: 'https://www.andrewzigler.com/',
  url: 'https://www.andrewzigler.com/'
}

const personSchema = { ...schema, '@type': 'Person', ...person }

const logoSchema = { ...schema, '@type': 'ImageObject' }

const personSchemaForBlogPosting = {
  '@id': 'AndrewZiglerOrganization',
  ...schema,
  '@type': 'Organization',
  ...person,
  ...{
    logo: {
      ...logoSchema,
      '@id': 'BlogLogo',
      url:
        'https://en.gravatar.com/userimage/28005451/31f00adf19b8a17dc8fc7e92aca68bdf.jpg?size=300'
    }
  }
}

/*
  BLOG POSTING
  ------------
  dateCreated: 'DATE',
  dateModified: 'DATE',
  datePublished: 'DATE',
  description: 'Blah',
  headline: 'headline',
  image: 'URL',
  mainEntityOfPage: 'THIS URL',
  name: 'NAME',
  articleBody: 'text',
  articleSection: 'category',
  wordCount: '??',
  url: 'URL'
*/
const blogPosting = {
  author: personSchema,
  creator: personSchema,
  publisher: personSchemaForBlogPosting
}

const blogPostingSchema = {
  ...schema,
  '@type': 'BlogPosting',
  ...blogPosting
}

/*
  BLOG
  ----
  image: 'URL',
  thumbnailUrl: 'URL'
*/
const blog = {
  '@id': 'AndrewZiglerBlog',
  author: personSchema,
  creator: personSchema,
  dateCreated: '2017-12-02T05:16:00+0000',
  datePublished: '2017-12-02T05:16:00+0000',
  description:
    "Since 2017, Andrew Zigler's monthly blog has been providing key insights into web technology with a fresh perspective. The blog also features comprehensive reviews, in-depth tutorials, and cultural articles.",
  headline: "Andrew Zigler's Blog",
  mainEntityOfPage: 'https://www.andrewzigler.com/blog/',
  name: "Andrew Zigler's Blog",
  publisher: personSchema,
  url: 'https://www.andrewzigler.com/blog/'
}

const blogSchema = { ...schema, '@type': 'Blog', ...blog }

/*
  WEB SITE
  --------
  N/A
*/
const webSite = {
  '@id': 'andrewziglerdotcom',
  author: personSchema,
  creator: personSchema,
  description:
    'The personal website of Andrew Zigler, a multi-discipilinary web developer and business director. This website showcases his portfolio of web development work and hosts his blog, where he writes about technology and culture.',
  hasPart: blogSchema,
  headline: 'Andrew Zigler',
  image:
    'https://en.gravatar.com/userimage/28005451/31f00adf19b8a17dc8fc7e92aca68bdf.jpg?size=300',
  mainEntity: personSchema,
  name: 'Andrew Zigler',
  thumbnailUrl:
    'https://en.gravatar.com/userimage/28005451/31f00adf19b8a17dc8fc7e92aca68bdf.jpg?size=300',
  url: 'https://www.andrewzigler.com/'
}

const webSiteSchema = { ...schema, '@type': 'WebSite', ...webSite }

/*
  WEB PAGE
  --------
  description: 'DESCRIPTION FROM PAGE',
  headline: 'TITLE FROM PAGE',
  image: 'URL',
  name: 'TITLE FROM PAGE',
  thumbnailUrl: 'URL',
  url: 'URL FROM PAGE'
*/
const webPage = {
  '@id': 'webpage',
  author: personSchema,
  creator: personSchema,
  isPartOf: webSiteSchema
}

const webPageSchema = { ...schema, '@type': 'WebPage', ...webPage }

/*
  SOFTWARE SOURCE CODE
  --------------------
  codeRepository: 'URL',
  dateCreated: 'DATE',
  dateModified: 'DATE',
  datePublished: 'DATE',
  description: 'DESCRIPTION FROM PAGE',
  headline: 'TITLE FROM PAGE',
  image: 'URL',
  name: 'TITLE FROM PAGE',
  thumbnailUrl: 'URL',
  url: 'URL FROM PAGE'
*/
const softwareSourceCode = {
  author: personSchema,
  creator: personSchema,
  isPartOf: webSiteSchema
}

const softwareSourceCodeSchema = {
  ...schema,
  '@type': 'SoftwareSourceCode',
  ...softwareSourceCode
}

schemaObject = {
  schema,
  person,
  personSchema,
  logoSchema,
  personSchemaForBlogPosting,
  blogPosting,
  blogPostingSchema,
  blog,
  blogSchema,
  webSite,
  webSiteSchema,
  webPage,
  webPageSchema,
  softwareSourceCode,
  softwareSourceCodeSchema
}

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
    }
  },
  computed: {
    schemaData() {
      const schemaKey = `${this.type.charAt(0).toLowerCase() +
        this.type.slice(1)}Schema`
      return JSON.stringify({
        ...schemaObject[schemaKey],
        ...this.properties
      })
    }
  }
}
</script>
