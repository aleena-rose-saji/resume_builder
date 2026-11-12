import axios from "axios";

const axiosInstance=axios.create({
    baseURL:'https://rbuilder-server-aug26.onrender.com',
    timeout:5000
})

export default axiosInstance

//response interceptors : handling global/common errors

axiosInstance.interceptors.response.use((response)=>{
    return response
},(error)=>{
    if(error.response){
        const status=error.response.status

        if(status==401){
            console.log("Un-Authorized");
            
        }
        else if(status==404){
            console.log("API not found");
            
        }
        else if(status==500){
            console.log("sever error");
            
        }
        else if(error.request){
            console.log("No response from server");
            
        }
        else{
            console.log("Error"+error.messages);
            
        }
        return Promise.reject(error);
    }
})
