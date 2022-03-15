import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import React from "react";

export default function SearchResult() {
  const url = "http://13.234.110.216:3001/search";

  const SearchResult = () => {
    const { search } = useLocation();

    let search_tag = search.split("=")[1];

    const [searchData, setSearchData] = useState({
      list: [],
      total: "",
      loading: true,
    });
    const { list, total, loading } = searchData;

    const getData = async () => {
      const res = await axios.post(url, { search_tag });
      setSearchData({
        list: [...res.data],
        total: res.data?.length,
      });
    };

    useEffect(() => {
      getData();
    }, []);
    return (
      <>
        <div className="mt-3">
          <div className="container">
            <div className="row mt-3 mt-lg-5 pt-3 pt-lg-5">
              <div className="col-md-12">
                <h4 className="headingWh mb-4">
                  Showing Search Result For : {search_tag}
                </h4>
              </div>
            </div>
            <div className="row d-none d-md-flex"></div>
            <div className="row mt-2 mt-md-5">
              {list &&
                list.length > 0 &&
                list.map((item, i) => (
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 col-6 mb-5"
                    key={i}
                    loading="lazy"
                    style={{ paddingLeft: "30px", paddingRight: "30px" }}
                  >
                    <a
                      href={`/item-detail/${item._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div>
                        <img
                          className="punk-avatar"
                          style={{ borderRadius: "10px" }}
                          src={item.image_url}
                          alt={item.name}
                        />
                        <div className="punk-info text-center">
                          <br />
                          <span>{item.name} </span>
                          <br />
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </>
    );
  };
}
