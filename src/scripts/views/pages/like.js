import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import FavoriteRestoSearchPresenter from './liked-restos/favorite-resto-search-presenter';
import FavoriteRestoSearchView from './liked-restos/favorite-resto-search-view';
import FavoriteRestoShowPresenter from './liked-restos/favorite-resto-show-presenter';

const view = new FavoriteRestoSearchView();
const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestoShowPresenter({ view, favoriteRestos: FavoriteRestaurantIdb });
    new FavoriteRestoSearchPresenter({ view, favoriteRestos: FavoriteRestaurantIdb });

    const hero = document.querySelector('.hero');
    hero.style.display = 'none';

    const heroElement = document.querySelector('.hero__inner');
    heroElement.style.display = 'none';
  },
};

export default Like;
