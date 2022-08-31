import React from "react";
import HeaderNav from "../components/Header/HeaderNav";
import Footer from "../components/Footer";
import BlogMainComponent from "../components/Blog/blog-main/blog-main.component";

const Blog = () => {
    return (
        <>
            <HeaderNav isLanding={false} />
            <BlogMainComponent />
            <Footer />
        </>
    )
}

export default Blog