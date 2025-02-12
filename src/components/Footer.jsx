export const Footer = () => {
  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="footer-info">
                <h3>Designer</h3>
                <p class="pb-3">
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
                <div class="social-links mt-3">
                  <a href="http://twitter.com" class="twitter">
                    <i class="bx bxl-twitter"></i>
                  </a>
                  <a href="http://facebook.com" class="facebook">
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a href="http://instagram.com" class="instagram">
                    <i class="bx bxl-instagram"></i>
                  </a>
                  <a href="http://skype.com" class="google-plus">
                    <i class="bx bxl-skype"></i>
                  </a>
                  <a href="http://linkedin.com" class="linkedin">
                    <i class="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/">Home</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/about">About us</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/places">Tourist Places</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 footer-newsletter">
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
      <div class="container">
        <div class="copyright">
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
