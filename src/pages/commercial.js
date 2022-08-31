import React from "react";
import HeaderNav from "../components/Header/HeaderNav";
import Footer from "../components/Footer";
import CommercialMainComponent from "../components/CommercialService/CommercialMain/CommercialMain.component";
import LocalForm from "../components/LocalMoveForm";
import HomeStart from "../components/Home/HomeStars/homeStart";
import ApartmentBoxComponent from "../components/apartmentBox/apartmentBox.component";
import BookBoxesComponent from "../components/bookBoxes/bookBoxes.component";
import ServiceCarouselComponent from "../components/ServiceCarousel/ServiceCarousel.component";
import Form from "../components/Form";
import ContactUs from "../components/ContactUs";
import Companies from "../components/Companies";
import CommercialBoxesComponent from "../components/CommercialService/CommercialBoxes/CommercialBoxes.component";
import CommercialFaqComponent from "../components/CommercialService/CommercailFaq/CommercialFaq.component";

const Commercial = () => {
    return (
        <>
            <HeaderNav isLanding={true} />
            <CommercialMainComponent />
            <LocalForm header={'Get a free moving Quote.'} description={'As a fully integrated transport and logistics provider, our goal is to develop customized.'}  />
            <HomeStart />
            <ApartmentBoxComponent header={'Your new apartment'} description={'Enjoy the ease of moving with JFK Moving CO. In just few simple steps book our top helpers and a truck to move all your items into your new place.'} />
            <CommercialBoxesComponent />
            <CommercialFaqComponent />
            <BookBoxesComponent />
            <ServiceCarouselComponent />
            <Form header={'Get a free estimate on your long-distance move.'} description={'Moving to a new city requires extra care. Our dedicated customer service agents are ready to help you build a long-distance moving plan.'} />
            <ContactUs />
            <Companies />
            <Footer />
        </>
    )
}

export default Commercial;