import { FANCY_BACKGROUND, HAS_SCROLLED } from './types'

export const _onUpdateFancyBackground = bool => ({
  type: FANCY_BACKGROUND,
  payload: bool,
})

export const _onChangeHeader = bool => ({
  type: HAS_SCROLLED,
  payload: bool,
})
// (window.onscroll = () => {
//   if (window.pageYOffset !== 0) {
//     // alert('I AM AT THE TOP')
//     return { type: HAS_SCROLLED, payload: true }
//   } else {
//     return { type: HAS_SCROLLED, payload: false }
//   }
// })
