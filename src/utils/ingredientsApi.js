export const ingredientsUrl = 'https://norma.nomoreparties.space/api/ingredients';

const _checkResponse = (res) => {
    if (res.ok) return res.json();
    else return Promise.reject(res.status);
  };
  
  export const getIngredientsApi = () => {
      return fetch(ingredientsUrl, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          },
      }).then(_checkResponse);
  };