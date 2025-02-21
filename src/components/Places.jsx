import G1 from '../assets/gulmarg2.jpg'

export const Places = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title" data-aos="fade-in" data-aos-delay="100">
          <h2>Tourist Places</h2>
          <p>
            All the must places to visit at kashmir
          </p>
        </div>

        <div className="row" data-aos="fade-in">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">Hill Stations</li>
              <li data-filter=".filter-card">Religious Places</li>
              <li data-filter=".filter-web">Gardens</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up">
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src={G1}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href="assets/img/tourist-places/pahalgam1.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Pahalgam, Anantnag"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="places.php?id=pahalgam" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src={G1}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href="assets/img/tourist-places/tulip3.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Tulip Garden, Srinagar"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="places.php?id=Tulip Garden" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src={G1}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href="assets/img/tourist-places/srinagar3.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Srinagar, Kashmir"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="places.php?id=Srinagar" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src={G1}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href="assets/img/tourist-places/masjid4.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Pathar Masjid, Srinagar"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="places.php?id=Pathar Masjid" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src={G1}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href="assets/img/tourist-places/parimahal1.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Parimahal, Srinagar"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="places.php?id=Pari Mahal" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src={G1}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href="assets/img/tourist-places/gulmarg1.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Gulmarg, Baramulla"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="places.php?id=Gulmarg" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src={G1}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href="assets/img/tourist-places/shankaracharya1.webp"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Shankaracharya temple, Srinagar"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  href="places.php?id=Shankaracharya Temple"
                  title="More Details"
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src={G1}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href="assets/img/tourist-places/martand1.webp"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Ancient Martand Temple, Anantnag"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="places.php?id=Martand Temple" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src={G1}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href="assets/img/tourist-places/shalimar1.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Shalimar Bagh, Srinagar"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="places.php?id=Shalimar" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
