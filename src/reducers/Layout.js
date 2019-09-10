import { WINDOW_SIZE, NAV_ACTIVATED } from '../actions/types'

const INITIAL_STATE = {
  windowSize: 0,
  windowMode: '',
  navToggle: false,
}

const detectWindowSize = val => {
  return val <= 1150 ? 'mobile' : 'desktop'
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WINDOW_SIZE:
      return { ...state, windowSize: action.payload, windowMode: detectWindowSize(action.payload) }

    case NAV_ACTIVATED:
      return { ...state, navToggle: action.payload }

    default:
      return { ...state }
  }
}
