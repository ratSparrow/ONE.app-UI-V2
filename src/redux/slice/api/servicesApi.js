import { getFromLocalStorage } from "@/helpers/utils/saveData";
import { api } from "../api/apiSlice";
import { authKey } from "@/constants/authKey";

const token = getFromLocalStorage(authKey);
const headers = {
  Authorization: `${token}`,
};

const servicesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addServices: builder.mutation({
      query: (data) => ({
        url: `/api/v1/services`,
        method: "POST",
        body: data,
        headers: headers,
      }),
      invalidatesTags: ["services"],
    }),
    getAllServices: builder.query({
      query: () => ({
        url: `/api/v1/services`,
        method: "GET",
      }),
      invalidatesTags: ["services"],
    }),
    getSingleServices: builder.query({
      query: ({ id }) => ({
        url: `/api/v1/services/${id}`,
        method: "GET",
      }),
      invalidatesTags: ["services"],
    }),
    updateServices: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/services/${id}`,
        method: "PATCH",
        body: data,
        headers: headers,
      }),
      invalidatesTags: ["services"],
    }),
    deleteServices: builder.mutation({
      query: ({ id }) => ({
        url: `/api/v1/services/${id}`,
        method: "DELETE",
        headers: headers,
      }),
      invalidatesTags: ["services"],
    }),
  }),
});

export const {
  useAddServicesMutation,
  useGetAllServicesQuery,
  useGetSingleServicesQuery,
  useUpdateServicesMutation,
  useDeleteServicesMutation,
} = servicesApi;
