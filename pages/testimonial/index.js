import PageHeader from "@/components/modules/PageHeader/pageHeader";
import Comments from "@/components/templates/Testimonial/Comments";
import React from "react";

function Testimonial({ comments }) {
  return (
    <>
      <PageHeader route={"Testimonial"} />
      <Comments comments={comments} />
    </>
  );
}

export async function getStaticProps() {
  const commentsRequest = await fetch("http://localhost:4000/comments");
  const comments = await commentsRequest.json();

  return {
    props: {
      comments, // ✅ Flattened props
    },
    revalidate: 60 * 60 * 12,
  };
}

export default Testimonial;
