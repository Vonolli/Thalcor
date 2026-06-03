import siteData from './site.json';

// CMS-editable global THALCOR settings are stored in `src/data/site.json`.
// Edit that file directly or through Pages CMS. Keep this TypeScript wrapper
// so Astro components can continue importing stable named exports.
export const site = siteData;

export const homepage = siteData.homepage;
export const contactPage = siteData.contactPage;
export const contactCta = siteData.contactCta;
export const processSteps = siteData.processSteps;
