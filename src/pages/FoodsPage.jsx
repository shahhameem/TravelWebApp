import { Table } from "../components/Table";
import { useState, useEffect } from "react";

const FoodsPage = () => {
  const [foods, setFoods] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const res = await fetch('/api/foods');
        const jsonData = await res.json();
        setFoods(jsonData)
      } catch (err) {
        console.log("Error fetching data", err)
      } finally {
        setLoading(false)
      }
    }

    fetchFoods();
  }, [])
  return (
    <main id="main">
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Foods</h2>
            <ol>
              <li>
                <a href="">Home</a>
              </li>
              <li>Foods</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="inner-page">
        <div className="container">
        {loading ? (<h2>Loading</h2>) : <Table data={foods} page={'food'} />}
        </div>
      </section>
    </main>
  );
};

export default FoodsPage;
