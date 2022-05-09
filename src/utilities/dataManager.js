import axios from "axios";

const apiClient = axios.create({});

export default{
    getUser(){
        return apiClient.get("https://5e4b062d6eafb7001488c99e.mockapi.io/something123/users");
    }
}