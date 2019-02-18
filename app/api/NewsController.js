import { Alert, AsyncStorage } from 'react-native';

export default class NewsController {
  constructor(apiHelper) {
    this.apiHelper = apiHelper
  }

  GetNews = async () => {
    return new Promise((resolve, reject) => {
      this.apiHelper.callJSON("feed/", "GET", {}, undefined).then(
        (response) => {
          resolve(response.result)
        }, (error) => {
          Alert.alert('Ошибка при соединении с сервером')
          reject(error)
        })
    })
  }
}