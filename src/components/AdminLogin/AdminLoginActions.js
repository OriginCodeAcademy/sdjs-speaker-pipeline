import axios from 'axios';

export const updateUsername = (value) => ({
    type: 'UPDATE_USERNAME',
    payload: value,
})

export const updatePassword = (value) => ({
    type: 'UPDATE_PASSWORD',
    payload: value,
})

export const postLogin = (userData) => {
    return {
        type: 'POST_LOGIN',
        payload: {
            login: axios.post('api/organizers/login', userData)
                .then(response => {
                    return response.data
                }),
            authorized: axios({
                method: 'get',
                url: `api/accessTokens/${accessToken}`,
                headers: {
                    Authorization: accessToken
                }
            })
                .then(response => {
                    return response.data
                })
        }
    }
}

export const postLoginPersist = (userData) => {
    return {
        type: 'POST_LOGIN',
        payload: {
            login: axios.post('api/organizers/login', userData)
                .then(response => {
                    return response.data
                }),
            authorized: axios({
                method: 'get',
                url: `api/accessTokens/${accessToken}`,
                headers: {
                    Authorization: accessToken
                }
            })
                .then(response => {
                    return response.data
                }),
            userData
        }
    }
}

export const checkToken = (accessToken) => {
    return {
        type: 'CHECK_TOKEN',
        payload: axios({
            method: 'get',
            url: `api/accessTokens/${accessToken}`,
            headers: {
                Authorization: accessToken
            }
        })
            .then(response => {
                return response.data
            })
    }
}
