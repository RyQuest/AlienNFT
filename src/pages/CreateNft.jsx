import React, { useState } from "react";
import "../asset/css/custom-NFT.css";
import { ipfsMint } from "../helpers/ipfs";
import { Mint } from "../helpers/Mint";
import { BuyNFT } from "../helpers/BuyNFT";
import { ToastContainer } from "react-toastify";
import upload_img from "../asset/images/upload.png";
import Az from "../asset/images/Azkari.png";

export default function CreateNft() {
  const [noOfRows, setNoOfRows] = useState(1);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [contentImage, setContentImage] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    file: "",
  });

  const { file, title, price, description } = formData;
  const handleFile = (e) => {
    const { files } = e.target;

    const reader = new window.FileReader();
    reader.readAsArrayBuffer(files[0]);

    reader.onloadend = () => {
      setContentImage(reader.result);
    };

    if (files[0]) {
      if (files[0].type.includes("image")) {
        const filename = files[0].name;
        const fileExtension = filename.substr(filename.lastIndexOf(".") + 1);
        if (
          fileExtension.toLowerCase() === "png" ||
          fileExtension.toLowerCase() === "jpg" ||
          fileExtension.toLowerCase() === "gif" ||
          fileExtension.toLowerCase() === "jpeg"
        ) {
          setFormData({
            ...formData,
            file: e.currentTarget.files[0],
          });
          setPhotoUrl(URL.createObjectURL(files[0]));
        }
      }
    }
  };
  const handleFormInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  console.log("...", formData);
  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const DataObj = { name: title, price: price, description: description };
    const hash = await ipfsMint(contentImage, DataObj);
    // const hash = await ipfsMint(Az, DataObj);
    console.log("ipfshash", hash);
    const state = hash.replace("https://gateway.ipfs.io/ipfs/", "");
    console.log("state", state);

    const voucher = await Mint(state, price);
    console.log("voucher", voucher);

    const redeem = await BuyNFT(voucher);
    console.log("redeem", redeem);
  };
  return (
    <section
      className=" trending-bew-sec"
      style={{
        // maxWidth: "72em",
        minHeight: "100vh",
        backgroundColor: "rgb(47 188 170)",
        textShadow: "0 .05rem .1rem rgba(0,0,0,.5)",
        boxShadow: "inset 0 0 5rem rgba(0,0,0,.5)",
        fontFamily: "var(--font-family-body)",
        lineHeight: "1",
        fontWeight: "var(--font-weight-base)",
        fontSize: "var(--font-size-base)",
        color: "white",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-9 m-auto">
            <h3 className="text-center heading-main d-flex justify-content-center align-items-center">
              Create New NFT
            </h3>
            <ToastContainer />
            <form method="POST" onSubmit={formSubmitHandler}>
              <div className="row">
                <div className="col-md-12">
                  <div className="contact-form collection-box-new">
                    <div className>
                      <div className="form-group">
                        <div className="uploadOuter">
                          <span className="dragBox upload-NFT-box create-upload-box">
                            <input
                              type="file"
                              onchange="dragNdrop(event)"
                              ondragover="drag()"
                              ondrop="drop()"
                              id="uploadFile"
                              onChange={(e) => handleFile(e)}
                            />
                          </span>
                        </div>
                        <div id="preview" className="preview-box-new" />
                      </div>
                      <div className="form-group">
                        <label>Title</label>
                        <input
                          type="text"
                          className="form-control"
                          value={title}
                          placeholder="Enter Title Here"
                          name="title"
                          onChange={(e) => handleFormInput(e)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Price Per Item</label>
                        <input
                          type="text"
                          className="form-control"
                          value={price}
                          placeholder="Enter Price"
                          name="price"
                          onChange={(e) => handleFormInput(e)}
                        />
                      </div>

                      <div className="form-group">
                        <label>Description</label>
                        <textarea
                          className="form-control"
                          rows={3}
                          value={description}
                          placeholder="Enter Description here..."
                          defaultValue={""}
                          name="description"
                          onChange={(e) => handleFormInput(e)}
                        />
                      </div>

                      <div className="form-group">
                        <label>Category</label>
                        <div className="row" scope="row">
                          {[...Array(noOfRows)].map((elementInArray, index) => {
                            <div>
                              <div className="col-md-4" scope="col">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Traits"
                                />
                              </div>
                              <div className="col-md-4" scope="col">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Traits"
                                />
                              </div>
                            </div>;
                          })}
                        </div>
                        <div>
                          {/* <button > */}
                          <button
                            className="border-btn"
                            style={{ marginRight: "10px" }}
                            onClick={() => setNoOfRows(noOfRows + 1)}
                          >
                            Add More
                          </button>
                          {/* </button> */}
                          {/* <button > */}
                          <button
                            className="border-btn"
                            onClick={() => setNoOfRows(noOfRows - 1)}
                          >
                            Remove
                          </button>
                          {/* </button> */}
                        </div>
                      </div>
                      <div className="form-group" style={{ marginTop: "20px" }}>
                        <label>Supply</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="No. Of Items"
                        />
                      </div>
                      <div style={{ marginTop: "100px" }}>
                        <span>
                          <button
                            className="border-btn"
                            type="submit"
                            style={{ marginRight: "10px" }}
                            onSubmit={formSubmitHandler}
                          >
                            Create
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
