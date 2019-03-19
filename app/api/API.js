import NewsController from './NewsController';
import PromotionsController from './PromotionsController';
import ApiController from './ApiController';
import CategoriesController from './CategoriesController';
import PartnersController from './PartnersController';
import MapController from './MapController';
import FAQController from './FAQController';
import TokenController from './TokenController';

const apiController = new ApiController();
const newsController = new NewsController(apiController);
const promotionsController = new PromotionsController(apiController);
const categoriesController = new CategoriesController(apiController);
const partnersController = new PartnersController(apiController);
const mapController = new MapController(apiController);
const faqController = new FAQController(apiController);
const tokenController = new TokenController(apiController);

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

  FAQs: () => {
    return faqController
  },

  Map: () => {
    return mapController
  },

  Token: () => {
    return tokenController
  }
}

export default API;