export const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-info">
                <h3>Designer</h3>
                <p className="pb-3">
                  <em>
                    For awsome website designs and marketing. Here is the quick
                    Informtion.
                  </em>
                </p>
                <p>
                  <br />
                  Anantnag, Jammu & Kashmir
                  <br />
                  <br />
                  <strong>Phone:</strong> +91 9999999999
                  <br />
                  <strong>Email:</strong> hameemhussain@yahoo.com
                  <br />
                </p>
                <div className="social-links mt-3">
                  <a href="http://twitter.com" className="twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="http://facebook.com" className="facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="http://instagram.com" className="instagram">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="http://skype.com" className="google-plus">
                    <i className="bx bxl-skype"></i>
                  </a>
                  <a href="http://linkedin.com" className="linkedin">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="/">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="/about">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="/places">Tourist Places</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>
                Subscribe to our mailing list and get offers and trip updates
                about Kashmir.
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Hameem</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
