import API from '../services/Api.js'
import Cookies from 'js-cookie'

export const auth = {
    login,
    logout,
    getToken,
    getUserFromCookie
}

function login(data) {
    return new Promise((resolve, reject)=>{
        API.call(
            'POST',
            '/auth/login',
            {},
            null,
            data
            )
            .then(res => {
                sessionStorage.setItem('user', JSON.stringify(res.data.app_init.user))
                sessionStorage.setItem('token', res.data.token)
                Cookies.set('token', res.data.token)
                return resolve(res.data)
            }, err => {
                return reject(err.toString())
            })
    })
}

function logout() {
    return new Promise((resolve, reject)=>{
        API.call(
            'POST',
            '/auth/logout',
        ).then(res => {
            sessionStorage.removeItem('user')
            sessionStorage.removeItem('token')
            Cookies.remove('token');
            return resolve(res.data)
        }, err => {
            return reject(err.toString())
        })
    })
}

function getToken () {
    if(process.browser){
        return sessionStorage.token || undefined
    }
}

function getUserFromCookie (req) {
    if (!req.headers.cookie) return

    return req.headers.cookie
}