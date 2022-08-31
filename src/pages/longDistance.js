import React from "react";
import HeaderNav from "../components/Header/HeaderNav";
import Footer from "../components/Footer";
import HeaderMain from "../components/Header/HeaderMain";
import LocalForm from "../components/LocalMoveForm";
import HomeStart from "../components/Home/HomeStars/homeStart";
import LongDistanceBoxComponent from "../components/LongDistanceService/LongDistanceBoxes.component";
import ServiceCarouselComponent from "../components/ServiceCarousel/ServiceCarousel.component";
import BookBoxesComponent from "../components/bookBoxes/bookBoxes.component";
import Form from "../components/Form";
import ContactUs from "../components/ContactUs";
import Companies from "../components/Companies";
import CommercialStatusComponent from "../components/CommercialService/CommercialStatus/CommercialStatus.component";
import LongDistanceFaqComponent from "../components/LongDistanceService/LongDistanceFaq/LongDistanceFaq.component";


const LongDistance = () => {
  return (
    <>
      <HeaderNav isLanding={true} />
      <HeaderMain headingBottom={'Movers Near You.'} headingTop='Long Distance' description='Find long distance moving companies in your area. Request a moving quote from United.' /> 
      <LocalForm header={'Get a free moving Quote.'} description={'As a fully integrated transport and logistics provider, our goal is to develop customized.'}  />
      <HomeStart />
      <LongDistanceBoxComponent />
      <ServiceCarouselComponent />
      <BookBoxesComponent />
      <CommercialStatusComponent />
      <LongDistanceFaqComponent />
      <Form isMargin={false}  header={'Get a free estimate on your long-distance move.'} description={'Moving to a new city requires extra care. Our dedicated customer service agents are ready to help you build a long-distance moving plan.'} />
      <ContactUs />
      <Companies />
      <Footer />
      
    </>
  )
} 

export default LongDistance