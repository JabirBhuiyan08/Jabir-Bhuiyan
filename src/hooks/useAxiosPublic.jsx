import axios from "axios";

const useAxiosPublic =()=>{
    return axios.create({
        baseURL:'http://localhost:5000'
    })
}

export default useAxiosPublic;