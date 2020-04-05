import PropTypes from 'prop-types';
import React from 'react';
import {withTranslation} from '../utils/i18n';
import LanguageSelector from './LanguageSelector';

const Banner = ({t}) => (
	<section id="banner">
		<h2>{t('welcome')}</h2>
		<p>{t('description')}</p>
		<LanguageSelector/>
	</section>
);

export default withTranslation('common')(Banner);

Banner.propTypes = {
	t: PropTypes.func.isRequired
};
