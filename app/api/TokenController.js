import {Alert, AsyncStorage} from 'react-native';

export default class PromotionsController {
  constructor(apiHelper) {
    this.apiHelper = apiHelper
  }

  SetToken = async (token) => {
    return new Promise((resolve, reject) => {
      this.apiHelper.callJSON("token_devices/", "POST", {}, {"token_device": token}).then(
        (response) => {
          resolve(response.result)
        }, (error) => {
          reject(error)
        })
    })
  }
}