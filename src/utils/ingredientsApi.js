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

export const resetPassword = (email) => {
    return fetch(`${ingredientsUrl}/password-reset`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "email": email }),
    })
        .then(_checkResponse)
}

export const changePassword = (password, token) => {
    return fetch(`${ingredientsUrl}/password-reset/reset`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "password": password,
            "token": token
        }),
    })
        .then(_checkResponse)
}

export const registerUser = (email, password, userName) => {
    return fetch(`${ingredientsUrl}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "email": email,
            "password": password,
            "name": userName
        }),
    })
        .then(_checkResponse)
}