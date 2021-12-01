import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  // Buraya localApi gelecek
  const apiLink = "http://fakestoreapi.com/products";

  const [post, setPost] = useState([]);
  const [fake, setFake] = useState([]);

  useEffect(() => {
    fakeStore();
  }, []);

  const fakeStore = async () => {
    const response = await fetch(apiLink);
    console.log(response);
    const jsonData = await response.json();
    console.log(jsonData);

    setFake(jsonData);
  };

  useEffect(() => {
    const data = axios.get(apiLink).then((response) => {
      setPost(response.data);
    });
  }, []);

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Ad</th>
            <th>Soyad</th>
            <th>Not Ortalaması</th>
          </tr>
        </thead>
        <tbody>
          {fake.map((val) => {
            return (
              <tr>
                <td>{val.id}</td>
                <td>{val.title}</td>
                <td>{val.category}</td>
                <td>{val.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
