import { FANCY_BACKGROUND, HAS_SCROLLED } from '../actions/types'

const INITIAL_STATE = {
  fancyBackground: '',
  hasScrolled: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FANCY_BACKGROUND:
      return { ...state, fancyBackground: action.payload }

    case HAS_SCROLLED:
      return { ...state, hasScrolled: action.payload }

    default:
      return { ...state }
  }
}
