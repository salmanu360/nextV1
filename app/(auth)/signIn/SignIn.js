"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAppContext } from "@/context/userState";
import { login } from "@/services/userServices";
import { toast } from "react-toastify";
const SignIn = () => {
  const { setUsers } = useAppContext();
  const router = useRouter();
  const [emailError, setEmailError] = useState("");
  const [credentials, setCredentials] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login(credentials);
      if (result.success) {
        setUsers(result.user);
        toast.success("Logged In");
        router.push("/home");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred");
    }
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setEmailError("Enter valid email");
      } else setEmailError("");
    }
  };

  return (
    <main id="content" className="w-full max-w-md mx-auto p-6">
      <a href="index.html" className="header-logo">
        <img
          src="../assets/img/brand-logos/desktop-logo.png"
          alt="logo"
          className="mx-auto block dark:hidden"
        />
        <img
          src="../assets/img/brand-logos/desktop-dark.png"
          alt="logo"
          className="mx-auto hidden dark:block"
        />
      </a>
      <div className="mt-7 bg-white rounded-sm shadow-sm dark:bg-bgdark">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign in
            </h1>
            <p className="mt-3 text-sm text-gray-600 dark:text-white/70">
              Don't have an account yet?
              <a
                className="text-primary decoration-2 hover:underline font-medium"
                href="signup.html"
              >
                Sign up here
              </a>
            </p>
          </div>

          <div className="mt-5">
            <button
              type="button"
              className="w-full py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
            >
              <img
                src="../assets/img/authentication/social/1.png"
                className="w-4 h-4"
                alt="google-img"
              />
              Sign in with Google
            </button>

            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 ltr:before:mr-6 rtl:before:ml-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 ltr:after:ml-6 rtl:after:mr-6 dark:text-white/70 dark:before:border-white/10 dark:after:border-white/10">
              Or
            </div>

            {/* <!-- Form --> */}
            <form onSubmit={handleSubmit}>
              <div className="grid gap-y-4">
                {/* <!-- Form Group --> */}
                <div>
                  <label
                    for="email"
                    className="block text-sm mb-2 dark:text-black"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={credentials.email}
                      onChange={onChange}
                      name="email"
                      className=" text-black py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
                      required
                    />
                  </div>
                </div>
                {/* <!-- End Form Group --> */}

                {/* <!-- Form Group --> */}
                <div>
                  <div className="flex justify-between items-center">
                    <label
                      for="password"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Password
                    </label>
                    <a
                      className="text-sm text-primary decoration-2 hover:underline font-medium"
                      href="forgot.html"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      value={credentials.password}
                      onchange={onchange}
                      id="password"
                      name="password"
                      className=" text-black py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
                      required
                    />
                  </div>
                </div>
                {/* <!-- End Form Group --> */}

                {/* <!-- Checkbox --> */}
                <div className="flex items-center">
                  <div className="flex">
                    <input Sign up here />
                  </div>
                  <div className="ltr:ml-3 rtl:mr-3">
                    <label
                      for="remember-me"
                      className="text-sm dark:text-white"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                {/* <!-- End Checkbox --> */}

                <button
                  type="submit"
                  className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10"
                >
                  Sign in
                </button>
              </div>
            </form>
            {/* <!-- End Form --> */}
          </div>
        </div>
      </div>
    </main>
  );
};
export default SignIn;
