import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function ForgotPassword() {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <Login />
      ) : (
        <section>
          <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto text bg-white p-8 border border-gray-300 rounded">
              <div className="text-xl font-bold text-gray-900 mt-2 text-center">
                Forgot Password
              </div>
              <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-small text-gray-600 block py-2"
                  >
                    Lengkapi form berikut untuk mengganti password
                  </label>
                  <input
                    type="text"
                    id="email"
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </div>
                <button className="w-full py-2 px-4 bg-gray-700 text-white  rounded-md text-sm font-medium">
                  Send Email
                </button>
              </form>
              <div className="flex items-center justify-center py-5">
                <Link to="/" className="text-gray-400 text-sm font-small">
                  Kembali ke halaman login
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ForgotPassword;
