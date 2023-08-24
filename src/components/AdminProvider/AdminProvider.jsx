'use client';
import restProvider from 'ra-data-simple-rest';
import ProductList from '../ProductList/ProductList';
import { Admin, Resource } from 'react-admin';

// const dataProvider = restProvider(
//   'https://kapusta-beckend-b7j4.onrender.com/api'
// );

const AdminProvider = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="products"
      list={ProductList}
      //   edit={EditGuesser}
      //   recordRepresentation="name"
    />
    <Resource
      name="orders"
      list={ProductList}
      //   edit={EditGuesser}
      //   recordRepresentation="title"
    />
  </Admin>
);

export default AdminProvider;
