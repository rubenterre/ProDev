import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DZgmjdlK.js","_app/immutable/chunks/scheduler.Cu_nLO_j.js","_app/immutable/chunks/index.bxxkSNqk.js"];
export const stylesheets = ["_app/immutable/assets/0.BD8D24vF.css"];
export const fonts = ["_app/immutable/assets/Sora-VariableFont_wght.B-NSZvbM.ttf","_app/immutable/assets/Poppins-Regular.CTKNfV9P.ttf","_app/immutable/assets/Poppins-Medium.Cxde2ZoM.ttf","_app/immutable/assets/Poppins-Bold.qTAUjFF7.ttf"];
