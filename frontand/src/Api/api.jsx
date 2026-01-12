import Api from "../config/axiosconfig/Api";

export const GetData =()=>{
    return Api.get(`/product/get-data`)
}
export const AddData =(data)=>{
    return Api.post(`/product/add-data`,data)
}
export const DeleteDataById =(id)=>{
    return Api.delete(`/product/delete-data/${id}`)
}
export const UpdateData =(id,data)=>{
    return Api.get(`/product/get-data/${id}`,data)
}
export const GetDataByID =(id)=>{
    return Api.get(`/product/getbyid-data/${id}`)
} 