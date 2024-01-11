import axios from "axios";
import React, { useEffect, useState } from "react";

const Count = () => {
  const [countPageDetails, setCountPageDetails] = useState({
    count: {
      Student: 0,
      Startup: 0,
      "Local Business/SME": 0,
      "NRE or Gulf Returnees": 0,
      "Working Professional": 0,
      other: 0,
    },
    totalEntry:0,
    lastEntry:{}
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
    <div className="flex justify-center items-center h-screen flex-col gap-2">
      <div className="w-[900px] shadow-lg p-5">
        <h1 className="title wave-before">Registration Count</h1>
        <table className="s-table">
          <thead>
            <tr>
              <th className="text-left">Students</th>
              <th className="text-left">Startups</th>
              <th className="text-left">Local Business/SME</th>
              <th className="text-left">NRE or Gulf Returnees</th>
              <th className="text-left">Working Profesionals</th>
              <th className="text-left">others</th>
              <th>Total</th>
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
              <td>{countPageDetails.totalEntry}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-[900px] shadow-lg p-5">
        <h1 className="title wave-before">Last Entry Details</h1>
        <div>
          <div>
            <label>Name: {countPageDetails?.lastEntry.name}</label>
          </div>
          <div>
            <label>Reg Id: {countPageDetails?.lastEntry.regId}</label>
          </div>
          <div>
            <label>Phone: {countPageDetails?.lastEntry.phoneNumber}</label>
          </div>
          <div>
            <label>Email: {countPageDetails?.lastEntry.email}</label>
          </div>
          <div>
            <label>Category: {countPageDetails?.lastEntry.category}</label>
          </div>
          <div>
            <label>Company: {countPageDetails?.lastEntry.company}</label>
          </div>
          <div>
            <label>District: {countPageDetails?.lastEntry.district}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
