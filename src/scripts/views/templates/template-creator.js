import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <h2 class="resto__title">${resto.name}</h2>
  <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
  <div class="resto__info">
  <h3 class="resto__tag-info">Information</h3>
    <h4>📍 Address</h4>
    <p>${resto.address}</p>
    <h4>🏬 City</h4>
    <p>${resto.city}</p>
    <h4>💬 Description</h4>
    <p align="justify">${resto.description}</p>
    <h4>🍝 Food's</h4>
    <div class="menu__overview">
        ${resto.menus.foods.map((menu) => `
            <div class="menusInfo">
                <p tabindex="0">✔️ ${menu.name}</p>
            </div>
        `).join('')}
    </div>
    <h4>🍺 Drink's</h4>
    <div class="menu__overview">
        ${resto.menus.drinks.map((menu) => `
            <div class="menusInfo">
                <p tabindex="0">✔️ ${menu.name}</p>
            </div>
        `).join('')}
    </div>
  </div>
  <h3 class="customers__review">Review Customers</h3>
  <div class="resto__overview">
    ${resto.customerReviews.map((review) => `
        <div class="reviewInfo">
            <h6 tabindex="0">${review.name}</h6>
            <p tabindex="0">${review.review}</p>
            <p tabindex="0" class="date-review">${review.date}</p>
        </div>
    `).join('')}
  </div>
`;

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
        <img class="resto-item__header__poster" alt="${resto.name}"
            src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="resto-item__header__rating">
            <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
        </div>
    </div>
    <div class="resto-item__content">
        <h3><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h3>
        <p>${resto.description}</p>
    </div>
  </div>
  `;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
