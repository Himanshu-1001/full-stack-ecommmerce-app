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

export default fetchData;