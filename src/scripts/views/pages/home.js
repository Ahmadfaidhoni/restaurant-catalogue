import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="content">
            <h2 class="content__heading">Explore Restaurant</h2>
            <div id="restos" class="restos">
    
            </div>
        </div>
      `;
  },

  async afterRender() {
    const restos = await TheRestaurantDbSource.restaurantHomePages();
    const restosContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });

    const hero = document.querySelector('.hero');
    hero.style.display = '';

    const heroElement = document.querySelector('.hero__inner');
    heroElement.style.display = '';
  },
};

export default Home;
