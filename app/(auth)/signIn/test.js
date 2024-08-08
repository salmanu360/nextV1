<div>
      {/* <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700"> */}
      <div className="container h-full p-10">
        <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="md:mx-6 md:p-12">
                <div className="text-center">
                  <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold text-orange-500">
                    ENTER ACCOUNT CREDENTIALS{" "}
                  </h4>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Email */}
                  <div className="">
                    <input
                      type="email"
                      value={credentials.email}
                      onChange={onChange}
                      className="rounded-lg h-8"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />

                    {emailError && (
                      <label htmlFor="email" className="my-2 mx-3 text-red-600">
                        {" "}
                        {emailError}
                      </label>
                    )}
                  </div>

                  {/* Password */}
                  <div className="mt-4 mb-4">
                    <input
                      type="password"
                      value={credentials.password}
                      onChange={onChange}
                      className="rounded-lg h-8"
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>

                  {/* Submit button */}
                  <div className="mb-12 pb-1 pt-1 text-center">
                    <button
                      className="rounded-xl h-8 w-20"
                      type="submit"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                      style={{
                        background:
                          "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"
                      }}
                    >
                      Sign in
                    </button>
                  </div>

                  {/* Register button */}
                  <div className="mb-12 pb-1 pt-1 text-center">
                    <p className="mb-4 text-red-600 me-2">NO ACCOUNT</p>
                    <Link
                      className="rounded-xl h-8 w-20 hover:bg-orange-500"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                      href="signUp"
                    >
                      SIGN UP
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}
      {/* {userData && <DashBoard user={userData} />}{" "} */}
    </div>