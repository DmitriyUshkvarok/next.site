'use client';
import ButtonBack from '@/src/components/ButtonBack/ButtonBack';
import { useGetProductsQuery } from '@/services';
const Blog = () => {
  const { data } = useGetProductsQuery();
  return (
    <>
      <div>Blog</div>
      <ButtonBack />
      {data?.map((item) => (
        <div key={item._id}>
          <h4>Orders:</h4>
          <ul>
            {item.orders?.map((order) => (
              <li key={order.id}>
                Title: {order.title}, Price: {order.price}
              </li>
            ))}
          </ul>
          <h4>Products:</h4>
          <ul>
            {item.products?.map((product) => (
              <li key={product.id}>
                Title: {product.title}, Price: {product.price}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Blog;
