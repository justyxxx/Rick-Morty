const ruLocale = {
	'locale.navigation.details': 'Подробнее'
}

const enLocale = {
	'locale.navigation.details': 'Details'
}

const parseParams = (locale, params) => {
	let newLocale = locale
	params.forEach((par, index) => {
			newLocale = newLocale.replace(`{${index}}`, par)
	})
	return newLocale
}

export const getLocale = (locale, key, ...expressions) => {
	switch (locale) {
			case 'ru': {
					return parseParams(ruLocale[key], expressions)
			}
			case 'en': {
					return parseParams(enLocale[key], expressions)
			}
	}
}
