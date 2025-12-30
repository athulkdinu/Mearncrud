
import commonAPI from "./CommonAPI"
import serverURL from "./serverURL"

//add employee

export const addEmpAPI =async(reqBody)=>{
    return await commonAPI("POST",`${serverURL}/addemp`,reqBody,{})
}

//get all employee

export const getAllEmpAPI = async()=>{
    return await commonAPI("GET",`${serverURL}/all-employees`,"",{})
}

//get a employee
export const getAEmpAPI = async(id)=>{
    return await commonAPI("GET",`${serverURL}/get-emp/${id}`,{})
}


//update
export const updateEmpAPI = async(reqBody)=>{
    return await commonAPI("PUT",`${serverURL}/update-emp`,reqBody)
}



//delete emp
export const deleteEmpAPI = async(id)=>{
    return await commonAPI("delete",`${serverURL}/remove-emp/${id}`)
}