import HeaderNav from "../components/Header/HeaderNav";
import Footer from "../components/Footer";
import ResidentialComponent from "../components/ResidentialService/ResidentialMain/Residential.component";
import LocalForm from "../components/LocalMoveForm";
import Form from "../components/Form";
import HomeStart from "../components/Home/HomeStars/homeStart";
import ApartmentBoxComponent from "../components/apartmentBox/apartmentBox.component";
import ResidentialBoxesComponent from "../components/ResidentialService/ResidentialBoxes/ResidentialBoxes.component";
import ResidentialFaqComponent from "../components/ResidentialService/ResidentialFaq/ResidentiaFaq.component";
import BookBoxesComponent from "../components/bookBoxes/bookBoxes.component";
import ServiceCarouselComponent from "../components/ServiceCarousel/ServiceCarousel.component";
import ContactUs from "../components/ContactUs";
import Companies from "../components/Companies";

const ResidentialService = () => {
    return (
        <>
            <HeaderNav isLanding={true} />
            <ResidentialComponent />
            <LocalForm header={'Get a free moving Quote.'} description={'As a fully integrated transport and logistics provider, our goal is to develop customized.'}  />
            <HomeStart />
            <ApartmentBoxComponent header={'Your new apartment'} description={'Enjoy the ease of moving with JFK Moving CO. In just few simple steps book our top helpers and a truck to move all your items into your new place.'} />
            <ResidentialBoxesComponent />
            <ResidentialFaqComponent />
            <BookBoxesComponent />
            <ServiceCarouselComponent  />
            <Form header={'Get a free estimate on your long-distance move.'} description={'Moving to a new city requires extra care. Our dedicated customer service agents are ready to help you build a long-distance moving plan.'} />
            <ContactUs />
            <Companies />
            <Footer />
        </>
    )
}

export default ResidentialService;