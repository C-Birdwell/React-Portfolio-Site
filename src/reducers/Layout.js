import { WINDOW_SIZE, NAV_ACTIVATED } from '../actions/types'

const INITIAL_STATE = {
  windowSize: 0,
  windowMode: '',
  gridNum: 0,
  navToggle: false,
}

const detectWindowSize = val => {
  return val <= 1150 ? 'mobile' : 'desktop'
}

const createBackgroundGrid = val => {
  return detectWindowSize(val) === 'desktop' ? 20 : 10
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WINDOW_SIZE:
      return {
        ...state,
        windowSize: action.payload,
        windowMode: detectWindowSize(action.payload),
        gridNum: createBackgroundGrid(action.payload),
      }

    case NAV_ACTIVATED:
      return { ...state, navToggle: action.payload }

    default:
      return { ...state }
  }
}
