
import { authKey } from "../../../constants/common/authKey";
import { getFromLocalStorage } from "../../../helpers/utils/saveData";
import { api } from "../api/apiSlice";


const token = getFromLocalStorage(authKey);
const headers = {
  Authorization: `${token}`,
};

const faqApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addFaq: builder.mutation({
      query: (data) => ({
        url: `/api/v1/faq`,
        method: "POST",
        body: data,
        headers: headers,
      }),
      invalidatesTags: ["faq"],
    }),
    getAllFaq: builder.query({
      query: () => ({
        url: `/api/v1/faq`,
        method: "GET",
      }),
      invalidatesTags: ["faq"],
    }),
  }),
});

export const { useAddFaqMutation, useGetAllFaqQuery } = faqApi;
