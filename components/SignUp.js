"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import { useAppContext } from "@/context/userState";
export default function SignUp(props) {
  // const { setUsers, users } = useAppContext();
  const router = useRouter();
  const [userIsThere, setUserIsThere] = useState(false);
  const [passError, setPassError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: credentials.username,
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const data = await response.json();
      const { message, user } = data;

      if (response.ok) {
        console.log("Successful registration", data);
      } else {
        setErrorMessage(data.message || "Login Failed");
        console.log(errorMessage);
      }
      if (message === "User already created") {
        setUserIsThere(true);
        console.log("User exists", userIsThere);
      } else {
        setUserIsThere(false);
        // setUsers(user);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    const { name, value } = e.target;

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //regular expression used to check the email formate
      if (!emailRegex.test(value)) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
    }
    if (name === "password") {
      if (value.length < 8) {
        setPassError("Password must be atleat 8 character long");
      } else {
        setPassError("");
      }
    }
  };

  return (
    <div>
      {/* <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700"> */}
      <div className="container h-full p-10">
        <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="md:mx-6 md:p-12">
                <div className="text-center">
                  <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold text-orange-500">
                    PLEASE REGISTER AN ACCOUNT
                  </h4>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* User name */}
                  <div className="relative mb-4" data-twe-input-wrapper-init>
                    <input
                      type="text"
                      value={credentials.username}
                      onChange={onChange}
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                      id="username"
                      name="username"
                      placeholder="Username"
                    />
                    <label
                      htmlFor="username"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                    >
                      Username
                    </label>
                    {userIsThere && (
                      <label htmlFor="email" className="my-2 mx-3 text-red-500">
                        A user with this username already exists
                      </label>
                    )}
                  </div>

                  {/* Email */}
                  <div className="relative mb-4" data-twe-input-wrapper-init>
                    <input
                      type="email"
                      value={credentials.email}
                      onChange={onChange}
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                    <label
                      htmlFor="email"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                    >
                      Email
                    </label>
                    {emailError && (
                      <label htmlFor="email" className="my-2 mx-3 text-red-600">
                        {" "}
                        {emailError}
                      </label>
                    )}
                    {userIsThere && (
                      <label htmlFor="email" className="my-2 mx-3 text-red-500">
                        A user with this email already exists
                      </label>
                    )}
                  </div>

                  {/* Password */}
                  <div className="relative mb-4" data-twe-input-wrapper-init>
                    <input
                      type="password"
                      value={credentials.password}
                      onChange={onChange}
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                    >
                      Password
                    </label>
                    {passError && (
                      <label
                        htmlFor="password"
                        className="my-2 mx-3 text-red-600"
                      >
                        {" "}
                        {passError}
                      </label>
                    )}
                  </div>

                  {/* Submit button */}
                  <div className="mb-12 pb-1 pt-1 text-center">
                    <button
                      className="mb-3 inline-block w-40 rounded-2xl px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-1500 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                      type="submit"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                      style={{
                        background:
                          "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                      }}
                    >
                      Create Account
                    </button>

                    {/* Forgot password link */}
                    <a
                      className=" relative h-screen ml-4 text-blue-500 hover:underline "
                      href="#!"
                    >
                      Forgot password?
                    </a>
                  </div>

                  {/* Register button */}
                  <div className="flex items-center justify-between pb-6">
                    <p className="mb-0 me-2">ALREADY AN ACCOUNT</p>
                    <Link
                      className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-rose-950 dark:focus:bg-rose-950"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                      href="signIn"
                    >
                      SIGN IN{" "}
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}
    </div>
  );
}
