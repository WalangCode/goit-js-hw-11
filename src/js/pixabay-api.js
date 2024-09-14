
export const BASE_URL="https://pixabay.com/api/";
const API_KEY="43675085-e2f3d559135f17651c07df813";

export const options = {
    params: {
      key: API_KEY,
      q: '',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: 1,
      per_page: 40,
    },
  };