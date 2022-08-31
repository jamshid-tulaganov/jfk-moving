import HeaderNav from "../components/Header/HeaderNav";
import Footer from "../components/Footer";
import TermsConditionsComponent from "../components/policy-term/terms-conditions/terms-conditions.component";

const Terms = () => {
    return (
        <>
            <HeaderNav isLanding={false} />
            <TermsConditionsComponent />
            <Footer />
        </>
    )
}

export default Terms