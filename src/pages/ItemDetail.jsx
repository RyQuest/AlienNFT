import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "../asset/css/Rarity.css";

export default function ItemDetail() {
  const url = "http://13.234.110.216:3001/users/content-detail";
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
      <div
        className="container d-flex w-100 p-3 mx-auto flex-column background-color: #ffa900;"
        style={{ minHeight: "100%", maxWidth: "72em" }}
      >
        <header>
          <div></div>
        </header>{" "}
        <ToastContainer />
        <main className="px-3" style={{ minHeight: "100%" }}>
          <div
            style={{
              maxWidth: "42rem",
              marginTop: "5rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12 mb-2"
                style={{ paddingLeft: "30px", paddingRight: "30px" }}
              >
                <div>
                  {/* <h3 className="punk-rank">Rank #1</h3> */}
                  <div className="image-container">
                    <img
                      className="punk-avatar"
                      style={{ borderRadius: "10px" }}
                      src={itemDetail?.content.image_url}
                      alt={itemDetail?.content.name}
                    />
                  </div>
                  <div className="punk-info text-center mt-4">
                    <span>{itemDetail?.content.name}</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 mb-2">
                <div className="rarity-score-block">
                  <a
                    className="view-on-link"
                    href={itemDetail?.content.permalink}
                    target="_blank"
                  >
                    <div className="view-on-block text-center">
                      View on Opensea
                    </div>
                  </a>
                </div>
                <div className="mt-4">
                  <div className="row">
                    <div className="col-6">
                      <h3
                        className="trait-type"
                        style={{ fontSize: "1.50rem" }}
                      >
                        Discription
                      </h3>
                    </div>
                  </div>
                  <div className="d-flex trait-value-block">
                    <div className="flex-grow-1 trait-value">
                      {itemDetail?.content.description}
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="row">
                    <div className="col-6">
                      <h3
                        className="trait-type"
                        style={{ fontSize: "1.50rem" }}
                      >
                        Character
                      </h3>
                    </div>
                  </div>
                  <div className="d-flex trait-value-block">
                    <div className="flex-grow-1 trait-value">
                      {itemDetail?.content.attributes[2].value}
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="row">
                    <div className="col-6">
                      <h3
                        className="trait-type"
                        style={{ fontSize: "1.50rem" }}
                      >
                        Shirts
                      </h3>
                    </div>
                  </div>
                  <div className="d-flex trait-value-block">
                    <div className="flex-grow-1 trait-value">
                      {itemDetail?.content.attributes[1].value}
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="row">
                    <div className="col-6">
                      <h3
                        className="trait-type"
                        style={{ fontSize: "1.50rem" }}
                      >
                        Glasses
                      </h3>
                    </div>
                  </div>
                  <div className="d-flex trait-value-block">
                    <div className="flex-grow-1 trait-value">
                      {itemDetail?.content.attributes[0].value}
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="row">
                    <div className="col-6">
                      <h3
                        className="trait-type"
                        style={{ fontSize: "1.50rem" }}
                      >
                        Hats
                      </h3>
                    </div>
                  </div>
                  <div className="d-flex trait-value-block">
                    <div className="flex-grow-1 trait-value">
                      {itemDetail?.content.attributes[3].value}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* <div className="item-details-section light-version padding-top padding-bottom">
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
      </div> */}
    </div>
  );
}
