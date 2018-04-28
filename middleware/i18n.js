/*
 * 1. sets i18n.locale and state.locale if possible
 * 2. redirects if not with locale
 */
export default function ({ isHMR, app, store, route, params, error, redirect }) {
	console.log('middlware')
	//store.commit('SET_LANG', 'fr')
 /* 
 if (isHMR) { 
    return;
  } 
  else if (!params.lang) { 
    return redirect(route.fullPath);
  }
  const locale = params.lang || 'fr'; 
  store.commit('SET_LANG', locale); // set store
  app.i18n.locale = store.state.locale;
   */
  }