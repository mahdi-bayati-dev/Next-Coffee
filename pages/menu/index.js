import PageHeader from "@/components/modules/PageHeader/pageHeader";
import Pricing from "@/components/templates/Menu/Pricing";
import React from "react";

function Menu({ product }) {
  return (
    <>
      <PageHeader route={"Menu"} />
      <Pricing product={product} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/product");
  const data = await res.json();
  return {
    props: {
      product: data,
    },
    revalidate: (60 * 60) / 12,
  };
}

export default Menu;
