import { auth } from "../assets/controllers/auth";

export default function (context) {
    let authUser = (!process.server) ? auth.getToken() : auth.getUserFromCookie(context.req)

    if (authUser)
        return context.redirect(200, '/home')

}