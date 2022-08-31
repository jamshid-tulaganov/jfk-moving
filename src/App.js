import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
//
import Landing from "./pages/Landing";
import Location from "./pages/Location";
import Form from "./pages/Form";
import SelectDate from "./pages/SelectDate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Choose from "./pages/Choose";
import SelectTime from "./pages/SelectTime";
import Calculate from "./pages/Calculate";
import Confirm from "./pages/Confirm";
import Congrats from "./pages/Congrats";
import Cities from "./pages/Cities";
import Employment from "./pages/Employment";
import EmploymentForm from "./pages/EmploymentForm";
import EmploymentFile from "./pages/EmploymentFile";
import Payment from "./pages/Payment";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage/homepage";
import EmploymentDocs from "./pages/Employment/employmentDocs";
import TeamDirectory from "./pages/TeamDirectory/teamDirectory";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import ScrollToTop from "./helper/scroll";
import WhyUs from "./pages/Why_Us/whyUs";
import Clients from "./pages/Clients/clients";
import GuidePage from "./pages/guide";
import GuideTips from "./pages/guide-tips";
import GuideList from "./pages/guide-list";
import Policy from "./pages/policy";
import Terms from "./pages/terms";
import Faq from "./pages/faq";
import LicenseInsurance from "./pages/license-insurance";
import ClaimsComplaints from "./pages/claims-complaints";
import ClaimForm from "./pages/claim-form";
import Blog from "./pages/Blog";
import BlogItemComponent from "./components/Blog/blog-item/blog-item.component";
import ResidentialService from "./pages/ResidentialService";
import Commercial from "./pages/commercial";
import LongDistance from "./pages/longDistance";
import { Storage } from "./pages/storage";
import { PackingAndUnpacking } from "./pages/packingAndUnpacking";
import { Piano } from "./pages/piano";
import { PoolTable } from "./pages/PoolTable";
import { PackingShop } from "./pages/packingShop";

function App() {
  return (
    <ScrollToTop>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path={"/"} exact element={<Homepage />} />
            {/*service router*/}
            <Route path="/residential" element={<ResidentialService />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/long" element={<LongDistance />} />
            <Route path="/moving" exact element={<Landing />} />
            <Route path="/choose" element={<Choose />} />
            <Route path="/location" element={<Location />} />
            <Route path="/form" element={<Form />} />
            <Route path="/date" element={<SelectDate />} />
            <Route path="/time" element={<SelectTime />} />
            <Route path="/calculate" element={<Calculate />} />
            <Route path="/confirm" element={<Confirm />} />
            <Route path="/congrats" element={<Congrats />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/careers" element={<Employment />} />
            <Route path="/employmentform" element={<EmploymentForm />} />
            <Route path="/employmentfile" element={<EmploymentFile />} />
            <Route path="/employmentdoc" element={<EmploymentDocs />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<TeamDirectory />} />
            <Route path="/why" element={<WhyUs />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/guide" element={<GuidePage />} />
            <Route path="/guide/tips" element={<GuideTips />} />
            <Route path="/guide/list" element={<GuideList />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/license" element={<LicenseInsurance />} />
            <Route path="/claim" element={<ClaimsComplaints />} />
            <Route path="/claim/form" element={<ClaimForm />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogItemComponent />} />
            <Route path="/storage" element={<Storage />} />
            <Route path="/packing" element={<PackingAndUnpacking />} />
            <Route path="/piano" element={<Piano />} />
            <Route path="/pool" element={<PoolTable />} />
            <Route path="/shop" element={<PackingShop />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ScrollToTop>
  );
}

const options = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};

const Root = () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
);

export default Root;
