import { Alert, AsyncStorage } from 'react-native';

export default class FAQController {
  constructor(apiHelper) {
    this.apiHelper = apiHelper
  }

  GetFAQs = async () => {
    return new Promise((resolve, reject) => {
      this.apiHelper.callJSON("questions/", "GET", {}, undefined).then(
        (response) => {
          resolve(response.result)
        }, (error) => {
          Alert.alert('Ошибка при соединении с сервером')
          reject(error)
        })
    })
  }
}