import "@/styles/Product.module.css";

import Comments from "@/components/templates/Product/Comments";
import ProductsDetails from "@/components/templates/Product/ProductDetails";

const Product = ({ product, productComments }) => {
  return (
    <>
      <ProductsDetails data={product} />
      <Comments comments={productComments} />
    </>
  );
};

export async function getStaticPaths(context) {
  const res = await fetch(`http://localhost:4000/product`);
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: String(product.id) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const resProduct = await fetch(`http://localhost:4000/product/${params.id}`);
  const product = await resProduct.json();

  const resComments = await fetch("http://localhost:4000/comments");
  const dataComments = await resComments.json();

const productComments = dataComments.filter((item) => {
  return item.productId === +product.id;
});



 return {
  props: {
    product,
    productComments, // به جای comments
  },
  revalidate: 60*60/12
};

}

export default Product;
