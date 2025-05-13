import PageHeader from "@/components/modules/PageHeader/pageHeader";
import Result from "@/components/templates/search/result";
import React from "react";

function Search({ searchResult }) {
  return (
    <>
      <PageHeader route={"Search"} />
      <Result searchResult={searchResult} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const res = await fetch("http://localhost:4000/product");
  const data = await res.json();

const searchResult = data.filter((item) =>
  item.name.toLowerCase().includes(query.q.toLowerCase()) ||
  item.type.toLowerCase().includes(query.q.toLowerCase())
);


  console.log(searchResult);

  return {
    props: {
      searchResult,
    },
  };
}

export default Search;
