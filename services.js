import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const producteApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kapusta-beckend-b7j4.onrender.com/api',
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.token;
    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  tagTypes: ['Products'],
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => '/products',
      providesTags: ['Products'],
    }),
  }),
});

export const { useGetProductsQuery } = producteApi;
