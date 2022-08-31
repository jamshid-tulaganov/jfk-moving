import HeaderNav from "../components/Header/HeaderNav";
import Form from "../components/Form";
import GuideListComponent from "../components/guide/guide-list/guide-list.component";
import Footer from "../components/Footer";

function GuideList() {
    return (
        <>
          <HeaderNav isLanding={false} />
          <GuideListComponent />
          <Form header={'Book online with Us today.'} description={'As a fully integrated transport and logistics provider, our goal is to develop customized.'} isMargin={false} />
          <Footer />
        </>
    )
}

export default GuideList