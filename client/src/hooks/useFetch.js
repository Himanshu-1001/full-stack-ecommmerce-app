import { useEffect, useState } from "react"
import fetchData from "../utils/api";

const useFetch = (endpoint) =>{
    const [data, setData] = useState();

    useEffect(() =>{
        getInfo();
    }, [endpoint])

    const getInfo = async () =>{
        await fetchData(endpoint).then((res) =>{
            setData(res.data);
        })
    }
    return data;
}

export default useFetch;