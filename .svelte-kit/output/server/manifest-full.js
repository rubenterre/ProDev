export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","Ruben_Arturo_Terre_Lameiro_CV2024.pdf","Ruben_Terre_Logo_blanco.svg","favicon/favicon_152x152@1x.png","favicon/favicon_167x167@1x.png","favicon/favicon_16x16@1x.png","favicon/favicon_180x180@1x.png","favicon/favicon_192x192@1x.png","favicon/favicon_32x32@1x.png","favicon/favicon_48x48@1x.png","favicon/favicon_512x512@1x.png","favicon/favicon_96x96@1x.png","favicon.png","icons/.DS_Store","icons/ADM-500x133_blanco.svg","icons/INVBIT_LOGOTIPO.svg","icons/RT_logo.svg","icons/USC-Logo2.svg","icons/about_icon.svg","icons/after-effects_icon.svg","icons/after-effects_icon_white.svg","icons/afundacion.svg","icons/ap-logo-blanco-medium-1.svg","icons/badge.svg","icons/badge_icon.svg","icons/behance.svg","icons/behance_box.svg","icons/bootstrap_icon.svg","icons/bootstrap_icon_white.svg","icons/brand-github.svg","icons/cec.svg","icons/classroom_icon.svg","icons/contact_icon.svg","icons/css_icon.svg","icons/css_icon_white.svg","icons/download.svg","icons/education-experience_icon.svg","icons/email_icon.svg","icons/figma_icon.svg","icons/figma_icon_white.svg","icons/firebase_icon.svg","icons/forga_white.svg","icons/github.svg","icons/github_box.svg","icons/github_icon.svg","icons/github_icon_white.svg","icons/gri_logo.svg","icons/html5_icon.svg","icons/html5_icon_white.svg","icons/illustrator_icon.svg","icons/illustrator_icon_white.svg","icons/indesign_icon.svg","icons/indesign_icon_white.svg","icons/instagram.svg","icons/instagram_box.svg","icons/javascript_icon.svg","icons/javascript_icon_white.svg","icons/link_symbol-1.png","icons/link_symbol.svg","icons/linkedin.svg","icons/linkedin_box.svg","icons/location_icon.svg","icons/moodle_icon.svg","icons/photoshop_icon.svg","icons/photoshop_icon_white.svg","icons/portfolio_icon.svg","icons/prezi_icon.svg","icons/quizizz_icon.svg","icons/sass_icon.svg","icons/sketch_dark_icon.svg","icons/sketch_icon_white.svg","icons/skills_icon.svg","icons/svelte_icon.svg","icons/svelte_icon_white.svg","icons/vite_icon.svg","icons/website_icon.svg","icons/wordpress_icon.svg","icons/wordpress_icon_white.svg","images/.DS_Store","images/ADM_Comunicaciones_web.png","images/ADM_Comunicaciones_web.webp","images/GaliciaWeather_app.png","images/GaliciaWeather_app.webp","images/Libro_destino_viquingo.png","images/Libro_destino_viquingo.webp","images/MuseoPoboGalego_Concept.webp","images/RubenTerre.webp","images/destino_viquingo_web.png","images/destino_viquingo_web.webp","rubenterre_OGraph.jpeg"]),
	mimeTypes: {".pdf":"application/pdf",".svg":"image/svg+xml",".png":"image/png",".webp":"image/webp",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.DtxZWJk0.js","app":"_app/immutable/entry/app.Be8tnnuG.js","imports":["_app/immutable/entry/start.DtxZWJk0.js","_app/immutable/chunks/entry.BpQvXA8k.js","_app/immutable/chunks/scheduler.Cu_nLO_j.js","_app/immutable/entry/app.Be8tnnuG.js","_app/immutable/chunks/scheduler.Cu_nLO_j.js","_app/immutable/chunks/index.bxxkSNqk.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
