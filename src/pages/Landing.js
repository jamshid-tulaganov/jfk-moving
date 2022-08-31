import HeaderMain from "../components/Header/HeaderMain";
import HeaderNav from "../components/Header/HeaderNav";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Companies from "../components/Companies";
import ContactUs from "../components/ContactUs";
import Main from "../components/Main";
import LocalMoveForm from "../components/LocalMoveForm";
import HomeStart from "../components/Home/HomeStars/homeStart";
import BookBoxesComponent from "../components/bookBoxes/bookBoxes.component";
import ServiceCarouselComponent from "../components/ServiceCarousel/ServiceCarousel.component";
import HomeServiceComponent from "../components/Home/HomeService/HomeService.component";
import HomeFaqComponent from "../components/Home/HomeFaq/HomeFaq.component";

function Landing() {
  return (
    <>
      <HeaderNav isLanding={true} />
      <HeaderMain
        headingTop={"Find Local Movers"}
        headingBottom={"With JFK Moving CO"}
        description={
          "Have some of the finest local movers in California help you experience a seamless full service relocation."
        }
      />
      <LocalMoveForm
        header={"Get a free estimate on your local move."}
        description={
          "Moving to a new place requires extra care. Our dedicated customer service agents are ready to help you build a local moving plan."
        }
      />
      <HomeStart />
      <Main />
      <ServiceCarouselComponent />
      <BookBoxesComponent />
      <HomeServiceComponent />
      <HomeFaqComponent />
      <Form
        header={"Get a free estimate on your long-distance move."}
        description={
          "Moving to a new city requires extra care. Our dedicated customer service agents are ready to help you build a long-distance moving plan."
        }
      />
      <ContactUs />
      <Companies />
      <Footer />
    </>
  );
}

export default Landing;
