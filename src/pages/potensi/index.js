import React from "react";
import BlogArea from "../../../components/Blog/BlogArea";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import SEO from "../../../components/seo";

const Potensi = () => {
  return (
    <>
      <SEO pageTitle="Potensi" />
      <Header />
      <BreadCrumb title="Our Potensi" subtitle="Potensi" />
      <BlogArea />
      <Footer />
    </>
  );
};

export default Potensi;
