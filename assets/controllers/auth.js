import API from '../services/Api.js'
import Cookies from 'js-cookie'
import cookie from 'cookie'

export const auth = {
    login,
    logout,
    getToken,
    getUserFromCookie,
    getUidFromStorage,
    getUidFromCookie
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
                Cookies.set('uid', res.data.app_init.user.id)
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
            Cookies.remove('token', { path: '' });
            Cookies.remove('uid', { path: '' });
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
    if (req) {
        if (!req.headers.cookie) return
        let cookies = cookie.parse(req.headers.cookie)

        return cookies.token
    }
}

function getUidFromStorage() {
    if(process.browser) {
        return JSON.parse(sessionStorage.getItem('user')).id
    }
}

function getUidFromCookie(req) {
    if (req) {
        if (!req.headers.cookie) return
        let cookies = cookie.parse(req.headers.cookie)
        return cookies.uid
    }
}