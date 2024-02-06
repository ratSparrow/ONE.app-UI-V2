import { authKey } from "../../../constants/common/authKey";
import { getFromLocalStorage } from "../../../helpers/utils/saveData";
import { api } from "../api/apiSlice";

const token = getFromLocalStorage(authKey);
const headers = {
  Authorization: `${token}`,
};

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    userSignup: builder.mutation({
      query: (data) => ({
        url: `/api/v1/users/signup`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    userLogin: builder.mutation({
      query: (data) => ({
        url: `/api/v1/auth/login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    getAllUser: builder.query({
      query: () => ({
        url: `/api/v1/users`,
        method: "GET",
        headers: headers,
      }),
      providesTags: ["users"],
    }),
    getSingleUser: builder.query({
      query: (id) => ({
        url: `/api/v1/users/${id}`,
        method: "GET",
        headers: headers,
      }),
      providesTags: ["users"],
    }),
    updateUser: builder.mutation({
      query: (id, data) => ({
        url: `/api/v1/users/${id}`,
        method: "PATCH",
        body: data,
        headers: headers,
      }),
      providesTags: ["users"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/api/v1/users/${id}`,
        method: "DELETE",
        headers: headers,
      }),
      providesTags: ["users"],
    }),
    getUserProfile: builder.query({
      query: () => ({
        url: `/api/v1/users/my-profile`,
        method: "GET",
        headers: headers,
      }),
      providesTags: ["users"],
    }),
    updateUserProfile: builder.mutation({
      query: (data) => ({
        url: `/api/v1/users/update-my-profile`,
        method: "PATCH",
        body: data,
        headers: headers,
      }),
      providesTags: ["users"],
    }),
  }),
});

export const {
  useUserSignupMutation,
  useUserLoginMutation,
  useGetAllUserQuery,
  useGetSingleUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} = userApi;
