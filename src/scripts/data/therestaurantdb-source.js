/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class TheRestaurantDbSource {
  static async restaurantHomePages() {
    try {
      const response = await fetch(API_ENDPOINT.HOME);
      const responseJson = await response.json();
      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        return responseJson.restaurants;
      }
    } catch (error) {
      showResponseMessage(error);
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        return responseJson.restaurant;
      }
    } catch (error) {
      showResponseMessage(error);
    }
  }

  static async sendReview(review) {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(review),
    });
    return response;
  }
}

const showResponseMessage = (message = 'Check your internet connection') => {
  alert(message);
};

export default TheRestaurantDbSource;
