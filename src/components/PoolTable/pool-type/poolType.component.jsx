import React from "react";
import "./poolType.style.css";
import { Row, Col } from "react-bootstrap";
// images
import TableImage from "../../../assets/images/pool/pool-types/board.png";
import BilliardImage from "../../../assets/images/pool/pool-types/billiard.png";
import SnookerImage from "../../../assets/images/pool/pool-types/snooker.png";

export const PoolTypeComponent = () => (
  <section className="piano-types">
    <div className="piano-types__heading">
      <h1 className="titleText text-center">Type of Pianos We Move</h1>
    </div>
    <div className="piano-images">
      <Row>
        <Col lg={4} sm={12} className="piano-column piano-types__column">
          <div>
            <img src={TableImage} alt="Baby Grand piano" />
            <h3 className="piano-column__table">Pool Table</h3>
          </div>
        </Col>
        <Col lg={4} sm={12} className="piano-column piano-types__column">
          <div>
            <img
              className="piano-types__billiard"
              src={BilliardImage}
              alt="Grand piano"
            />
            <h3>Billiard</h3>
          </div>
        </Col>
        <Col lg={4} sm={12} className="piano-column piano-types__column">
          <div>
            <img src={SnookerImage} alt="Upright  piano" />
            <h3>Snooker</h3>
          </div>
        </Col>
      </Row>
    </div>
    <div className="piano-types__heading">
      <h1 className="titleText text-center">How to move a Table</h1>
    </div>
    <div className="container">
      <div className="piano-how packing-process__block packing-service__info">
        <p>
          Packing a billiard table for your upcoming move can be an overwhelming
          and time-consuming process. You need it to be disassembled so you can
          move it properly and safely. A billiard table can be one of the
          heaviest things you can bring when moving to a new home. Thus, you
          should get as much help as you can. To make the entire process as
          hassle-free as possible, here’s how to pack a billiard table for
          moving.
        </p>
        <h3>Moving Supplies and Materials</h3>
        <p>
          Look for the appropriate moving supplies and materials. If you plan to
          pack your pool table on your own, the first thing you should do is to
          gather the proper supplies now. Start checking your toolbox and find
          out whether you have the materials and tools necessary to pack it
          properly.
        </p>
        <h3>Disassembling Side Packets</h3>
        <p>
          Disassemble the side pockets. To begin with, the billiard table
          disassembly, remove the staples so you can detach the six side
          pockets. Depending on the model of your table, you may need a staple
          remover or screwdriver to unfasten the pockets properly. Cover each
          pocket in a wrapping paper and put them in a box.
        </p>
        <h3>Loosening Bolts</h3>
        <p>
          Loosen the rail bolts below each rail. Use a wrench to unscrew the
          bolts that hold the rails to the table. Then, detach the rail sections
          and set them aside. Ask someone’s help if you’re dealing with attached
          rails at the corners. After the removal, pack each rail in a moving
          blanket and seal it with packing tape.
        </p>
        <h3>Removing Felt</h3>
        <p>
          Remove the felt. This step may require more time and patience.
          However, the way you’ll remove the felt depends on how it’s attached
          on the base. Make sure you take every time you need in removing it as
          any mistake may lead you to purchase a new one. You can use a staple
          remover for the felt removal. Once removed, keep the felt by folding
          it carefully.
        </p>
        <h3>Removing Parts</h3>
        <p>
          Remove the base and detach the frame from the legs. Get the most out
          of power tools to unscrew the bolts that hold the main base of the
          table. Then, find time to separate the frame from the legs by flipping
          the former upside down.
        </p>
        <h3>Packing the Table</h3>
        <p>
          Pack the billiard table. Once you’ve disassembled the main parts of
          the table, it’s time to pack them in the moving truck. Before loading
          them, secure plenty of furniture pads to safeguard finished wood
          especially its valuable pieces. If it’s your first time to move a
          billiard table, it’ll help if you ask for some advice from a
          professional moving company. Some of them may be known for being
          specialty movers who are skilled in moving large items and offering
          other packing services.
        </p>
        <h3>Packing Other accessories</h3>
        <p>
          Box up the accessories. Boxing up the billiard table accessories means
          you need to have stuffing pillows to prevent the items from moving.
          Designate a large box to place all the parts such as the pockets,
          balls, standing cues, and any other accessories. Make sure you deal
          with the folded felt gentle by covering it with a plastic wrap.
        </p>
      </div>
    </div>
    <div className="piano-types__heading piano-extra__heading container">
      <h1 className="titleText text-center">Pool Table Moving</h1>
      <p>
        The Bottom Line. Packing and moving a billiard table should always be
        taken seriously as it requires a special consideration throughout the
        process. So, follow these packing tips and expect a smooth move
        afterward. However, if you don’t have the appropriate moving tools and
        supplies, you may find it less hassle to use an experienced billiard
        table mover who will handle the move for you.
      </p>
    </div>
    <div className="piano-table-move__btn d-flex justify-content-center">
      <button className="continue-button">Pool Table Move</button>
    </div>
  </section>
);
