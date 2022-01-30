import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const navigation = useNavigate();

  const formHendle = (e) => {
    setState((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const formValid = () => {
    if (state.name && state.email && state.tel) {
      navigation("/email");
    }
  };

  return (
    <div>
      <form>
        <input
          onChange={(e) => {
            formHendle(e);
          }}
          name="name"
          type="text"
          required
        />
        <br />
        <input
          onChange={(e) => {
            formHendle(e);
          }}
          name="email"
          type="email"
          required
        />
        <br />
        <input
          onChange={(e) => {
            formHendle(e);
          }}
          name="tel"
          type="number"
          required
        />
        <br />
        <button type="submit" onClick={formValid}>
          send
        </button>
      </form>
    </div>
  );
};
