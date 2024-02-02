import { getFromLocalStorage } from "@/helpers/utils/saveData";
import { api } from "../api/apiSlice";
import { authKey } from "@/constants/authKey";

const token = getFromLocalStorage(authKey);
const headers = {
  Authorization: `${token}`,
};

const blogApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addBlog: builder.mutation({
      query: (data) => ({
        url: `/api/v1/blog`,
        method: "POST",
        body: data,
        headers: headers,
      }),
      invalidatesTags: ["blog"],
    }),
    getAllBlog: builder.query({
      query: () => ({
        url: `/api/v1/blog`,
        method: "GET",
      }),
      invalidatesTags: ["blog"],
    }),
  }),
});

export const { useAddBlogMutation, useGetAllBlogQuery } = blogApi;
