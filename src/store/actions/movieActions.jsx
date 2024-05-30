import Instance from "../../utils/axios";
import { loadMovie } from "../reducers/movieSlice";
import { removeDetail } from "../reducers/movieSlice";

export const asyncLoadMovie = (id) => async (dispatch) => {
  try {
    const detail = await Instance.get(`/movie/${id}`);
    const externalId = await Instance.get(`/movie/${id}/external_ids`);
    const recommendations = await Instance.get(`/movie/${id}/recommendations`);
    const similar = await Instance.get(`/movie/${id}/similar`);
    const videos = await Instance.get(`/movie/${id}/videos`);
    const watchProviders = await Instance.get(`/movie/${id}/watch/providers`);

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
    dispatch(loadMovie(ultimateDetails));
  } catch (error) {
    console.log(error);
  }
};
