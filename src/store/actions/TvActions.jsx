import axios from "../../utils/Axios";
import { loadTv } from "../reducers/tvSlice";
export {removeTv} from "../reducers/tvSlice";

export const asyncLoadTv = ({id})=>async(dispatch,getState)=>{
    try {
        const details = await axios.get(`tv/${id}`)
        const recommendations = await axios.get(`tv/${id}/recommendations`)
        const similar = await axios.get(`tv/${id}/similar`)
        const translations = await axios.get(`tv/${id}/translations`)
        const videos = await axios.get(`tv/${id}/videos`)
        const externalIds = await axios.get(`tv/${id}/external_ids`)
        const watchProviders = await axios.get(`tv/${id}/watch/providers`)
        const credits = await axios.get(`/tv/${id}/credits`) 

        const ultmiateData = {
            details:details.data,
            recommendations:recommendations.data.results,
            similar:similar.data.results,
            translations:translations.data.translations,
            videos:videos.data.results.find(d => d.type === 'Trailer'),
            externalIds:externalIds.data,
            watchProviders:watchProviders.data.results.IN,
            credits:credits.data.cast,
        }
        dispatch(loadTv(ultmiateData))
        // console.log(ultmiateData)
    } catch (error) {
        console.log("error :",error);
    }
}