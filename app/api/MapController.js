import { Alert, AsyncStorage } from 'react-native'

export default class MapController {
  constructor(apiHelper) {
    this.apiHelper = apiHelper
  }

  GetLocations = async () => {
    return new Promise((resolve, reject) => {
      this.apiHelper.callJSON("partners/locations/", "GET", {}, undefined).then(
        (response) => {
          resolve(response.result)
        }, (error) => {
          Alert.alert('Не удалось получить метки с сервера')
          reject(error)
        })
    })
  }
}