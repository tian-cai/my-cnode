import axios from "axios"
let nodeUrl = " https://cnodejs.org";
let nodeService = {
    nodeUrl,
    getTopicList
}

//获取主题列表
function getTopicList(url, params, callback,errorCallback) {
    axios.get(url,{
        params
    })
    .then((response) => {
        callback(response)
    })
    .catch((error) => {
        errorCallback && errorCallback(error)
    })
}

//获取指定主题详情
function getTopicDetail(url, params, callback,errorCallback) {
    axios.get(url,{
        params
    })
    .then((response) => {
        callback(response)
    })
    .catch((error) => {
        errorCallback && errorCallback(error)
    })
}
export default nodeService;