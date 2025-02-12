import G1 from '../assets/gulmarg2.jpg'

export const Places = () => {
  return (
    <section id="portfolio" class="portfolio">
      <div class="container">
        <div class="section-title" data-aos="fade-in" data-aos-delay="100">
          <h2>Tourist Places</h2>
          <p>
            All the must places to visit at kashmir
          </p>
        </div>

        <div class="row" data-aos="fade-in">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">
                All
              </li>
              <li data-filter=".filter-app">Hill Stations</li>
              <li data-filter=".filter-card">Religious Places</li>
              <li data-filter=".filter-web">Gardens</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container" data-aos="fade-up">
          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img
                src={G1}
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-links">
                <a
                  href="assets/img/tourist-places/pahalgam1.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="Pahalgam, Anantnag"
                >
                  <i class="bx bx-plus"></i>
                </a>
                <a href="places.php?id=pahalgam" title="More Details">
                  <i class="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img
                src={G1}
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-links">
                <a
                  href="assets/img/tourist-places/tulip3.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="Tulip Garden, Srinagar"
                >
                  <i class="bx bx-plus"></i>
                </a>
                <a href="places.php?id=Tulip Garden" title="More Details">
                  <i class="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img
                src={G1}
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-links">
                <a
                  href="assets/img/tourist-places/srinagar3.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="Srinagar, Kashmir"
                >
                  <i class="bx bx-plus"></i>
                </a>
                <a href="places.php?id=Srinagar" title="More Details">
                  <i class="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img
                src={G1}
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-links">
                <a
                  href="assets/img/tourist-places/masjid4.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="Pathar Masjid, Srinagar"
                >
                  <i class="bx bx-plus"></i>
                </a>
                <a href="places.php?id=Pathar Masjid" title="More Details">
                  <i class="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img
                src={G1}
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-links">
                <a
                  href="assets/img/tourist-places/parimahal1.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="Parimahal, Srinagar"
                >
                  <i class="bx bx-plus"></i>
                </a>
                <a href="places.php?id=Pari Mahal" title="More Details">
                  <i class="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img
                src={G1}
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-links">
                <a
                  href="assets/img/tourist-places/gulmarg1.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="Gulmarg, Baramulla"
                >
                  <i class="bx bx-plus"></i>
                </a>
                <a href="places.php?id=Gulmarg" title="More Details">
                  <i class="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img
                src={G1}
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-links">
                <a
                  href="assets/img/tourist-places/shankaracharya1.webp"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="Shankaracharya temple, Srinagar"
                >
                  <i class="bx bx-plus"></i>
                </a>
                <a
                  href="places.php?id=Shankaracharya Temple"
                  title="More Details"
                >
                  <i class="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img
                src={G1}
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-links">
                <a
                  href="assets/img/tourist-places/martand1.webp"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="Ancient Martand Temple, Anantnag"
                >
                  <i class="bx bx-plus"></i>
                </a>
                <a href="places.php?id=Martand Temple" title="More Details">
                  <i class="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img
                src={G1}
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-links">
                <a
                  href="assets/img/tourist-places/shalimar1.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="Shalimar Bagh, Srinagar"
                >
                  <i class="bx bx-plus"></i>
                </a>
                <a href="places.php?id=Shalimar" title="More Details">
                  <i class="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
