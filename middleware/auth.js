import {auth} from "../assets/controllers/auth";

export default function (context) {
    let authUser = (process.server) ? auth.getUserFromCookie(context.req) :auth.getToken()

    if (!authUser) {
        console.log('auth ', authUser)
        return context.redirect(200, '/login')
    }

}