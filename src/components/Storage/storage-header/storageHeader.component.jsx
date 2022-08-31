import React from "react";
import "./storageHeader.style.css";

export const StorageHeaderComponent = () => (
    <section className="storage">
       <div className="storage-bg">
         <h1 className="storage-bg__header">Full Service Storage</h1>
         <p className="storage-bg__txt">Make space with our short & long term  storage</p>
       </div>
       <div className="storage-info">
        <h1 className="storage-info__header">Storage Service</h1>
        <p className="storage-info__txt">Moving can take more than just a few days. It's especially common with long distance and sometimes even local moving. In this case, instead of leaving your items on the truck, it’s better to take advantage of professional moving and storage services to ensure the safety of your belongings.</p>
        <p className="storage-info__txt">
            As one of the leading full-service moving and storage companies in Los Angeles, we understand the importance of flexible moving and storage options. JFK Moving is always prepared to provide first-class moving and storage services for our customers anytime they require professionals’ help.
        </p>
        <p className="storage-info__txt">Just call us and one of our trained storage experts will guide you through the process. We'll first help to determine your needs and then set up a time to bring packing supplies and pick-up your items for storage. We can redeliver them to your address whenever you want them. It’s fast, convenient, and tailored to your specific needs.</p>
       </div>
    </section>
)