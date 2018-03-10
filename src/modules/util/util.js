let util = {
    isLogin,
    getLoginName,
    getUserAva,
    logout,
    formatTime
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

// 获取用户名
function getLoginName() {
    return JSON.parse(localStorage.getItem('userInfo')).loginname
}

//获取用户头像
function getUserAva() {
    return JSON.parse(localStorage.getItem('userInfo')).avatar_url
}

//注销登录
function logout() {
    localStorage.clear()
}

//时间处理
function formatTime(timeStr) {
    let timeDate = new Date(timeStr);
    let year = timeDate.getFullYear();
    let month = timeDate.getMonth() + 1;
    let date = timeDate.getDate();
    let hour = timeDate.getHours();
    let minute = timeDate.getMinutes();
    let second = timeDate.getSeconds();
    month = formatCtrl(month);
    date = formatCtrl(date);
    hour = formatCtrl(hour);
    minute = formatCtrl(minute);
    second = formatCtrl(second);
    return `${year}-${month}-${date} ${hour}:${minute}:${second}`
}
//不足两位数的，前面补0
function formatCtrl(str) {
    return str < 10 ? '0' + str : str
}
export default util;