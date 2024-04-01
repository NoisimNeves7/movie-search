import axios from "../../utils/Axios";
import { loadPeople, removePeople } from "../reducers/peopleSlice";


export const asyncLoadPeople =({id})=>async (dispatch,useState)=>{
    
    try {
        const details = await axios.get(`person/${id}`)
        const combinedCredits = await axios.get(`person/${id}/combined_credits`)
        const movieCredits = await axios.get(`person/${id}/movie_credits`)
        const tvCredits = await axios.get(`person/${id}/tv_credits`)
        const externalIds = await axios.get(`person/${id}/external_ids`)

        const ultimateData = {
            details:details.data,
            combinedCredits:combinedCredits.data,
            movieCredits:movieCredits.data,
            tvCredits:tvCredits.data,
            externalIds:externalIds.data,
        }
        dispatch(loadPeople(ultimateData))
        // console.log(ultimateData)
    } catch (error) {
        console.log("error :", error)
    }
}