import { useSelector } from "react-redux";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import CourseArea from "../../../components/Courses/CourseArea";
import Header from "../../../components/Home/Header";
import SEO from "../../../components/seo";

const Berita = () => {
  // all courses
  const courseData = useSelector((state) => state.courses.allCourses);
  // loader status
  const status = useSelector((state) => state.courses.status);
  // loading
  if (status === "pending") {
    return (
      <div id="loading">
        <div id="loading-center">
          <div id="loading-center-absolute">
            <svg id="loader">
              <path
                id="corners"
                d="m 0 12.5 l 0 -12.5 l 50 0 l 0 50 l -50 0 l 0 -37.5"
              />
            </svg>
            <img src="assets/img/favicon.png" alt="" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <SEO pageTitle="Berita" />
      <Header />
      <BreadCrumb title="Berita" subtitle="Berita" />
      <CourseArea courseData={courseData} />
      <Footer white_bg="white-bg" />
    </>
  );
};

export default Berita;
