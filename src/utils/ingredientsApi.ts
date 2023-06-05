export const stellarUrl = 'https://norma.nomoreparties.space/api';

interface IResponse {
    body: ReadableStream<Uint8Array> | null,
    bodyUsed: boolean,
    headers: Headers,
    ok: boolean,
    redirected: boolean,
    status: number,
    statusText: string,
    type: ResponseType,
    url: string,
    json(): Promise<any>
}

const _checkResponse = (res:IResponse) => {
    if (res.ok) return res.json();
    else return Promise.reject(res.status);
};

export const getIngredientsApi = () => {
    return fetch(`${stellarUrl}/ingredients`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then(_checkResponse)
};


export const postOrderApi = (idArray:string[], token:string) => {
    return fetch(`${stellarUrl}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: token
        },
        body: JSON.stringify({ ingredients: idArray }),
    })
        .then(_checkResponse)
};

export const resetPassword = (email:string) => {
    return fetch(`${stellarUrl}/password-reset`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "email": email }),
    })
        .then(_checkResponse)
}

export const changePassword = (password:string | null, token:string | null) => {
    return fetch(`${stellarUrl}/password-reset/reset`, {
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

export const registerUser = (email:string, password:string, userName:string) => {
    return fetch(`${stellarUrl}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "email": email,
            "password": password,
            "name": userName
        }),
    }).then(_checkResponse)
}

export const login = (email:string, password:string) => {
    return fetch(`${stellarUrl}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "email": email,
            "password": password,
        }),
    }).then(_checkResponse)
}

export const getUser = (token:string) => {
    return fetch(`${stellarUrl}/auth/user`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: token
        },
    }).then(_checkResponse)
}

export const refreshToken = (access:string, refresh:string) => {
    return fetch(`${stellarUrl}/auth/token`, {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json;charset=utf-8',
         authorization: access
        },
        body: JSON.stringify({
         "token": `${refresh}`
        })
       }).then(_checkResponse)
}

export const updateUserApi = (token:string, updateInfo:Record<string, string> | null) => {
    return fetch(`${stellarUrl}/auth/user`, {
        method: 'PATCH',
        headers: {
         'Content-Type': 'application/json;charset=utf-8',
         authorization: token
        },
        body: JSON.stringify(updateInfo)
    }).then(_checkResponse)
}

export const logout = (refresh:string | null) => {
    return fetch(`${stellarUrl}/auth/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
            "token": `${refresh}`
        })
    }).then(_checkResponse)
}