import { AxiosResponse } from "axios";
import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

type Actions = () => void;
type Dispatch = (arg0: {
  type: string;
  payload: AxiosResponse<any, any>;
}) => void;

export const fetchPostsAndUsers =
  () => async (dispatch: Dispatch | any, getState: any) => {
    await dispatch(fetchPosts());
    const userIds:number[] = _.uniq(_.map(getState().posts, "userId"));
    userIds.forEach(id=> dispatch(fetchUser(id)));

  //Alternative refactore with lodash chain
    // _.chain(getState().posts)
    //   .map("userId")
    //   .uniq()
    //   .forEach(id=> dispatch(fetchUser(id)))
    //   .value();
  };

export const fetchPosts: Actions = () => async (dispatch: Dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id: number) => async (dispatch: Dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};
