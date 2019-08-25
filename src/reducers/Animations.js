import { FANCY_BACKGROUND } from '../actions/types'

const INITIAL_STATE = {
  fancyBackground: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FANCY_BACKGROUND:
      return { ...state, fancyBackground: action.payload }
    default:
      return { ...state }
  }
}
