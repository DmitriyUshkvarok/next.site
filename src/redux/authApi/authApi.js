import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logOut } from './authSlice';
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://task-pro-app.onrender.com/api/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['auth'],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: 'users/register',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['auth'],
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: 'users/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['auth'],
    }),
    logout: builder.mutation({
      query: () => ({
        url: 'users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['auth'],
    }),
    refreshCurrentUser: builder.query({
      query: () => 'users/current',
      providesTags: ['auth'],
      onQueryStarted: (_, { dispatch, getState, queryFulfilled }) => {
        const token = getState().auth.token;
        if (!token) {
          dispatch(logOut());
          queryFulfilled(undefined);
        }
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useRefreshCurrentUserQuery,
} = authApi;
