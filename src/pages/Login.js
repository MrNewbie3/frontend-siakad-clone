import React, { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import Dashboard from "./Dashboard";

function Login() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <Dashboard />
      ) : (
        <section>
          <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto text bg-white p-8 border border-gray-300 rounded">
              <div className="text-3xl font-bold text-gray-900 mt-2 text-center">
                SIAKAD CLONE
              </div>
              <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
                {errMsg}
              </p>
              <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                <div>
                  <label
                    htmlFor="username"
                    className="text-sm font-bold text-gray-600 block"
                  >
                    Username :
                  </label>
                  <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </div>
                <div>
                  <label
                    className="text-sm font-bold text-gray-600 block"
                    htmlFor="password"
                  >
                    Password :
                  </label>
                  <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    autoComplete="off"
                    required
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-300 rounded"
                    />
                    <label className="ml-2 text-sm text-gray-600">
                      Remember Me
                    </label>
                  </div>
                  <div>
                    <a href="" className="font-medium text-sm text-gray-500">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <button className="w-full py-2 px-4 bg-gray-700 text-white  rounded-md text-sm font-medium">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Login;
