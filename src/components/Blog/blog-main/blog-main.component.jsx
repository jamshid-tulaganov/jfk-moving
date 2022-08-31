import React from "react";
import {useNavigate} from "react-router-dom";
import "./blog.style.css";
import blogImage from "../../../assets/images/blog.png";
import Search from "../../../assets/icons/search";
import {Row, Col} from "react-bootstrap";
import PdfImage from "../../../assets/images/pdf.png";


function BlogMainComponent() {

    const navigate = useNavigate();

    const blogData = [
        {
            id: 1,
            imgUrl: PdfImage,
            header:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            id: 2,
            imgUrl:PdfImage,
            header:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            id: 3,
            imgUrl: PdfImage,
            header: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        }
    ];

    const viewBlog = (id) => {
        navigate(`/blog/${id}`)
    }


    return (
        <main className='blog'>
            <div className="container">
                <div className="blog-header">
                    <h1 className="blog__heading headTxt guide-header">Lorem Ipsum</h1>
                    <img src={blogImage} alt="blog main pictures"/>
                </div>
                <section className="blog-search">
                    <div className="search-heading">
                        <h2 className='blog-search__header headTxt'>Enjoy our blog</h2>
                        <div className="search-input">
                           <Search />
                            <input type="search" placeholder='Search'/>
                            <button type='button'>
                                Go
                            </button>
                        </div>
                    </div>
                </section>
                <section className="blogs">
                    <Row className='license-row'>
                        {
                            blogData.map(el => (
                                <Col lg={4} md={4} xl={4} itemID={el.id} key={el.id}>
                                    <div className="license-content">
                                        <div className="license-content__img">
                                            <img src={el.imgUrl} alt="pdf file images"/>
                                        </div>
                                        <p className='claims-item--dec'>{el.header}</p>
                                        <button
                                            onClick={() => viewBlog(el.id)}
                                            className="license-content__btn MovingBox__btn"
                                            type='button'>
                                            Read more
                                        </button>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </section>

            </div>
        </main>
    )
}

export default BlogMainComponent