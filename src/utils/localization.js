const ruLocale = {
	'locale.navigation.details': 'Подробнее',
	'locale.navigation.next': 'След',
	'locale.navigation.prev': 'Пред',
	'locale.navigation.total.pages': 'Всего страниц',
	'locale.navigation.total.chars': 'Всего персонажей',
	'locale.navigation.cur.page': 'Текущая страница'
}

const enLocale = {
	'locale.navigation.details': 'Details',
	'locale.navigation.next': 'Next',
	'locale.navigation.prev': 'Prev',
	'locale.navigation.total.pages': 'Total pages',
	'locale.navigation.total.chars': 'Total chars',
	'locale.navigation.cur.page': 'Current page'
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
