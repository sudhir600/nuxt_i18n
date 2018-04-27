import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

export default ({ app, store, req }) => {
	console.log('plugins')
	var cookies = req.headers.cookie
	var KeyNameLocale =  "locale="
	var decodedCookie = decodeURIComponent(cookies)
	console.log('cookie')
	console.log(decodedCookie)
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: {
      'en': require('~/locales/en.json'),
      'fr': require('~/locales/fr.json')
    }
  });
  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`;
    }
    return `/${app.i18n.locale}/${link}`;
  }
}