import { getEntry } from 'astro:content';

export async function getSiteContent() {
  const entry = await getEntry('site', 'site');
  if (!entry) throw new Error('Missing content/settings/site.yml');
  return entry.data;
}

export async function getHomepageContent() {
  const entry = await getEntry('homepage', 'homepage');
  if (!entry) throw new Error('Missing content/pages/homepage.yml');
  return entry.data;
}

export async function getProjectPageContent() {
  const entry = await getEntry('projectPage', 'projects');
  if (!entry) throw new Error('Missing content/pages/projects.yml');
  return entry.data;
}
