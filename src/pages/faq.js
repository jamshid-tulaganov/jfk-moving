import HeaderNav from "../components/Header/HeaderNav";
import Footer from "../components/Footer";
import FaqMainComponent from "../components/faq/faq-main/faq-main.component";

const Faq = () => {
  return (
      <>
          <HeaderNav isLanding={false} />
           <FaqMainComponent />
          <Footer />
      </>
  )
}

export default Faq