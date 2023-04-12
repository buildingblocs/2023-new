/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Imports
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labs from 'vuetify/labs/components'

// Icons

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#FF9900',
          secondary: '#5CBBF6',
        },
      },
    },
  },
  components: {
    ...components, ...labs,
  },
  directives
})
