import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  const checkAccess = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: { Authorization: "Bearer " + token },
      };
      const res = await axios.get("http://localhost:5000/bookmark/100", config);
      console.log(res);
    } catch (e) {
      navigate("/login");
    }
  };

  useEffect(() => {
    checkAccess();
  }, []);

  return <div>Admin routes</div>;
}

export default Admin;
