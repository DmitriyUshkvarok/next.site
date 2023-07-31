'use client';
import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin';

const ProductList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="price" />
      {/* <TextField source="image" /> */}
      {/* <DateField source="publishedAt" /> */}
      <EditButton basePath="/products" />
      <DeleteButton basePath="/products" />
    </Datagrid>
  </List>
);

export default ProductList;
