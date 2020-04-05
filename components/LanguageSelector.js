import React from 'react';
import {useTranslation} from 'react-i18next';

const LanguageSelector = () => {
	const {t, i18n} = useTranslation();

	const onChangeLanguage = (language) => {
		i18n.changeLanguage(language);
	};

	return (
		<ul className="actions">
			<li>
				<button className="button special big" onClick={() => onChangeLanguage('fr')}>{t('french')}</button>
			</li>
			<li>
				<button className="button special big" onClick={() => onChangeLanguage('en')}>{t('english')}</button>
			</li>
			<li>
				<button className="button special big" onClick={() => onChangeLanguage('de')}>{t('german')}</button>
			</li>
		</ul>
	);
};

LanguageSelector.getInitialProps = async () => ({
	namespacesRequired: ['common'],
});

export default LanguageSelector;
