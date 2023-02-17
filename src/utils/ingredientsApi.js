export const ingredientsUrl = 'https://norma.nomoreparties.space/api';

const _checkResponse = (res) => {
    if (res.ok) return res.json();
    else return Promise.reject(res.status);
};

export const getIngredientsApi = () => {
    return fetch(`${ingredientsUrl}/ingredients`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then(_checkResponse)
};


export const postOrderApi = (idArray) => {
    return fetch(`${ingredientsUrl}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ingredients: idArray }),
    })
    .then(_checkResponse)
};