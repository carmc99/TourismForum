import { signIn } from "next-auth/react";
import React from "react";

const login = () => {
  return (
    <div>
      <p>Login</p>
      <div>
        <button className="button primary" onClick={() => { signIn('auth0') }}>Iniciar</button>
      </div>
    </div>
  );
};

export default login;
