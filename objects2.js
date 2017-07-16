var facebookProfile = {
    name : "Imran",
    friends : 10,
    messages : ["hi", "like", "love"],
    postMessage : function(message) {
        facebookProfile.messages.push("newMessage");
        return facebookProfile.messages;
    },
    deleteMessage : function(index) {
        facebookProfile.messages.splice(index, 1);
        return facebookProfile.messages;
    },
    addFriend : function() {
        facebookProfile.friends += 1;
        return facebookProfile.friends;
    },
    removeFriend : function() {
        facebookProfile.friends -= 1;
        return facebookProfile.friends;
    }
};

console.log(facebookProfile.postMessage());