import { Table } from "../components/Table";
const data = [
	{
    "id": "1",
		"name": "name 1",
		"mobile": 46,
		"address": "address 1",
	},
	{
    "id": "2",
		"name": "name 2",
		"mobile": 66,
		"address": "address 2",
	},
	{
    "id": "3",
		"name": "name 3",
		"mobile": 6,
		"address": "address 3",
	}
]
const HotelPage = () => {
  return (
    <main id="main">
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
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

      <section className="inner-page">
        <div className="container">
          <Table data={data} page={'page'} />
        </div>
      </section>
    </main>
  );
};

export default HotelPage;
