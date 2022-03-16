import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "../../asset/css/bootstrap.min.css";
import "../../asset/css/pagenation.css";

const filter_url = "http://13.234.110.216:3001/users/trait-filter";

const url = "http://13.234.110.216:3001/users/content";

export default function RarityComp() {
  const [catagory, setCatagory] = useState("");
  const [sortBy, setSortBy] = useState("");
  // const [unique, setUnique] = useState();
  // const [traitFilter, setTraitFilter] = useState();
  const [currentPage, setCurretPage] = useState(1);

  const [collectionData, setCollectionData] = useState({
    list: [],
    total: "",
    loading: true,
  });
  const { list, total, loading } = collectionData;

  const getData = async (page, limit, tag, sortBy) => {
    console.log("get data hit");
    const res = await axios.post(url, {
      page,
      limit,
      search_tag: tag,
      sortBy,
    });
    console.log("data", res);
    setCollectionData({
      ...collectionData,
      list: res.data.data,
      total: res.data.total,
      loading: false,
    });
  };
  console.log("...", list);

  useEffect(() => {
    setCollectionData({ ...collectionData, loading: true });
    getData(currentPage, 48, catagory, sortBy);
  }, [catagory, sortBy, currentPage]);
  // console.log(",,,,,,", catagory);

  const pages = (() => {
    console.log({ total: list?.total });
    if (list?.total) {
      return Array.from(
        { length: Math.ceil(list?.total / 48) },
        (_, i) => i + 1
      );
    }
  })();
  console.log({ pages });
  const nextPage = () => {
    setCurretPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > pages.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setCurretPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 1) {
        prevPage = pages.length;
      }
      return prevPage;
    });
  };

  const handlePage = (page) => setCurretPage(page);
  // console.log(currentPage);

  return (
    <div
      className=""
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
      <form className="search text-center d-none " action="/search-result">
        <div className="d-none">
          <fieldset style={{ border: "0" }}>
            <input
              className="search-text-input"
              type="text"
              name="search"
              placeholder="Search by Name..."
              defaultValue=""
            />
            <button type="submit">
              <svg
                width={24}
                height={24}
                viewBox="0 0 512 512"
                className="icon"
              >
                <path
                  fill="rgb(255,255,255)"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </fieldset>
          <footer>
            <button type="submit">Search</button>
          </footer>
        </div>
        <a
          className="trait-fileter-btn btn btn-primary d-none "
          data-bs-toggle="offcanvas"
          href="https://www.sirfbazar.com/#traitFilterOffcanvas"
          role="button"
          aria-controls="offcanvasExample"
        >
          Trait Filter (<span id="trait-fileter-selected-num">0</span>)
        </a>
        <div className="d-none">
          <select
            id="sorting-select"
            className="form-select"
            name="order_by"
            onChange={(e) => setCatagory(e.target.value)}
          >
            <option value="Edition" selected>
              Sort By Rarity
            </option>
            <option value="id">Sort By ID</option>
          </select>
        </div>
        <div></div>
      </form>
      <div
        className="trait-fileter-offcanvas offcanvas offcanvas-start "
        tabIndex={-1}
        id="traitFilterOffcanvas"
        aria-labelledby="traitFilterOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="traitFilterOffcanvasLabel">
            Select Traits
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <h4>character</h4>
          <select
            name="trait_select_14"
            className="trait-select form-select mb-4"
          >
            <option value="All">All</option>
            <option value="alien">alian</option>
          </select>
          <h4>shirts</h4>
          <select
            name="trait_select_0"
            className="trait-select form-select mb-4"
          >
            <option value="All">All</option>

            <option value="Gold">Gold</option>
            <option value="BlackJacket">BlackJacket</option>
            <option value="DollarShirt">DollarShirt</option>
            <option value="BrownJacket">BrownJacket</option>
            <option value="OrangeShirt">OrangeShirt</option>
            <option value="BlueSweater">BlueSweater</option>
            <option value="transparant">Transparant</option>
          </select>
          <h4>glasses</h4>
          <select
            name="trait_select_12"
            className="trait-select form-select mb-4"
          >
            <option value="All">All</option>
            <option value="Green">Green</option>
            <option value="Black">Black</option>
            <option value="Yellow">Yellow</option>
            <option value="transparant">Transparant</option>
            <option value="VR">VR</option>
            <option value="Pink">Pink</option>
          </select>
          <h4>hats</h4>
          <select
            name="trait_select_7"
            className="trait-select form-select mb-4"
          >
            <option value="All">All</option>
            <option value="transparant">Transparant </option>
            <option value="BowlerCaps">BowlerCaps</option>
            <option value="YellowCaps">YellowCaps</option>
            <option value="BlackCaps">BlackCaps</option>
            <option value="cowboy">Cowboy</option>
            <option value="RedCaps">RedCaps</option>
            <option value="Dreadlock">Dreadlock</option>
          </select>
        </div>
      </div>
      <ToastContainer />

      <div className="container d-flex w-100 p-3 mx-auto flex-column">
        <main className="px-3" style={{ minHeight: "100%" }}>
          <br />
          <br />

          <h3 className="mb-4">Total: {list.total}</h3>
          <div>
            <div
              className="row punks"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              {loading == false &&
                list?.content.map((item, i) => (
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

            {!loading && list.content.length === 0 && (
              <div
                className="text-center text-black"
                style={{
                  color: "#000",
                  fontSize: "large",
                  fontFamily: "inherit",
                }}
              >
                {" "}
                No Data Available With Selected Category
              </div>
            )}
          </div>
          {!loading && (
            <div
              className="row justify-content-center"
              style={{ textAlign: "center" }}
            >
              <div className="btn-container">
                <button className="prev-btn" onClick={prevPage}>
                  prev
                </button>
                {pages &&
                  pages.map((index) => {
                    if (index === 1) {
                      return (
                        <button
                          key={index}
                          className={`page-btn ${
                            index === currentPage ? "active-btn" : null
                          }`}
                          onClick={() => handlePage(index)}
                        >
                          {currentPage}
                        </button>
                      );
                    }
                  })}
                <button className="next-btn" onClick={nextPage}>
                  next
                </button>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* // <iframe
    //   src={openseaUrl}
    //   style={{
    //     minHeight: "93vh",
    //     marginTop: "0",
    //     paddingTop: "0",
    //   }}
    //   width="100%"
    //   frameBorder="0"
    // ></iframe> */}
    </div>
  );
}
