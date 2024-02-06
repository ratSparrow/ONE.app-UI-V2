import { api } from "../api/apiSlice";
import { authKey } from "../../../constants/common/authKey";
import { getFromLocalStorage } from "../../../helpers/utils/saveData";

const token = getFromLocalStorage(authKey);
const headers = {
  Authorization: `${token}`,
};

const feedbackApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addFeedback: builder.mutation({
      query: (data) => ({
        url: `/api/v1/feedback`,
        method: "POST",
        body: data,
        headers: headers,
      }),
      invalidatesTags: ["feedback"],
    }),
    getAllFeedback: builder.query({
      query: () => ({
        url: `/api/v1/feedback`,
        method: "GET",
      }),
      invalidatesTags: ["feedback"],
    }),
  }),
});

export const { useAddFeedbackMutation, useGetAllFeedbackQuery } = feedbackApi;
