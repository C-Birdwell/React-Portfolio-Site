import { FANCY_BACKGROUND, HAS_SCROLLED } from './types'

export const _onUpdateFancyBackground = bool => ({
  type: FANCY_BACKGROUND,
  payload: bool,
})

export const _onChangeHeader = bool => ({
  type: HAS_SCROLLED,
  payload: bool,
})
