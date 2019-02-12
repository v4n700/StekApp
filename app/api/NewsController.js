export default class NewsController {
  constructor(apiHelper) {
    this.apiHelper = apiHelper
  }

  GetNews = async () => {
    return this.apiHelper.callJSON("galleries/all/", "GET", {}, undefined)
  }
}