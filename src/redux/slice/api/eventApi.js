import { api } from "../api/apiSlice";
import { authKey } from "../../../constants/authKey";
import { getFromLocalStorage } from "../../../helpers/utils/saveData";

const token = getFromLocalStorage(authKey);
const headers = {
  Authorization: `${token}`,
};

const eventsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addEvents: builder.mutation({
      query: (data) => ({
        url: `/api/v1/events`,
        method: "POST",
        body: data,
        headers: headers,
      }),
      invalidatesTags: ["events"],
    }),
    getAllEvents: builder.query({
      query: () => ({
        url: `/api/v1/events`,
        method: "GET",
      }),
      invalidatesTags: ["events"],
    }),
    getSingleEvent: builder.query({
      query: ({ id }) => ({
        url: `/api/v1/events/${id}`,
        method: "GET",
      }),
      invalidatesTags: ["events"],
    }),
    updateEvent: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/events/${id}`,
        method: "PATCH",
        body: data,
        headers: headers,
      }),
      invalidatesTags: ["events"],
    }),
    deleteEvent: builder.mutation({
      query: ({ id }) => ({
        url: `/api/v1/events/${id}`,
        method: "DELETE",
        headers: headers,
      }),
      invalidatesTags: ["events"],
    }),
  }),
});

export const {
  useAddEventsMutation,
  useGetAllEventsQuery,
  useGetSingleEventQuery,
  useUpdateEventMutation,
  useDeleteEventMutation,
} = eventsApi;
