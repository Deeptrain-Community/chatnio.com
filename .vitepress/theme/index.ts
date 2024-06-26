// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import GithubProject from "./components/GithubProject.vue";
import PageLink from "./components/PageLink.vue";
import PricingBox from "./components/PricingBox.vue";


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('GithubProject', GithubProject)
    app.component('PageLink', PageLink)
    app.component('PricingBox', PricingBox)
  }
} satisfies Theme
