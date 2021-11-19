import { AxiosResponse } from "axios";
import jsonPlaceholder from "../apis/jsonPlaceholder";

type Actions = () => void;

export const fetchPosts: Actions =
  () =>
  async (
    dispatch: (arg0: { type: string; payload: AxiosResponse<any, any> }) => void
  ) => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
