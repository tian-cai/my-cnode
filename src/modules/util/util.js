let util = {
    isLogin,
    getLoginName,
    getUserAva,
    logout
}
//是否处于登录状态
function isLogin() {
    let user = localStorage.getItem('userToken')
    if (user) {
        return true;
    } else {
        return false;
    }
}
function getLoginName() {
    return JSON.parse(localStorage.getItem('userInfo')).loginname
}
function getUserAva() {
    return JSON.parse(localStorage.getItem('userInfo')).avatar_url
}
function logout() {
    localStorage.clear()
}
export default util;