const CHANGE_LOCALE = 'CHANGE_LOCALE'

let initialState = {
    locale: 'ru'
}

const localeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LOCALE:
            return {
                ...state,
                locale: action.locale
            }
        default:
            return state
    }
}

export const actionChangeUserLocale = (locale) => ({
    type: CHANGE_LOCALE,
    locale: locale
})

export const changeLocale = (locale) => {
    return (dispatch) => {
        dispatch(actionChangeUserLocale(locale))
    }
}
export default localeReducer
