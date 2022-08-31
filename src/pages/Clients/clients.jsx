import HeaderNav from "../../components/Header/HeaderNav";
import Footer from "../../components/Footer";
import Companies from "../../components/Companies";
import CarouselComponent from "../../components/UI/Carousel/carousel";
import ClientComponent from "../../components/ClientComponent/client.Component";

function Clients() {
    return(
        <>
            <HeaderNav isLanding={false} scroll={false} />
            <ClientComponent />
            <Companies isHeaderExist={true} />
            <CarouselComponent heading={'What Our Customers Say.'} description={'Through research and a thorough pre-screening process, our company ensures that you get the best deal for all of your moving needs.'} />
            <Footer />
        </>
    )
}

export default Clients