import { authKey } from "../../../constants/authKey";
import { getFromLocalStorage } from "../../../helpers/utils/saveData";
import { api } from "../api/apiSlice";

const token = getFromLocalStorage(authKey);
const headers = {
  Authorization: `${token}`,
};

const subServiceApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addSubServices: builder.mutation({
      query: (data) => ({
        url: `/api/v1/sub-services`,
        method: "POST",
        body: data,
        headers: headers,
      }),
      invalidatesTags: ["sub-services"],
    }),
    getAllSubServices: builder.query({
      query: () => ({
        url: `/api/v1/sub-services`,
        method: "GET",
      }),
      invalidatesTags: ["sub-services"],
    }),
    getSingleSubService: builder.query({
      query: ({ id }) => ({
        url: `/api/v1/sub-services/${id}`,
        method: "GET",
      }),
      invalidatesTags: ["sub-services"],
    }),
    updateSubService: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/sub-services/${id}`,
        method: "PATCH",
        body: data,
        headers: headers,
      }),
      invalidatesTags: ["sub-services"],
    }),
    deleteSubService: builder.mutation({
      query: ({ id }) => ({
        url: `/api/v1/sub-services/${id}`,
        method: "DELETE",
        headers: headers,
      }),
      invalidatesTags: ["sub-services"],
    }),
  }),
});

export const {
  useAddSubServicesMutation,
  useGetAllSubServicesQuery,
  useGetSingleSubServiceQuery,
  useDeleteSubServiceMutation,
  useUpdateSubServiceMutation,
} = subServiceApi;
