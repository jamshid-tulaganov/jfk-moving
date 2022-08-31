import HeaderNav from "../components/Header/HeaderNav";
import Footer from "../components/Footer";
import PolicyComponent from "../components/policy-term/policyComponent/policy.component";

const Policy = () => {
   return (
       <>
           <HeaderNav isLanding={false} />
           <PolicyComponent />
           <Footer />
       </>
   )
}

export default Policy