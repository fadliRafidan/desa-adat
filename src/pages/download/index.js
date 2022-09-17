import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Header from "../../../components/Home/Header";
import Events from "../../../components/events/Events";
import TeamArea from "../../../components/HomeTwo/TeamArea";
import HomeTwoFooter from "../../../components/HomeTwo/HomeTwoFooter";
import SEO from "../../../components/seo";
import Footer from "../../../components/common/Footer";

const Download = () => {
  return (
    <>
      <SEO pageTitle="Download" />
      <Header />
      <BreadCrumb title="Download" subtitle="Download" />
      <Events />
      {/* <TeamArea /> */}
      <Footer />
    </>
  );
};

export default Download;
