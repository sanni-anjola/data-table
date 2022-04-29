import React, { useState, useEffect, useCallback } from "react";
import Table from "../components/Table";
import axios from "axios";
const Home = (props) => {
  const [data, setData] = useState([]);
  const { start, stop } = props.show;

  useEffect(() => {
    console.log("Here");
    const fetchData = async () => {
      try {
        const results = await axios.get("https://randomuser.me/api/", {
          params: { results: 100 },
        });

        // const results = await results_json.json();
        console.log("Home", results.data.results);
        setData(
          results.data.results.map(
            ({ name, gender, email, cell, picture }, index) => ({
              serial: index + 1,
              name: `${name.title} ${name.first} ${name.last}`,
              gender,
              email,
              cell,
              picture: picture.large,
            })
          )
        );
      } catch (err) {
        console.log("Error", err.message);
      }
    };
    fetchData();
  }, []);
  console.log("Data from home", data.slice(10, 20));
  console.log("Start", start)
  return (
    <>
      <Table tableItems={data.slice(start - 1, stop + 1)} />
    </>
  );
};

export default Home;
