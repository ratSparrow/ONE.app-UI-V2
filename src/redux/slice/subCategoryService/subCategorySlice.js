import { api } from "../api/apiSlice";

const subCategoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllSubCategoryService: builder.query({
      query: () => `/api/v1/sub-services`,
      providesTags: ["subCategoryService"],
    }),
    getSingleSubCategoryService: builder.query({
      query: (id) => `/api/v1/sub-services/${id}`,
      providesTags: ["subCategoryService"],
    }),
  }),
});
export const {
  useGetAllSubCategoryServiceQuery,
  useGetSingleSubCategoryServiceQuery,
} = subCategoryApi;
