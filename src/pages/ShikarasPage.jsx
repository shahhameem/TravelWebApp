import { Table } from "../components/Table";
import { useState, useEffect } from "react";

const ShikarasPage = () => {
  const [shikaras, setShikaras] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchShikaras = async () => {
      try {
        const res = await fetch('/api/shikaras');
        const jsonData = await res.json();
        setShikaras(jsonData)
      } catch (err) {
        console.log("Error fetching data", err)
      } finally {
        setLoading(false)
      }
    }

    fetchShikaras();
  }, [])
  return (
    <main id="main">
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Shikaras</h2>
            <ol>
              <li>
                <a href="">Home</a>
              </li>
              <li>Shikaras</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="inner-page">
        <div className="container">
            {loading ? (<h2>Loading</h2>) : <Table data={shikaras} page={'shikara'} />}
          
        </div>
      </section>
    </main>
  );
};

export default ShikarasPage;
