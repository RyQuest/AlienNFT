import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

export default function ItemDetail() {
  const url = "http://localhost:3001/users/content-detail";
  const navigate = useNavigate();
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState();

  const getData = async () => {
    console.log("get data hit", id);

    const res = await axios.post(url, { content_id: id });
    console.log("data", res);
    setItemDetail(res.data.data);
  };
  console.log("itemdetail", itemDetail);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className="d-flex text-white"
      style={{
        minHeight: "100%",
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
      <div className="item-details-section light-version padding-top padding-bottom">
        <div className="container">
          <ToastContainer />
          <div className="item-details-wrapper">
            <div className="row g-5">
              <div className="col-lg-6">
                <div className="item-desc-part">
                  <div className="item-desc-inner">
                    <div className="item-desc-thumb">
                      <img src={itemDetail?.content.image} alt="item-img" />
                    </div>
                    <div className="item-desc-content">
                      <nav style={{ fontSize: "25px" }}>
                        <div
                          className="nav nav-tabs"
                          id="nav-tab"
                          role="tablist"
                        >
                          <button
                            className="nav-link"
                            id="nav-details-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-details"
                            type="button"
                            role="tab"
                            aria-controls="nav-details"
                            aria-selected="true"
                          >
                            Description:
                          </button>
                        </div>
                      </nav>
                      <div className="tab-content" id="nav-tabContent">
                        <div
                          className="details-tab tab-pane fade show active"
                          id="nav-details"
                          role="tabpanel"
                          aria-labelledby="nav-details-tab"
                        >
                          <p>{itemDetail?.content.description}</p>
                          <nav style={{ fontSize: "25px" }}>
                            <div
                              className="nav nav-tabs"
                              id="nav-tab"
                              role="tablist"
                            >
                              <button
                                className="nav-link"
                                id="nav-details-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-details"
                                type="button"
                                role="tab"
                                aria-controls="nav-details"
                                aria-selected="true"
                              >
                                Traits:
                              </button>
                            </div>

                            <ul className="other-info-list">
                              <li className="item-other-info">
                                <div className="item-info-title">
                                  <h5>Character</h5>
                                </div>
                                <div className="item-info-details">
                                  <div id="cryptoCode" className="crypto-page">
                                    <span>
                                      {itemDetail?.content.attributes[0].value}
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="item-other-info">
                                <div className="item-info-title">
                                  <h5>Shirts</h5>
                                </div>
                                <div className="item-info-details">
                                  <div id="cryptoCode" className="crypto-page">
                                    <span>
                                      {itemDetail?.content.attributes[1].value}
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="item-other-info">
                                <div className="item-info-title">
                                  <h5>Glasses</h5>
                                </div>
                                <div className="item-info-details">
                                  <div id="cryptoCode" className="crypto-page">
                                    <span>
                                      {itemDetail?.content.attributes[2].value}
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="item-other-info">
                                <div className="item-info-title">
                                  <h5>Hats</h5>
                                </div>
                                <div className="item-info-details">
                                  <div id="cryptoCode" className="crypto-page">
                                    <span>
                                      {itemDetail?.content.attributes[3].value}
                                    </span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="item-buy-part">
                  <div className="nft-item-title">
                    <h3>{itemDetail?.content.name}</h3>
                  </div>

                  <div className="item-price">
                    <h4>For More Details</h4>
                    <p>View on OpenSea</p>
                  </div>
                  <div className="buying-btns d-flex flex-wrap">
                    <a href="wallet.html" className="default-btn move-right">
                      <span>Opensea</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
