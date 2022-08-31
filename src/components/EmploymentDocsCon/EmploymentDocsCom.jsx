import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./style.css";
import GoBack from "../../assets/icons/goback";
import Position from "../../assets/icons/Position";
import RightIcon from "../../assets/icons/RightIcon";
import CDL from "../../assets/icons/CDL";
import RadioActive from "../../assets/icons/RadioActive";
import RadioPassive from "../../assets/icons/RadioPassive";
import Upload from "../../assets/icons/Upload";
import Image from "../../assets/icons/Image";
import Close from "../../assets/icons/close";
import movingAction from "../../redux/moving/moving.Action";
import Validation from "../../validations/validationText/validation";
import EmploymentService from "../../services/employmentService";

function EmploymentDocsCom(props) {
  const navigate = useNavigate();
  const employmentService = new EmploymentService();
  const fileFormData = new FormData();

  const [label, setLabel] = useState(true);
  const [drive, setDrive] = useState(true);
  const [fileName, setFileName] = useState("");
  const [size, setFileSize] = useState("");
  const [isFileExist, setIsFileExist] = useState(false);

  const [selectValid, setSelectValid] = useState(true);
  const [imgValid, setImgValid] = useState(true);
  const [valid, setValid] = useState(false);

  const checkAllInput = () => {
    if (
      props.employmentData.employmentPositionId === "" ||
      props.employmentData.employmentPositionId === 0
    ) {
      setSelectValid(false);
    } else {
      setSelectValid(true);
    }
    if (isFileExist === false) {
      setImgValid(false);
    } else {
      setImgValid(true);
    }
  };

  const setValidAll = () => {
    if (selectValid === imgValid) {
      setValid(true);
    }
  };

  const nextPage = async () => {
    if (valid) {
      try {
        props.employmentData.resume = "";
        const response = await employmentService.post(props.employmentData);
        console.log(response);
        navigate("/congrats");
      } catch (e) {
        console.log(e);
      }
      navigate("/congrats");
    }
    return checkAllInput();
  };

  const onFile = (e) => {
    const files = e.target.files || e.dataTransfer.files;
    fileFormData.append("file", files[0]);
    setFileName(files[0].name);
    setFileSize(files[0].size);
    setImgValid(true);
    setIsFileExist(true);
    setValidAll();
    console.log("data", props.employmentData);
  };

  const deleteImg = () => {
    fileFormData.delete("file");
    setIsFileExist(false);
    setImgValid(false);
    setValidAll();
  };

  const getRadioBtn = () => {
    props.employmentAction((props.employmentData.hasDriverLicense = !drive));
    props.employmentAction((props.employmentData.hasCdl = !label));
  };
  getRadioBtn();
  //jsx
  return (
    <>
      <div className="choosecontainer">
        <div className="container">
          <div className="row back-arrow">
            <div className="col-lg-12 d-flex align-items-start">
              <NavLink to="/calculate">
                <GoBack className="gobackicon" />
              </NavLink>
            </div>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="col-12 d-flex flex-column align-items-center">
              <p className="headTxt">Employment Opportunities</p>
              <p className="descText">
                Lorem Ipsum is not simply random text. It has roots in a piece
                of classical Latin literature from
              </p>
            </div>
          </div>
          <div className="row d-flex justify-content-between add-input-file">
            <div className="col-lg-6 justify-content-center column--inp ">
              <div className="input1">
                <p className="loc-text">Position</p>
                <div
                  className={
                    selectValid
                      ? "positionInpCon form--position"
                      : "no-validate form--position"
                  }
                >
                  <Position />
                  <Form.Select
                    size={"lg"}
                    className={"custom--select"}
                    onChange={(e) => {
                      props.employmentAction(
                        (props.employmentData.employmentPositionId =
                          e.target.value)
                      );
                      setSelectValid(true);
                      setValidAll();
                    }}
                  >
                    {props.employmentData.employmentPositionId === 1 && (
                      <option value="1" className={"form--option"}>
                        Dispatch
                      </option>
                    )}
                    <option
                      value="2"
                      className={
                        props.employmentData.employmentPositionId === 1
                          ? "d-none"
                          : "form--option"
                      }
                    >
                      Driver
                    </option>
                    <option
                      value="3"
                      className={
                        props.employmentData.employmentPositionId === 1
                          ? "d-none"
                          : "form--option"
                      }
                    >
                      Foremen
                    </option>
                    <option
                      value="4"
                      className={
                        props.employmentData.employmentPositionId === 1
                          ? "d-none"
                          : "form--option"
                      }
                    >
                      Helper
                    </option>
                  </Form.Select>
                  <RightIcon className="change-right" />
                </div>
                <div className={selectValid ? "opacity-0" : "opacity-100"}>
                  <Validation>Please select one option</Validation>
                </div>
              </div>
            </div>
            <div className="col-lg-6 justify-content-center ">
              <div className="input1">
                <p className="loc-text">License</p>
                <div className="positionInpCon radio_div form--position">
                  <div className={"d-flex align-items-center me-5"}>
                    <CDL />
                    <p className="cdl_text license--margin">Driver license</p>
                  </div>

                  <div className="input_radio">
                    <label
                      onClick={() => {
                        setDrive((pre) => !pre);
                      }}
                      htmlFor="card"
                      className="label_radio"
                    >
                      {drive ? <RadioPassive /> : <RadioActive />}
                    </label>
                    <input type={"radio"} name="license" id="license" />
                    <p className="cdl_text">Yes</p>
                  </div>

                  <div className="input_radio">
                    <label
                      onClick={() => {
                        setDrive((pre) => !pre);
                      }}
                      htmlFor="cash"
                      className="label_radio"
                    >
                      {!drive ? <RadioPassive /> : <RadioActive />}
                    </label>
                    <input type={"radio"} name="license" id="license" />
                    <p className="cdl_text">No</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-between add-input-file">
            <div className="col-xl-6 col-md-6  justify-content-center">
              <div className="input2">
                <p className="loc-text">License (optional)</p>
                <div className="d-flex align-items-center positionInpCon form--radio radio_div form--position">
                  <div className={"d-flex align-items-center"}>
                    <CDL /> +
                    <p className="cdl_text license--margin">Do you have CDL</p>
                  </div>
                  <div className="input_radio">
                    <label
                      onClick={() => {
                        setLabel((pre) => !pre);
                      }}
                      htmlFor="card"
                      className="label_radio"
                    >
                      {label ? <RadioPassive /> : <RadioActive />}
                    </label>
                    <input type={"radio"} name="cdl" id="cdl" />
                    <p className="cdl_text">Yes</p>
                  </div>
                  <div className="input_radio">
                    <label
                      onClick={() => {
                        setLabel((pre) => !pre);
                      }}
                      htmlFor="cash"
                      className="label_radio"
                    >
                      {!label ? <RadioPassive /> : <RadioActive />}
                    </label>
                    <input type={"radio"} name="cdl" id="cdl" />
                    <p className="cdl_text">No</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6  justify-content-center position-relative">
              <div
                className={isFileExist ? "input--file" : "d-none input--valid"}
              >
                <div className={"d-flex align-items-center w-100"}>
                  <Image />
                  <div className={"d-flex align-items-center w-100"}>
                    <h3 className={"loc-text license--margin my-0"}>
                      {fileName}
                    </h3>
                    <p className={"file-size loc-text"}>{size} KB</p>
                  </div>
                </div>
              </div>
              <label htmlFor="file" className={"w-100"}>
                <div className={isFileExist ? "d-none" : "d-block"}>
                  <div className={!imgValid ? "file--valid" : "input--file"}>
                    <div className={"d-flex align-items-center"}>
                      <Upload />
                      <div className={"input4"}>
                        <h3 className={"loc-text ma-0"}>
                          Upload your resume and apply today
                        </h3>
                        <p className={"pb-0 mb-0 loc-info"}>JPG or PDF</p>
                      </div>
                    </div>
                  </div>
                </div>
              </label>
              <div
                className={isFileExist ? "close" : "d-none"}
                onClick={deleteImg}
              >
                <Close fill={"white"} />
              </div>
              <input
                type="file"
                id={"file"}
                name={"file"}
                onChange={onFile}
                className={"d-none"}
              />
              <div className={imgValid ? "opacity-0" : ""}>
                <Validation>Please enter your resume</Validation>
              </div>
            </div>
          </div>

          <div className="col-12 back-buttons">
            <button className="continue-button" onClick={nextPage}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
function mapStateToProps(state) {
  return {
    employmentData: state.employment,
  };
}

const mapDispatchToProps = (dispatch) => ({
  employmentAction: (employmentData) => dispatch(movingAction(employmentData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmploymentDocsCom);
