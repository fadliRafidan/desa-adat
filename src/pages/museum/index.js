import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import ContactArea from "../../../components/Contact/ContactArea";
import ContactFooter from "../../../components/Contact/ContactFooter";
import ContactInfoArea from "../../../components/Contact/ContactInfoArea";
import Header from "../../../components/Home/Header";
import SEO from "../../../components/seo";

const Museum = () => {
  return (
    <>
      <SEO pageTitle="Museum" />
      <Header />
      <BreadCrumb title="Museum" subtitle="Museum" />
      <ContactArea />
      <ContactInfoArea />
      <Footer />
    </>
  );
};

export default Museum;
