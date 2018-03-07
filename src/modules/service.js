let nodeUrl = " https://cnodejs.org/api/v1";
let API = {
    GET_TOPICS: nodeUrl + "/topics",
    GET_TOPIC_DETAIL: nodeUrl + "/topic/{topicId}",
    POST_TOPIC: nodeUrl + "/topics",
    EDIT_TOPIC: nodeUrl + "/topics/update",
    COLLECT_TOPIC: nodeUrl+ "/topic_collect/collect",
    DE_COLLECT_TOPIC: nodeUrl+ "/topic_collect/de_collect",
    NEW_REPLY: nodeUrl + "/topic/{topicId}/replies",
    GOOD_REPLY: nodeUrl + "/reply/{replyId}/ups",
    USER_COLLECT_TOPIC: nodeUrl + "/topic_collect/{loginname}",
    USER_DETAIL: nodeUrl + "/user/{loginname}",
    USER_MESSAGE_ALL: nodeUrl + "/messages",
    USER_MESSAGE_UNREAD: nodeUrl + "/message/count",
    MARK_MESSAGE: nodeUrl + "/message/mark_one/{msgId}",
    MARK_MESSAGE_ALL: nodeUrl + "/message/mark_all",
    LOGIN: nodeUrl + "/accesstoken"
}

export default API;