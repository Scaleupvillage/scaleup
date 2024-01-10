import axios from "axios";
import React, { useEffect, useState } from "react";

const Count = () => {
  const [countPageDetails, setCountPageDetails] = useState({
    count: {
      Student: 0,
      Startup: 0,
      "Local Business/SME": 0,
      "NRE or Gulf Returnees": 0,
      "Working Professional":0,
      other: 0,
    },
  });
  useEffect(() => {
    const getRegistrationCount = () => {
      axios.get("/api/register/count").then((response) => {
        setCountPageDetails(response.data.data);
      });
    };
    getRegistrationCount();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[900px] shadow-lg p-5">
        <h1 className="title wave-before">Registration Count</h1>
        <table className="s-table">
          <thead>
            <tr>
              <th className="text-left">Students</th>
              <th className="text-left">Startups</th>
              <th className="text-left">Local Business/SME</th>
              <th className="text-left">NRE or Gulf Returnees</th>
              <th className="text-left">Working Proffesionals</th>
              <th className="text-left">others</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{countPageDetails.count.Student}</td>
              <td>{countPageDetails.count.Startup}</td>
              <td>{countPageDetails.count["Local Business/SME"]}</td>
              <td>{countPageDetails.count["NRE or Gulf Returnees"]}</td>
              <td>{countPageDetails.count["Working Professional"]}</td>
              <td>{countPageDetails.count.other}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Count;
