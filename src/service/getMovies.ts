import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { collection, db, getDocs } from './base';

export const firebaseApi = createApi({
  reducerPath: 'firebaseApi',
  baseQuery: fakeBaseQuery(), 
  endpoints: (builder) => ({
    getMovies: builder.query({
      queryFn: async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'Film'));
          const movies = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          return { data: movies };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

export const {useGetMoviesQuery} = firebaseApi;
