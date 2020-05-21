import { FANCY_BACKGROUND, HAS_SCROLLED } from '../actions/types'

const INITIAL_STATE = {
  fancyBackground: 'Home',
  hasScrolled: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FANCY_BACKGROUND:
      const formatURL =
        action.payload === '/'
          ? 'Home'
          : action.payload
              .substr(1)
              .charAt(0)
              .toUpperCase() + action.payload.slice(2)
      return { ...state, fancyBackground: formatURL }

    case HAS_SCROLLED:
      return { ...state, hasScrolled: action.payload }

    default:
      return { ...state }
  }
}
