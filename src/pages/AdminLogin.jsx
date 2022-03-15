import React from "react";
import "../asset/css/login.css";

export default function AdminLogin() {
  return (
    <div>
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
