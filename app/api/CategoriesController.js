import { Alert, AsyncStorage } from 'react-native';

export default class CategoriesController {
  constructor(apiHelper) {
    this.apiHelper = apiHelper
  }

  GetCategories = async () => {
    return new Promise((resolve, reject) => {
      this.apiHelper.callJSON("categories/", "GET", {}, undefined).then(
        (response) => {
          resolve(response.result)
        }, (error) => {
          Alert.alert('Ошибка при соединении с сервером')
          reject(error)
        })
    })
  }
}