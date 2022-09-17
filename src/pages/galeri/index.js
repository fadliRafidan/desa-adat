import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Header from "../../../components/Home/Header";
import Events from "../../../components/events/Events";
import TeamArea from "../../../components/HomeTwo/TeamArea";
import HomeTwoFooter from "../../../components/HomeTwo/HomeTwoFooter";
import SEO from "../../../components/seo";
import Campus from "../../../components/Home/Campus";
import Footer from "../../../components/common/Footer";

const Galeri = () => {
  return (
    <>
      <SEO pageTitle="Galeri" />
      <Header />
      <BreadCrumb title="Galeri" subtitle="Galeri" />
      <Campus />
      <Footer />
    </>
  );
};

export default Galeri;
