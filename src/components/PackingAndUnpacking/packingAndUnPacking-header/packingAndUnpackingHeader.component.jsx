import React from "react";
import "./packingHeader.style.css";

export const PackingHeaderComponent = () => (
     <section className="storage packing-header">
       <div className="storage-bg">
         <h1 className="storage-bg__header d-flex align-items-center flex-column">
            <span>Packing & Unpacking </span>
            <span>Service for all type of move</span> 
        </h1>
         <p className="storage-bg__txt">Packing Service from one of the best mover in Los Angeles.</p>
       </div>
       <div className="storage-info">
        <p className="storage-info__txt">Are you in need of a professional packing and unpacking service? We’ve got you covered! As one of the full-service packing and moving companies in Los Angeles, JFK Moving team is always ready to assist you with your relocation process.</p>
        <p className="storage-info__txt">
            We offer you professional packing and unpacking services that will save your time and energy. JFK Moving team has years of experience in packing delicate and breakable objects. Handling valuable items like fine arts or appliances with care is our specialty!
        </p>
        <p className="storage-info__txt">There are many different ways to pack your belongings as each item requires a specific approach. We will ensure that your valuables are properly organized, carefully packed, and completely secured..</p>
       </div>
    </section>
)