import axios from "axios"

const fetchData = async (url) =>{
    try {
        const {data}=await axios.get(process.env.REACT_APP_BASE_URL+url, {
            headers:{
                Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
            }
        })

        return data;

    } catch (error) {
        console.log(error);
        return error
    }
}

// const makePayment = async (url, products) =>{
//     try {
//         await axios.post(process.env.REACT_APP_BASE_URL+url, products, {
//             headers:{
//                 Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
//             }
//         })
//     } catch (error) {
//         console.log(error);
//         return error;
//     }
// }

export const makePayment = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers:{
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
    }

})

export default fetchData;
