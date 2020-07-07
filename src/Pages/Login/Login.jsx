import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container1 = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  width: 300px;
  margin: 20px;
`;

const Button = styled.button`
  padding: 10px;
  width: 150px;
  background-color: #bd291a;
  border-radius: 8px;
  border: 0px;
  font-weight: bold;
`;

function Login() {
  let history = useHistory();

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    localStorage.setItem("user", JSON.stringify(userLogin));
    history.push('/pokemons')
  }

  return (
    <div>
      <Container1 onSubmit={handleSubmit}>
        <h1>Login</h1>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
          />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />

          <Button type="submit">Submit</Button>
      </Container1>
    </div>
  );
}

export default Login;
