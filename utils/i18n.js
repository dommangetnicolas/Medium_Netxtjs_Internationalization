const NextI18Next = require('next-i18next').default;

const NextI18NextInstance = new NextI18Next({
	defaultLanguage: 'en',
	otherLanguages: ['de', 'fr']
});

/* Optionally, export class methods as named exports */
const {
	appWithTranslation,
	withTranslation,
} = NextI18NextInstance;

module.exports = {
	nextI18next: NextI18NextInstance,
	appWithTranslation,
	withTranslation,
};
