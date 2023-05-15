import axios from "axios";
import { BASE_URL } from "./BaseURL";
// {countSeach}
//GET ALL PEOPLE
export const getAllPeople = async () =>{
    let globalData
    await axios.get(`${BASE_URL}/employes`)
    .then(res=>{
        globalData = res.data;
    })
    return globalData
}

//GET PEOPLE BY ID
export const getPeopleByID = async (id) =>{
    let globalData
    await axios.get(`${BASE_URL}/employes/${id}`)
    .then(res=>{
        globalData = res.data;
    })
    return globalData
}
//POST PEOPL
export const postPeople = (payload) =>{
    axios.post(`${BASE_URL}/employes`,payload)
}
//PUT PEOPLE
export const putPeople = (id,payload) =>{
    axios.put(`${BASE_URL}/employes/${id}`,payload)
}
//DELETE PEOPLE BY ID
export const deletePeople = id =>{
    axios.delete(`${BASE_URL}/employes/${id}`)
}