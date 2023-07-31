'use client';
import restProvider from 'ra-data-simple-rest';
import ProductList from '../ProductList/ProductList';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';

const dataProvider = restProvider('http://localhost:5000');

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
