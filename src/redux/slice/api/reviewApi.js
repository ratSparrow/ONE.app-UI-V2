import { getFromLocalStorage } from "@/helpers/utils/saveData";
import { api } from "../api/apiSlice";
import { authKey } from "@/constants/authKey";

const token = getFromLocalStorage(authKey);
const headers = {
  Authorization: `${token}`,
};

const reviewApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addReview: builder.mutation({
      query: (data) => ({
        url: `/api/v1/review`,
        method: "POST",
        body: data,
        headers: headers,
      }),
      invalidatesTags: ["review"],
    }),

    getReview: builder.query({
      query: ({ id }) => ({
        url: `/api/v1/services/${id}`,
        method: "GET",
        headers: headers,
      }),
      invalidatesTags: ["review"],
    }),
  }),
});

export const { useAddReviewMutation, useGetReviewQuery } = reviewApi;
