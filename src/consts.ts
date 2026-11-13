/** Zentrale Seiten-Metadaten — von SEO.astro und den Layout-Komponenten genutzt. */
export const SITE = {
	title: 'Carina Hillenbrand',
	description:
		'Systemisches Coaching für Führung, Teams und persönliche Entwicklung. Carina Hillenbrand, Business-Coachin und Trainerin in Stein bei Nürnberg.',
	lang: 'de',
	locale: 'de_DE',
} as const;

/** Kontaktdaten — an einer Stelle, weil Startseite, Impressum und Datenschutz sie nutzen. */
export const CONTACT = {
	/** Ziel aller „Erstgespräch"-Buttons: Terminbuchung bei meetergo. */
	booking:
		'https://cal.meetergo.com/host/30-minuten-kennenlerngesprach-business-coaching?lang=de',
	/** Mailadresse für „Nachricht senden" und den Kontaktbereich. */
	email: 'coaching@carinahillenbrand.com',
	/** Adresse für Impressum und Datenschutz, wie auf der bisherigen Seite. */
	legalEmail: 'host@carinahillenbrand.com',
	phone: '+49 160 7814084',
	phoneHref: 'tel:+491607814084',
	linkedin: 'https://www.linkedin.com/in/carina-hillenbrand-2479671b1/',
} as const;

/** Hauptnavigation. Ab zwei Einträgen zeigt der Header sie an. */
export const NAV: ReadonlyArray<{ href: string; label: string }> = [
	{ href: '/', label: 'Start' },
];
