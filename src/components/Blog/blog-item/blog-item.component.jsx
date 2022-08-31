import React from "react";
import "./blog-item.style.css";
import {useNavigate} from "react-router";

import blogImage from "../../../assets/images/blog-image.png";
import Facebook from "../../../assets/icons/facebook";
import Twitter from "../../../assets/icons/twitter";
import Instagram from "../../../assets/icons/instagram";
import Pinterest from "../../../assets/icons/pinterest";
import Linkedin from "../../../assets/icons/linkedin";
import HeaderNav from "../../Header/HeaderNav";
import Footer from "../../Footer";

function BlogItemComponent({id}) {

    const hrefLink = window.location.href;

    const blogItemData = [
        {
            id: 1,
            contentHeader : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            contentImgUrl: blogImage
        },
        {
            id: 2,
            contentHeader :"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            contentText:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n" +
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    ]

    return (
        <>
          <HeaderNav isLanding={false} />
            <article>
                <div className="container">
                    <div className="blog-item-header">
                        <h1 className='headTxt guide-header'>Lorem Ipsum here</h1>
                    </div>
                    {
                        blogItemData.map(el => (
                            <>
                                <section className='blog-item__content' key={el.id}>
                                    <h3 className='guide-content__header'>{el.contentHeader}</h3>
                                    {el.contentImgUrl !== "" ? <img src={el.contentImgUrl} alt="blog pictures"/> : null }
                                    <p className='policy-list__txt'>{el.contentText}</p>
                                </section>
                            </>
                        ))
                    }

                    <section className='shared-links'>
                        <h3 className='guide-content__header'>Share with your friends:</h3>
                        <div className='d-flex align-items-center justify-content-end'>
                            <a href={`https://www.facebook.com/sharer.php?${hrefLink}`} target='_blank'>
                            <Facebook />
                            </a>
                            <a href={`https://twitter.com/intent/tweet?url=${hrefLink}`} target='_blank'>
                                <Twitter />
                            </a>
                            <a href={`https://www.facebook.com/sharer.php?${hrefLink}`} target='_blank'>
                            <Instagram />
                            </a>
                            <a href={`http://pinterest.com/pin/create/link/?url=${hrefLink}`} target='_blank'>
                                <Pinterest />
                            </a>
                            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${hrefLink}`} target='_blank'>
                                <Linkedin />
                            </a>

                        </div>

                    </section>

                </div>
            </article>
          <Footer />
        </>
    )
}

export default BlogItemComponent;