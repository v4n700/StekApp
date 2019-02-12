import NewsController from './NewsController';

const newsController = new NewsController(apiController);

const API = {

  Url: () => {
    return apiController.apiUrl
  },

  Api: () => {
    return apiController
  },

  News: () => {
    return newsController
  }
  
}

export default API;