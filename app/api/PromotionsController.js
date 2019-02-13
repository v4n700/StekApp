import { Alert, AsyncStorage } from 'react-native'

export default class PromotionsController {
  constructor(apiHelper) {
    this.apiHelper = apiHelper
  }

  GetPromotions = async () => {
    return new Promise((resolve, reject) => {
      this.apiHelper.callJSON("actions/", "GET", {}, undefined).then(
        (response) => {
          resolve(response.result)
        }, (error) => {
          reject(error)
        })
    })
  }
}