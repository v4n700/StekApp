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
          reject(error)
        })
    })
  }
}