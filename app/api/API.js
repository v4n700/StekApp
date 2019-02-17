import NewsController from './NewsController';
import PromotionsController from './PromotionsController';
import ApiController from './ApiController';
import CategoriesController from './CategoriesController';
import PartnersController from './PartnersController';
import MapController from './MapController';

const apiController = new ApiController();
const newsController = new NewsController(apiController);
const promotionsController = new PromotionsController(apiController);
const categoriesController = new CategoriesController(apiController);
const partnersController = new PartnersController(apiController);
const mapController = new MapController(apiController);

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
  },

  Categories: () => {
    return categoriesController
  },

  Partners: () => {
    return partnersController
  },

  Map: () => {
    return mapController
  }
}

export default API;