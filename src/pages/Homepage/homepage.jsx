import React from "react";
import HeaderNav from "../../components/Header/HeaderNav";
import Form from "../../components/Form";
import HomeMain from "../../components/Home/HomeMain/homeMain";
import ContactUs from "../../components/ContactUs";
import Companies from "../../components/Companies";
import Footer from "../../components/Footer";
import LocalMoveForm from "../../components/LocalMoveForm";
import MovingBoxes from "../../components/movingBoxes/movingBoxes";
import MovingService from "../../components/Moving/MovingService/movingService";
import CarouselComponent from "../../components/UI/Carousel/carousel";
import MovingAbout from "../../components/Moving/MovingAbout/movingAbout";
import HomeStart from "../../components/Home/HomeStars/homeStart";

function Homepage() {

    return(
        <>
            <HeaderNav isLanding={true} />
            <HomeMain />
            <LocalMoveForm header={'Book online with Us today.'} description={'As a fully integrated transport and logistics provider, our goal is to develop customized.'} />
            <MovingBoxes />
            <MovingService />
            <CarouselComponent heading={'We do excellent work and our Customers Love Us.'} description={'Through research and a thorough pre-screening process, our company ensures that you get the best deal for all of your moving needs.'} />
            <MovingAbout />
            <Form header={'Book online with Us today.'} description={'As a fully integrated transport and logistics provider, our goal is to develop customized.'} />
            <HomeStart />
            <ContactUs />
            <Companies />
            <Footer />
        </>
    )
}

export default Homepage