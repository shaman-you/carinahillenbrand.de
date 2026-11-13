/**
 * Strukturierte Daten (JSON-LD) für die Startseite, ausgegeben von `JsonLd.astro`.
 * `sameAs` verbindet diese Domain mit carinahillenbrand.com und LinkedIn, damit
 * Suchmaschinen alles einer Person zuordnen.
 */
import { CONTACT } from './consts';

const SCHEMA = 'https://schema.org';

export const personId = (site: URL) => new URL('#person', site).href;

/** `address` fehlt bewusst: Die einzige vorhandene Anschrift ist eine Privatadresse. */
export function personLd(site: URL, image: string) {
	return {
		'@context': SCHEMA,
		'@type': 'Person',
		'@id': personId(site),
		name: 'Carina Hillenbrand',
		jobTitle: 'Systemische Business-Coachin und Trainerin',
		url: new URL('/', site).href,
		image: new URL(image, site).href,
		sameAs: ['https://www.carinahillenbrand.com/', CONTACT.linkedin],
	};
}

export function websiteLd(site: URL) {
	return {
		'@context': SCHEMA,
		'@type': 'WebSite',
		'@id': new URL('#website', site).href,
		name: 'Carina Hillenbrand',
		alternateName: 'carinahillenbrand.de',
		url: new URL('/', site).href,
		inLanguage: 'de',
		publisher: { '@id': personId(site) },
	};
}
