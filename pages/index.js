import React from "react";
import Slider from "@/components/templates/Index/Slider";
import About from "@/components/templates/Index/About";
import Services from "@/components/templates/Index/Services";
import Offer from "@/components/templates/Index/Offer";
import Menu from "@/components/templates/Index/Menu";
import Reservation from "@/components/templates/Index/reservation";
import Testimonials from "@/components/templates/Index/Testimonial";
import Footer from "@/components/modules/Footer/footer";


function Index({ data }) {
  return (
    <>
      <Slider />
      <About />
      <Services services={data.services} />
      <Offer />
      <Menu data={data.product} />
      <Reservation />
      <Testimonials data={data.comments}/>
      
    </>
  );
}

export async function getStaticProps() {
  const servicesRequest = await fetch("http://localhost:4000/services");
  const services = await servicesRequest.json();

  const productRequest = await fetch("http://localhost:4000/product");
  const product = await productRequest.json();

  const commentsRequest = await fetch("http://localhost:4000/comments");
  const comments = await commentsRequest.json();

  return {
    props: {
      data: {
        services,
        product,
        comments
      },
    },
    revalidate: 60 * 60 * 12,
  };
}

export default Index;
