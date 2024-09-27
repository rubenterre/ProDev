

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Bej-gzJs.js","_app/immutable/chunks/scheduler.Cu_nLO_j.js","_app/immutable/chunks/index.bxxkSNqk.js"];
export const stylesheets = [];
export const fonts = [];
