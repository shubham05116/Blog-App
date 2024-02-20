
import Cookies from "js-cookie"


const SetCookies =(cookieName , userIn)=>{
    Cookies.set(
        cookieName,
         userIn,
          { expires: 7,
            path: '/',
            sameSite: 'strict',
            secure: true
         });

}


export default SetCookies;