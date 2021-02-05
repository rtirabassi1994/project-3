import axios from "axios";
 
export default {
    getUser: async function(existingUser) {
        var userName = existingUser.userName;
        var password = existingUser.password;
        // var user = userName + password;
        // console.log(userName);
        // console.log(JSON.stringify(existingUser.userName));
        return await axios.get("/api/getUser/" + userName + "/" + password);
    },
    createUser: async function(user) {
        // console.log(user);
        // console.log("this is the createUse function in UTILS API")
        return await axios.post("/api/createUser", user);
    },
    deleteUser: async function(user) {
        // console.log(user);
        var userData = {data: user}
        console.log("client/src/utils/: line:20: deleteUser()...")
        return await axios.delete("/api/deleteUser", userData);
    },
    userInfo: async function() {
        
        return await axios.get("/api/getUser")
    },

    logIn: function(user) {
        console.log(user);
        return axios.post("/login", user)
    }

}