import axios from "../../utils/Axios";
import { loadMovie } from "../reducers/movieSlice";
export { removeMovie } from "../reducers/movieSlice";

export const asyncLoadMovie = (id)=>async(dispatch,getState)=>{
    try {
        const details = await axios.get(`/movie/${id}`)   
    const externalIds = await axios.get(`/movie/${id}/external_ids`)   
    const credits = await axios.get(`/movie/${id}/credits`)   
    const recommendations = await axios.get(`/movie/${id}/recommendations`)   
    const similar = await axios.get(`/movie/${id}/similar`)   
    const videos = await axios.get(`/movie/${id}/videos`)   
    const watchProviders = await axios.get(`/movie/${id}/watch/providers`)   
    const translations = await axios.get(`/movie/${id}/translations`) 
    
    let ultimateData = {
        details:details.data,
        externalIds:externalIds.data,
        credits:credits.data.cast,
        recommendations:recommendations.data.results,
        similar:similar.data.results,
        videos:videos.data.results.find(d=>d.type ==="Trailer"),
        watchProviders:watchProviders.data.results.IN,
        translations:translations.data.translations
    }

    // console.log(ultimateData)
    dispatch(loadMovie(ultimateData))
    } catch (error) {
        console.log("error: ",error)
    }
      
}