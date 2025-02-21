import { Table } from "../components/Table";
import { Spinner } from "../components/Spinner";
import { useState, useEffect } from "react";

const HotelsPage = () => {
  const [hotels, setHotels] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await fetch('/api/hotels');
        const jsonData = await res.json();
        setHotels(jsonData)
      } catch (err) {
        console.log("Error fetching data", err)
      } finally {
        setLoading(false)
      }
    }

    fetchHotels();
  }, [])
  return (
    <main id="main">
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Hotels</h2>
            <ol>
              <li>
                <a href="">Home</a>
              </li>
              <li>Hotels</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="inner-page">
        <div className="container">
        {loading ? (
          <Spinner loading={loading} />) 
        : 
        <Table data={hotels} page={'hotel'} />}
        </div>
      </section>
    </main>
  );
};

export default HotelsPage;
