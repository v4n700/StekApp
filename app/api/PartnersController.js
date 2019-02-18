import { Alert, AsyncStorage } from 'react-native';

export default class PartnersController {
  constructor(apiHelper) {
    this.apiHelper = apiHelper
  }

  GetPartners = async (id) => {
    return new Promise((resolve, reject) => {
      this.apiHelper.callJSON("partners/category/" + id + "/", "GET", {}, undefined).then(
        (response) => {
          resolve(response.result)
        }, (error) => {
          Alert.alert('Ошибка при соединении с сервером')
          reject(error)
        })
    })
  }
}