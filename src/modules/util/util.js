let util = {
    isLogin
}
//是否处于登录状态
function isLogin() {
    let user = localStorage.getItem('user')
    if (user) {
        return true;
    } else {
        return false;
    }
}
export default util;