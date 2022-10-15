import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {baseUrl} from "../info";

function Admin() {
  const navigate = useNavigate();
  const checkAccess = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: { Authorization: "Bearer " + token },
      };
      const res = await axios.get(`${baseUrl}/bookmark/100`, config);
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
