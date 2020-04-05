import React from 'react';
import App from 'next/app';
import {appWithTranslation} from '../utils/i18n';

class MyApp extends App {
	render() {
		const {Component, pageProps} = this.props;

		return (
			<Component {...pageProps} />
		);
	}
}

export default appWithTranslation(MyApp);
