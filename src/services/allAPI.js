import apiService from "../api/apiService";

//add resume api

export const addResumeAPI =async(reqBody) => {
  return await apiService("POST", '/resumes', reqBody)

}   
// get single resume
export const getResumeAPI=async(resumeId)=>{
  return await apiService("GET",`/resumes/${resumeId}`,{})
}
//downloadAPI
export const downloadResumeAPI=async(reqbody)=>{
  return await apiService("POST",`/history`,reqbody)
}
//get single resume
export const getHistoryAPI=async()=>{
  return await apiService("GET",`/history`,{})
}
//delete history
export const dltHistoryAPI=async(id)=>{
  return await apiService("DELETE",`/history/${id}`,{})
  
}
//update resume
export const updateResumeAPI=async(id,reqBody)=>{
  return await apiService("PUT",`/resumes/${id}`,reqBody)
  
}