import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import Layanan from "../../../components/layanan/layanan";
import SEO from "../../../components/seo";

const LayananPage = () => {
  return (
    <>
      <SEO pageTitle="Layanan" />
      <Header />
      <BreadCrumb title="Layanan" subtitle="Layanan" />
      <Layanan />
      {/* <TeamArea /> */}
      {/* <Testimonials /> */}
      {/* <BrandArea /> */}
      <Footer />
    </>
  );
};

export default LayananPage;
