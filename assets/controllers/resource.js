import API from '../services/Api.js'
import { auth } from "./auth";

export const resource = {
    index,
    store,
    update
}

function index() {
    const authToken = auth.getToken() || auth.getUserFromCookie()
    const headers = {'Authorization': "Bearer " + authToken}

    return new Promise((resolve, reject)=>{
        API.call(
            'GET',
            '/projects-manage/index',
            headers
            )
            .then(res => {
                return resolve(res.data)
            }, err => {
                return reject(err.toString())
            })
    })
}

function store(id) {
    const authToken = auth.getToken() || auth.getUserFromCookie()
    const headers = {'Authorization': "Bearer " + authToken}

    return new Promise((resolve, reject)=>{
        API.call(
            'GET',
            `/projects-manage/${id}`,
            headers
            )
            .then(res => {
                return resolve(res.data)
            }, err => {
                return reject(err.toString())
            })
    })
}

function update(id, object) {
    const authToken = auth.getToken() || auth.getUserFromCookie()
    const headers = {'Authorization': "Bearer " + authToken}

    return new Promise((resolve, reject)=>{
        API.call(
            'PUT',
            `/projects-manage/update`,
            headers,
            {id},
            object)
            .then(res => {
                return resolve(res.data)
            }, err => {
                return reject(err.toString())
            })
    })
}

