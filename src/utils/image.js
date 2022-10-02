import { REST_API } from './constants'

const getImageSrc = (imageName) => `${REST_API}images/${imageName}`

export {
  getImageSrc
}
