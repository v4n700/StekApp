import NewsController from './NewsController';
import PromotionsController from './PromotionsController';
import ApiController from './ApiController';

const apiController = new ApiController();
const newsController = new NewsController(apiController);
const promotionsController = new PromotionsController(apiController);

const API = {

  Url: () => {
    return apiController.apiUrl
  },

  Api: () => {
    return apiController
  },

  News: () => {
    return newsController
  },
  
  Promotions: () => {
    return promotionsController
  }
}

export default API;