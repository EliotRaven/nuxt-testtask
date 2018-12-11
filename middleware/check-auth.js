import {auth} from "../assets/controllers/auth";

export default function (context) {

    const authUser = (process.server) ? auth.getUserFromCookie(context.req) : auth.getToken()

    console.log('chek-auth ', authUser)

    return

    // if (process.server) {
    //     if (!authUser) {
    //         // context.redirect(200, '/login')
    //     } else {
    //         // context.redirect(200, '/home')
    //     }
    // }
    //
    // if (context.isServer && !context.req) {
    //     // context.redirect(200, '/home')
    // }
    //
    // return
}