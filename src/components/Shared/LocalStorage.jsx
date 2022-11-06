
import React from "react";

const setLocalStorage = (data) =>{
    localStorage.setItem("locale", data);
};
const setLocalToken = (token) =>{
    localStorage.setItem("token", token);
};


export default setLocalStorage;