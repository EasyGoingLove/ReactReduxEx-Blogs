import { AxiosResponse } from "axios";
import jsonPlaceholder from "../apis/jsonPlaceholder";

type Actions = () => void;
type Dispatch = (arg0: {
  type: string;
  payload: AxiosResponse<any, any>;
}) => void;

export const fetchPosts: Actions = () => async (dispatch: Dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id: number) => async (dispatch: Dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};
