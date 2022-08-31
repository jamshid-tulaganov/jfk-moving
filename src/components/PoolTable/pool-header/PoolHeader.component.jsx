import React from "react";
import "./PoolTableHeader.style.css";

export const PoolTableHeader = () => (
  <>
    <section className="storage pool-header">
      <div className="storage-bg">
        <h1 className="storage-bg__header d-flex align-items-center flex-column">
          Pool Table Moving Service
        </h1>
        <p className="storage-bg__txt">How to move a Pool Table</p>
        <div className="pool-header__btns">
          <button>Piano Move</button>
          <button>Pool Table Move</button>
        </div>
      </div>
    </section>
  </>
);
