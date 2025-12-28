
import commonAPI from "./CommonAPI"
import serverURL from "./serverURL"

//add employee

export const addEmpAPI =async()=>{
    return await commonAPI("POST",`${serverURL}/addemp`,reqBody,{})
}

//get all employee

// export const getAllEmpAPI = async()=>{
//     return await commonAPI("GET",`${serverURL}/geta`)
// }

//get a employee

//update

//delete emp