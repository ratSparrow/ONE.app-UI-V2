import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../../helpers/config/envConfig";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseUrl(),
  }),
  tagTypes: [
    "subCategoryService",
    "sub-services",
    "users",
    "services",
    "order",
    "review",
    "admin",
    "blog",
    "events",
    "upcoming-service",
    "blog",
    "feedback",
  ],
  endpoints: () => ({}),
});
