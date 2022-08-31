import React from "react";
import "./packingProcess.style.css";

export const PackingProcessComponent = () => (
  <section className="packing-process">
    <div className="container">
      <div className="packing-process__heading">
        <h1 className="packing-process__header titleText text-center">
          Packing Service Process
        </h1>
      </div>
      <div className="packing-process__block packing-service__info">
        <h3>Create Your Packing List</h3>
        <p>
          Whatever you need to pack, and wherever it's located, we’ll work
          together with you to build a comprehensive, room-by-room inventory.
          Every subsequent step is based on this list, and we’ll decide with you
          on the best services for your move. However, if you need to add
          anything later on or you forgot an important item, we can review and
          add it to the list too!
        </p>
        <h3>Decide On Storage Options</h3>
        <p>
          If you’re moving house, downsizing, or simply redecorating, we can
          help store items that don’t fit in with your new lifestyle. Simply
          highlight those items you want to store and decide how long you would
          like to store them for. We’ll do the rest and we’ll ensure they’re
          packed extra carefully for long-term storage.
        </p>
        <h3>Trust Our Movers</h3>
        <p>
          Once all of the groundwork has been laid, we’ll schedule a time and
          arrive at your home with all of the packing materials. This means
          everything from standard boxes through wrapping tape and padding to
          custom wooden crates. We’ll carefully pack your items and inventory
          them as we go, labeling and cataloging each box or items.
        </p>
        <h3>Follow Your Items</h3>
        <p>
          Wherever your items are heading, our attentive movers will always stay
          in touch in case of unavoidable delays such as traffic. Additionally,
          we offer real-time tracking of your belongings so you have a clearer
          idea of exactly when they will be arriving.
        </p>
        <h3>Unpack Your New Home</h3>
        <p>
          Whether you choose the white glove service or prefer to unpack
          yourself, we’ll provide you with a full inventory with each item
          marked off so you can be sure everything has arrived safely. What’s
          more, if you have any further questions after your items have arrived,
          simply contact your project manager.
        </p>
      </div>
      <div className="packing-process__btn d-flex justify-items-center">
        <button className="continue-button">Get a quote</button>
      </div>
    </div>
  </section>
);
