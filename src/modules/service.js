import axios from "axios"
let nodeUrl = " https://cnodejs.org";
let nodeService = {
    nodeUrl,
    commonGet,
    commonPost
}

//通用get方法
function commonGet(url, params, callback,errorCallback) {
    axios.get(url,{params})
    .then((response) => {
        callback(response)
    })
    .catch((error) => {
        errorCallback && errorCallback(error)
    })
}
//通过post方法
function commonPost(url, params, callback,errorCallback) {
    axios.post(url, params)
    .then((response) => {
        callback(response)
    })
    .catch((error) => {
        errorCallback && errorCallback(error)
    })
}

export default nodeService;