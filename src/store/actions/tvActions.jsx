import Instance from "../../utils/axios";
import { loadtv } from "../reducers/tvSlice";

export const asyncLoadTv = (id) => async (dispatch) => {
  try {
    const detail = await Instance.get(`/tv/${id}`);
    const externalId = await Instance.get(`/tv/${id}/external_ids`);
    const recommendations = await Instance.get(`/tv/${id}/recommendations`);
    const similar = await Instance.get(`/tv/${id}/similar`);
    const videos = await Instance.get(`/tv/${id}/videos`);
    const watchProviders = await Instance.get(`/tv/${id}/watch/providers`);

    const ultimateDetails = {
      detail: detail.data,
      externalId: externalId.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      watchProviders:
        watchProviders.data.results.US ||
        watchProviders.data.results.NL ||
        watchProviders.data.results.IN,
    };
    dispatch(loadtv(ultimateDetails));
  } catch (error) {
    console.log(error);
  }
};
