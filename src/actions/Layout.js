import { WINDOW_SIZE } from './types'

export const _onLayoutSize = number => ({
  type: WINDOW_SIZE,
  payload: number,
})

export const _onToggleNav = bool => ({
  type: NAV_ACTIVATED,
  payload: bool,
})
