import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `/api/login`,
        method: "POST",
        body: loginData,
      }),
    }),
    userSignUp: build.mutation({
      query: (signupData) => ({
        url: `/api/register`,
        method: "POST",
        body: signupData,
      }),
    }),
  }),
});

export const { useUserLoginMutation, useUserSignUpMutation } = authApi;
