import {auth} from "../assets/controllers/auth";

export default function (context) {

    const authUser = (process.server) ? auth.getUserFromCookie(context.req) : auth.getToken()
    return

}