import { api } from "../api/apiSlice";
import { authKey } from "../../../constants/common/authKey";
import { getFromLocalStorage } from "../../../helpers/utils/saveData";

const token = getFromLocalStorage(authKey);
const headers = {
  Authorization: `${token}`,
};

const upcomingServiceApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addUpcomingService: builder.mutation({
      query: (data) => ({
        url: `/api/v1/upcoming-service`,
        method: "POST",
        body: data,
        headers: headers,
      }),
      invalidatesTags: ["upcoming-service"],
    }),
    getAllUpcomingService: builder.query({
      query: () => ({
        url: `/api/v1/upcoming-service`,
        method: "GET",
      }),
      invalidatesTags: ["upcoming-service"],
    }),
    getSingleUpcomingService: builder.query({
      query: ({ id }) => ({
        url: `/api/v1/upcoming-service/${id}`,
        method: "GET",
      }),
      invalidatesTags: ["upcoming-service"],
    }),
    updateUpcomingService: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/upcoming-service/${id}`,
        method: "PATCH",
        body: data,
        headers: headers,
      }),
      invalidatesTags: ["upcoming-service"],
    }),
    deleteUpcomingService: builder.mutation({
      query: ({ id }) => ({
        url: `/api/v1/upcoming-service/${id}`,
        method: "DELETE",
        headers: headers,
      }),
      invalidatesTags: ["upcoming-service"],
    }),
  }),
});

export const {
  useAddUpcomingServiceMutation,
  useGetAllUpcomingServiceQuery,
  useGetSingleUpcomingServiceQuery,
  useUpdateUpcomingServiceMutation,
  useDeleteUpcomingServiceMutation,
} = upcomingServiceApi;
