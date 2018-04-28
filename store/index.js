export const state = () => ({
  locales: ['en', 'fr'],
  locale: 'en'
})
export const mutations = {
  SET_LANG(state, locale) {
      state.locale = locale
  }
}