const HotelPage = () => {
  return (
    <main id="main">
      <section class="breadcrumbs">
        <div class="container">
          <div class="d-flex justify-content-between align-items-center">
            <h2>Hotels</h2>
            <ol>
              <li>
                <a href="index.php">Home</a>
              </li>
              <li>Hotels</li>
            </ol>
          </div>
        </div>
      </section>

      <section class="inner-page">
        <div class="container">
          <table class="table table-hover">
            <tr class="table-primary">
              <th>Sr. No</th>
              <th>Hotel Name</th>
              <th>Mobile No</th>
              <th>Address</th>
              <th>Operations</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <a href="">
                  <input type="submit" value="Select" class="btn btn-primary" />
                </a>
              </td>
            </tr>
          </table>
        </div>
      </section>
    </main>
  );
};

export default HotelPage;
