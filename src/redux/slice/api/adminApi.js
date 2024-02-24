
import { authKey } from "../../../constants/common/authKey";
import { getFromLocalStorage } from "../../../helpers/utils/saveData";
import { api } from "../api/apiSlice";


const token = getFromLocalStorage(authKey);
const headers = {
  Authorization: `${token}`,
};

const adminApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addAdmin: builder.mutation({
      query: (data) => ({
        url: `/api/v1/admins/create-admin`,
        method: "POST",
        body: data,
        headers: headers,
      }),
      providesTags: ["admin"],
    }),

    getAllAdmin: builder.query({
      query: () => ({
        url: `/api/v1/admins`,
        method: "GET",
        headers: headers,
      }),
      providesTags: ["admin"],
    }),
  }),
});

export const { useAddAdminMutation, useGetAllAdminQuery } = adminApi;
