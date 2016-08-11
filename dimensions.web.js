//import { Dimensions } from 'react-native'

const dimensions = {}

class Dimensions {
  static get(dimension) {
    return dimensions[dimension]
  }

  static set() {
    dimensions.window = {
      fontScale: 1,
      height: 600,
      scale: 1,
      width: 410
    }

    dimensions.screen = {
      fontScale: 1,
      height: 800,
      scale: 1,
      width: 410
    }
  }
}
Dimensions.set()
export default Dimensions