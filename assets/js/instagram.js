/**
 * @description Function that takes Instagram User Name as argument and returns the Instagram User ID
 * @param {*} userName 
 */
function getUserID(userName) {
    var CORS_URL = "https://cors-anywhere.herokuapp.com/";
    var request_URL = "http://mv-wss.handysofts.com/mv-wss/insprofilefinder/api/v1/user/profile/search/";
    axios.get(CORS_URL + request_URL + userName)
        .then(
            res => {
                return res.data.user[0].id; 
            }
        );
};

/**
 * @description Function that displays 20 most recent images uploaded in Instagram by the user. This will populate 20 most recent Instagram images in "instafeed" div tag
 * @param {*} userID 
 */
function getRcntImgsByID(userID) {
    var feed = new Instafeed({
        get: "user",
        userId: userID,
        clientId: "03bf2f8522064004a1f8a9539c71ad86",
        accessToken: "6128146321.03bf2f8.a8f8f54d5edf4386a907cc022b9ea46f"
    });
    feed.run();
};

/** Function that displays 20 most recent "tagged" images uploaded in Instagram by the user. This will populate 20 most recent Instagram "tagged" images in "instafeed" div tag
 * @description 
 * @param {*} userID 
 * @param {*} tag 
 */
function getRcntTgdImgsByID(userID, tag) {
    var feed = new Instafeed({
        get: "user",
        userId: userID,
        clientId: "03bf2f8522064004a1f8a9539c71ad86",
        accessToken: "6128146321.03bf2f8.a8f8f54d5edf4386a907cc022b9ea46f",
        filter: function(image){
            if(image.caption != null) {
                return image.caption.text == tag;
            }
            return false; 
        }
    });
    feed.run();
};

/**
 * Function that displays 20 most recent Instagram images for a given User-Name. Images are displayed in the "instafeed" div on the web page
 * @param {*} userID 
 */
function getRcntImgsByID(userName) {
    var userID = getUserID(userName);
    getRcntImgsByID(userID);
}

/**
 * Function that displays 20 most recent "tagged" Instagram images for a given User-Name. Images are displayed in the "instafeed" div on the web page
 * @param {*} userName 
 */
function getRcntTgdImgsByName(userName) {
    var userID = getUserID(userName);
    getRcntTgdImgsByID(userID);
}