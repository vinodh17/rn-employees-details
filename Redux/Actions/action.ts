import { Dispatch } from "redux";
import http from "../../Utils/http";

export const getPosts = (page = 1) => (dispatch: Dispatch) => {
  return http
    .get(`search_by_date?tags=story&page=${page}`)
    .then((resp) => {
      const res = resp.data.hits.map((item: any) => {
        return (item["key"] = (Math.random() * 10000).toString());
      });
      dispatch({ type: "GET_EMPLOYEES", payload: resp.data.hits });
    })
    .catch((error) => {
      alert(error);
    });
};
