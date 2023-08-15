import axios from "axios"
const url: string = "http://localhost:9000/api/v1"

interface iData{
    name?: string;
    email?: string;
    password?: string;
    avatar?: string;
    avatarID?: string;
}

export const registerAPI = async(data: any) =>{
    try {

        const config = {
            "content-type" : "multipart/formdata"
        }
        return await axios.post(`${url}/register`,data, config ).then((res: any) =>{
            return res.data.data
        })
    } catch (error) {
        console.log("Error: ", error)
    }
}

export const SignInAPI = async(data: iData) =>{
    try {
        return await axios.post(`${url}/sign-in`, data).then((res: any) =>{
            return res.data.data
        })
    } catch (error) {
        console.log("Error: ", error)
    }
}
export const getAllAPI = async(data: iData) =>{
    try {
        return await axios.post(`${url}/users`, data).then((res: any) =>{
            return res.data.data
        })
    } catch (error) {
        console.log("Error: ", error)
    }
}

export const getOneAPI = async(userID: iData) =>{
    try {
        return await axios.post(`${url}/${userID}/get-one-user`).then((res: any) =>{
            return res.data.data
        })
    } catch (error) {
        console.log("Error: ", error)
    }
}