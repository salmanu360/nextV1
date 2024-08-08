import React from "react";

const CustomNavbar = () => {
  return (
    <header className=" header custom-sticky !top-0 !w-full">
      <nav className="main-header" aria-label="Global">
        <div className="header-content">
          <div className="header-left">
            {/* <!-- Navigation Toggle --> */}
            <div className="">
              <button type="button" className="sidebar-toggle !w-100 !h-100">
                <span className="sr-only">Toggle Navigation</span>
                <i className="ri-arrow-right-circle-line header-icon"></i>
              </button>
            </div>
            {/* <!-- End Navigation Toggle --> */}
          </div>

          <div className="responsive-logo">
            <a
              className="responsive-logo-dark"
              href="index.html"
              aria-label="Brand"
            >
              <img
                src="../assets/img/brand-logos/desktop-logo.png"
                alt="logo"
                className="mx-auto"
              />
            </a>
            <a
              className="responsive-logo-light"
              href="index.html"
              aria-label="Brand"
            >
              <img
                src="../assets/img/brand-logos/desktop-dark.png"
                alt="logo"
                className="mx-auto"
              />
            </a>
          </div>

          <div className="header-right">
            <div className="responsive-headernav">
              <div className="header-nav-right">
                <div
                  className="header-country hs-dropdown ti-dropdown hidden sm:block"
                  data-hs-dropdown-placement="bottom-right"
                >
                  <button
                    id="dropdown-flag"
                    type="button"
                    className="hs-dropdown-toggle ti-dropdown-toggle p-0 flex-shrink-0 h-[2.375rem] w-[2.375rem] border-0 rounded-full shadow-none focus:ring-gray-400 text-xs dark:focus:ring-white/10"
                  >
                    <img
                      src="../assets/img/flags/10.png"
                      alt="flag-img"
                      className="h-[1.375rem] w-[1.375rem]"
                    />
                  </button>
                  <div
                    className="hs-dropdown-menu ti-dropdown-menu min-w-[10rem]"
                    aria-labelledby="dropdown-flag"
                  >
                    <div className="ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10">
                      <div className="py-2 first:pt-0 last:pb-0">
                        <div className="ti-dropdown-item">
                          <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                            <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                              <img
                                src="../assets/img/flags/10.png"
                                alt="flag-img"
                              />
                            </div>
                            <div>
                              <p className="text-xs font-medium">USA</p>
                            </div>
                          </div>
                        </div>
                        <div className="ti-dropdown-item">
                          <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                            <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                              <img
                                src="../assets/img/flags/1.png"
                                alt="flag-img"
                              />
                            </div>
                            <div>
                              <p className="text-xs font-medium">Argentina</p>
                            </div>
                          </div>
                        </div>
                        <div className="ti-dropdown-item">
                          <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                            <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                              <img
                                src="../assets/img/flags/2.png"
                                alt="flag-img"
                              />
                            </div>
                            <div>
                              <p className="text-xs font-medium">Canada</p>
                            </div>
                          </div>
                        </div>
                        <div className="ti-dropdown-item">
                          <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                            <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                              <img
                                src="../assets/img/flags/3.png"
                                alt="flag-img"
                              />
                            </div>
                            <div>
                              <p className="text-xs font-medium">France</p>
                            </div>
                          </div>
                        </div>
                        <div className="ti-dropdown-item">
                          <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                            <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                              <img
                                src="../assets/img/flags/4.png"
                                alt="flag-img"
                              />
                            </div>
                            <div>
                              <p className="text-xs font-medium">Germany</p>
                            </div>
                          </div>
                        </div>
                        <div className="ti-dropdown-item">
                          <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                            <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                              <img
                                src="../assets/img/flags/5.png"
                                alt="flag-img"
                              />
                            </div>
                            <div>
                              <p className="text-xs font-medium">Italy</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header-search">
                  <button
                    aria-label="button"
                    type="button"
                    data-hs-overlay="#search-modal"
                    className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-gray-100 hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                  >
                    <i className="ri-search-2-line header-icon"></i>
                  </button>
                </div>
                <div className="header-theme-mode hidden sm:block">
                  <a
                    aria-label="anchor"
                    className="hs-dark-mode-active:hidden flex hs-dark-mode group flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-gray-100 hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                    href="javascript:;"
                    data-hs-theme-click-value="dark"
                  >
                    <i className="ri-moon-line header-icon"></i>
                  </a>
                  <a
                    aria-label="anchor"
                    className="hs-dark-mode-active:flex hidden hs-dark-mode group flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-gray-100 hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                    href="javascript:;"
                    data-hs-theme-click-value="light"
                  >
                    <i className="ri-sun-line header-icon"></i>
                  </a>
                </div>
                <div className="header-fullscreen hidden lg:block">
                  <a
                    aria-label="anchor"
                    href="javascript:void(0);"
                    onclick="openFullscreen();"
                    className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-gray-100 hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                  >
                    <i className="ri-fullscreen-line header-icon full-screen-open"></i>
                    <i className="ri-fullscreen-line header-icon fullscreen-exit-line hidden"></i>
                  </a>
                </div>
                <div
                  className="header-cart hs-dropdown ti-dropdown hidden lg:block"
                  data-hs-dropdown-placement="bottom-right"
                >
                  <button
                    id="dropdown-cart"
                    type="button"
                    className="hs-dropdown-toggle ti-dropdown-toggle p-0 border-0 flex-shrink-0 h-[2.375rem] w-[2.375rem] rounded-full shadow-none focus:ring-gray-400 text-xs dark:focus:ring-white/10"
                  >
                    <i className="ri-shopping-basket-line header-icon"></i>
                    <span className="flex absolute h-5 w-5 top-0 ltr:right-0 rtl:left-0 -mt-1 ltr:-mr-1 rtl:-ml-1">
                      <span
                        className="relative inline-flex rounded-full h-5 w-5 bg-danger text-white justify-center items-center"
                        id="cart-data2"
                      >
                        4
                      </span>
                    </span>
                  </button>
                  <div
                    className="hs-dropdown-menu ti-dropdown-menu w-[20rem] border-0"
                    aria-labelledby="dropdown-cart"
                  >
                    <div className="ti-dropdown-header !bg-primary border-b dark:border-white/10 flex justify-between items-center">
                      <p className="ti-dropdown-header-title !text-white font-semibold">
                        Shopping Cart
                      </p>
                      <a
                        href="javascript:void(0)"
                        className="badge bg-black/20 text-white rounded-sm"
                        id="cart-data"
                      >
                        4 Items
                      </a>
                    </div>
                    <div className="ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10">
                      <div
                        className="py-2 first:pt-0 last:pb-0"
                        id="allCartsContainer"
                      >
                        <div className="ti-dropdown-item relative header-box">
                          <a
                            href="cart.html"
                            className="flex items-center space-x-3 rtl:space-x-reverse w-full"
                          >
                            <img
                              loading="lazy"
                              src="../assets/img/ecommerce/products/1.png"
                              alt="product-img"
                              className="avatar p-2 shadow-none  shrink-0 items-center justify-center rounded-sm bg-gray-100 dark:bg-black/20 !ring-transparent"
                            />
                            <div>
                              <p className="text-sm font-medium text-gray-800 dark:text-white">
                                Black Heals For Women
                              </p>
                              <div className="flex space-x-2 rtl:space-x-reverse">
                                <h5 className="text-xs">$699</h5>
                                <span className="my-auto line-through text-xs text-gray-400 dark:text-white/70">
                                  $999
                                </span>
                              </div>
                            </div>
                          </a>
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="header-remove-btn ltr:ml-auto rtl:mr-auto flex-shrink-0 inline-flex items-center justify-center text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white"
                          >
                            <i className="ri-close-circle-line"></i>
                          </a>
                        </div>
                        <div className="ti-dropdown-item relative header-box">
                          <a
                            href="cart.html"
                            className="flex items-center space-x-3 rtl:space-x-reverse w-full"
                          >
                            <img
                              loading="lazy"
                              src="../assets/img/ecommerce/products/2.png"
                              alt="product-img"
                              className="avatar p-2 shadow-none  shrink-0 items-center justify-center rounded-sm bg-gray-100 dark:bg-black/20 !ring-transparent"
                            />
                            <div>
                              <p className="text-sm font-medium text-gray-800 dark:text-white">
                                Tshirt For Men
                              </p>
                              <div className="flex space-x-2 rtl:space-x-reverse">
                                <h5 className="text-xs">$245</h5>
                                <span className="my-auto line-through text-xs text-gray-400 dark:text-white/70">
                                  $599
                                </span>
                              </div>
                            </div>
                          </a>
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="header-remove-btn ltr:ml-auto rtl:mr-auto flex-shrink-0 inline-flex items-center justify-center text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white"
                          >
                            <i className="ri-close-circle-line"></i>
                          </a>
                        </div>
                        <div className="ti-dropdown-item relative header-box">
                          <a
                            href="cart.html"
                            className="flex items-center space-x-3 rtl:space-x-reverse w-full"
                          >
                            <img
                              loading="lazy"
                              src="../assets/img/ecommerce/products/9.png"
                              alt="product-img"
                              className="avatar p-2 shadow-none  shrink-0 items-center justify-center rounded-sm bg-gray-100 dark:bg-black/20 !ring-transparent"
                            />
                            <div>
                              <p className="text-sm font-medium text-gray-800 dark:text-white">
                                Travel Bag For Womens
                              </p>
                              <div className="flex space-x-2 rtl:space-x-reverse">
                                <h5 className="text-xs">$299</h5>
                                <span className="my-auto line-through text-xs text-gray-400 dark:text-white/70">
                                  $399
                                </span>
                              </div>
                            </div>
                          </a>
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="header-remove-btn ltr:ml-auto rtl:mr-auto flex-shrink-0 inline-flex items-center justify-center text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white"
                          >
                            <i className="ri-close-circle-line"></i>
                          </a>
                        </div>
                        <div className="ti-dropdown-item relative header-box">
                          <a
                            href="cart.html"
                            className="flex items-center space-x-3 rtl:space-x-reverse w-full"
                          >
                            <img
                              loading="lazy"
                              src="../assets/img/ecommerce/products/10.png"
                              alt="product-img"
                              className="avatar p-2 shadow-none  shrink-0 items-center justify-center rounded-sm bg-gray-100 dark:bg-black/20 !ring-transparent"
                            />
                            <div>
                              <p className="text-sm font-medium text-gray-800 dark:text-white">
                                Leather Wallet For Grils
                              </p>
                              <div className="flex space-x-2 rtl:space-x-reverse">
                                <h5 className="text-xs">$100</h5>
                                <span className="my-auto line-through text-xs text-gray-400 dark:text-white/70">
                                  $150
                                </span>
                              </div>
                            </div>
                          </a>
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="header-remove-btn ltr:ml-auto rtl:mr-auto flex-shrink-0 inline-flex items-center justify-center text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white"
                          >
                            <i className="ri-close-circle-line"></i>
                          </a>
                        </div>
                      </div>
                      <div className="py-2 first:pt-0 last:pb-0 px-5">
                        <div className="flex justify-between">
                          <div>
                            <span className="text-xs font-semibold text-gray-800 dark:text-white">
                              Total
                            </span>
                          </div>
                          <div className="text-end font-medium">
                            <span className="text-xs font-semibold text-gray-800 dark:text-white">
                              $40,020
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="py-2 first:pt-0 px-5">
                        <a
                          className="w-full ti-btn ti-btn-primary p-2"
                          href="checkout.html"
                        >
                          Proceed Checkout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="header-notification hs-dropdown ti-dropdown hidden sm:block"
                  data-hs-dropdown-placement="bottom-right"
                >
                  <button
                    id="dropdown-notification"
                    type="button"
                    className="hs-dropdown-toggle ti-dropdown-toggle p-0 border-0 flex-shrink-0 h-[2.375rem] w-[2.375rem] rounded-full shadow-none focus:ring-gray-400 text-xs dark:focus:ring-white/10"
                  >
                    <i className="ri-notification-2-line header-icon animate-bell"></i>
                    <span className="flex absolute h-5 w-5 top-0 ltr:right-0 rtl:left-0 -mt-1 ltr:-mr-1 rtl:-ml-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success/80 opacity-75"></span>
                      <span
                        className="relative inline-flex rounded-full h-5 w-5 bg-success text-white justify-center items-center"
                        id="notify-data"
                      >
                        4
                      </span>
                    </span>
                  </button>
                  <div
                    className="hs-dropdown-menu ti-dropdown-menu w-[20rem] border-0"
                    aria-labelledby="dropdown-notification"
                  >
                    <div className="ti-dropdown-header !bg-primary border-b dark:border-white/10 flex justify-between items-center">
                      <p className="ti-dropdown-header-title !text-white font-semibold">
                        Notifications
                      </p>
                      <a
                        href="javascript:void(0)"
                        className="badge bg-black/20 text-white rounded-sm"
                      >
                        Mark All Read
                      </a>
                    </div>
                    <div className="ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10">
                      <div
                        className="py-2 first:pt-0 last:pb-0"
                        id="allNotifyContainer"
                      >
                        <div className="ti-dropdown-item relative header-box">
                          <a
                            href="mail-inbox.html"
                            className="flex space-x-3 rtl:space-x-reverse"
                          >
                            <div className="ltr:mr-2 rtl:ml-2 avatar rounded-full ring-0">
                              <img
                                src="../assets/img/users/17.jpg"
                                alt="img"
                                className="rounded-sm"
                              />
                            </div>
                            <div className="relative w-full">
                              <h5 className="text-sm text-gray-800 dark:text-white font-semibold mb-1">
                                Elon Isk
                              </h5>
                              <p className="text-xs mb-1 max-w-[200px] truncate">
                                Hello there! How are you doing? Call me when...
                              </p>
                              <p className="text-xs text-gray-400 dark:text-white/70">
                                2 min
                              </p>
                            </div>
                          </a>
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="header-remove-btn ltr:ml-auto rtl:mr-auto text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white"
                          >
                            <i className="ri-close-circle-line"></i>
                          </a>
                        </div>
                        <div className="ti-dropdown-item relative header-box">
                          <a
                            href="mail-inbox.html"
                            className="flex items-center space-x-3 rtl:space-x-reverse"
                          >
                            <div className="ltr:mr-2 rtl:ml-2 avatar rounded-full ring-0">
                              <img
                                src="../assets/img/users/2.jpg"
                                alt="img"
                                className="rounded-sm"
                              />
                            </div>
                            <div className="relative w-full">
                              <h5 className="text-sm text-gray-800 dark:text-white font-semibold mb-1">
                                Shakira Sen
                              </h5>
                              <p className="text-xs mb-1 max-w-[200px] truncate">
                                I would like to discuss about that assets...
                              </p>
                              <p className="text-xs text-gray-400 dark:text-white/70">
                                09:43
                              </p>
                            </div>
                          </a>
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="header-remove-btn ltr:ml-auto rtl:mr-auto text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white"
                          >
                            <i className="ri-close-circle-line"></i>
                          </a>
                        </div>
                        <div className="ti-dropdown-item relative header-box">
                          <a
                            href="mail-inbox.html"
                            className="flex items-center space-x-3 rtl:space-x-reverse"
                          >
                            <div className="ltr:mr-2 rtl:ml-2 avatar rounded-full ring-0">
                              <img
                                src="../assets/img/users/21.jpg"
                                alt="img"
                                className="rounded-sm"
                              />
                            </div>
                            <div className="relative w-full">
                              <h5 className="text-sm text-gray-800 dark:text-white font-semibold mb-1">
                                Sebastian
                              </h5>
                              <p className="text-xs mb-1 max-w-[200px] truncate">
                                Shall we go to the cafe at downtown...
                              </p>
                              <p className="text-xs text-gray-400 dark:text-white/70">
                                yesterday
                              </p>
                            </div>
                          </a>
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="header-remove-btn ltr:ml-auto rtl:mr-auto text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white"
                          >
                            <i className="ri-close-circle-line"></i>
                          </a>
                        </div>
                        <div className="ti-dropdown-item relative header-box">
                          <a
                            href="mail-inbox.html"
                            className="flex items-center space-x-3 rtl:space-x-reverse"
                          >
                            <div className="ltr:mr-2 rtl:ml-2 avatar rounded-full ring-0">
                              <img
                                src="../assets/img/users/11.jpg"
                                alt="img"
                                className="rounded-sm"
                              />
                            </div>
                            <div className="relative w-full">
                              <h5 className="text-sm text-gray-800 dark:text-white font-semibold mb-1">
                                Charlie Davieson
                              </h5>
                              <p className="text-xs mb-1 max-w-[200px] truncate">
                                Lorem ipsum dolor sit amet, consectetur
                              </p>
                              <p className="text-xs text-gray-400 dark:text-white/70">
                                yesterday
                              </p>
                            </div>
                          </a>
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="header-remove-btn ltr:ml-auto rtl:mr-auto text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white"
                          >
                            <i className="ri-close-circle-line"></i>
                          </a>
                        </div>
                      </div>
                      <div className="py-2 first:pt-0 px-5">
                        <a
                          className="w-full ti-btn ti-btn-primary p-2"
                          href="mail-inbox.html"
                        >
                          View All
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="header-apps hs-dropdown ti-dropdown hidden md:block"
                  data-hs-dropdown-placement="bottom-right"
                >
                  <button
                    aria-label="button"
                    id="dropdown-apps"
                    type="button"
                    className="hs-dropdown-toggle ti-dropdown-toggle p-0 border-0 flex-shrink-0 h-[2.375rem] w-[2.375rem] rounded-full shadow-none focus:ring-gray-400 text-xs dark:focus:ring-white/10"
                  >
                    <i className="ri-bookmark-line header-icon"></i>
                  </button>
                  <div
                    className="hs-dropdown-menu ti-dropdown-menu w-[20rem] border-0"
                    aria-labelledby="dropdown-apps"
                  >
                    <div className="ti-dropdown-header !bg-primary border-b dark:border-white/10 flex justify-between items-center text-center">
                      <p className="ti-dropdown-header-title font-semibold !text-white">
                        Related Apps
                      </p>
                    </div>
                    <div className="ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10">
                      <div className="grid grid-cols-3 gap-0 p-4 pt-2">
                        <a
                          href="mail-inbox.html"
                          className="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20"
                        >
                          <i className="ri ri-mail-line leading-none text-2xl avatar ring-0 bg-primary/20 text-primary rounded-sm p-3 my-3 align-middle flex justify-center mx-auto"></i>
                          <div className="text-xs font-semibold text-gray-800 dark:text-white">
                            Mail Inbox
                          </div>
                        </a>
                        <a
                          href="chat.html"
                          className="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20"
                        >
                          <i className="ri ri-chat-2-line leading-none text-2xl avatar ring-0 bg-secondary/20 text-secondary rounded-sm p-3 my-3 align-middle flex justify-center mx-auto"></i>
                          <div className="text-xs font-semibold text-gray-800 dark:text-white">
                            Chat
                          </div>
                        </a>
                        <a
                          href="tasks.html"
                          className="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20"
                        >
                          <i className="ri ri-task-line leading-none text-2xl avatar ring-0 bg-warning/20 text-warning rounded-sm p-3 my-3 align-middle flex justify-center mx-auto"></i>
                          <div className="text-xs font-semibold text-gray-800 dark:text-white">
                            Task
                          </div>
                        </a>
                        <a
                          href="calendar.html"
                          className="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20"
                        >
                          <i className="ri ri-calendar-event-line leading-none text-2xl avatar ring-0 bg-danger/20 text-danger rounded-sm p-3 my-3 align-middle flex justify-center mx-auto"></i>
                          <div className="text-xs font-semibold text-gray-800 dark:text-white">
                            Calendar
                          </div>
                        </a>
                        <a
                          href="filemanager.html"
                          className="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20"
                        >
                          <i className="ri ri-file-copy-2-line leading-none text-2xl avatar ring-0 bg-info/20 text-info rounded-sm p-3 my-3 align-middle flex justify-center mx-auto"></i>
                          <div className="text-xs font-semibold text-gray-800 dark:text-white">
                            FileManager
                          </div>
                        </a>
                        <a
                          href="contacts.html"
                          className="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20"
                        >
                          <i className="ri ri-group-line leading-none text-2xl avatar ring-0 bg-success/20 text-success rounded-sm p-3 my-3 align-middle flex justify-center mx-auto"></i>
                          <div className="text-xs font-semibold text-gray-800 dark:text-white">
                            Contacts
                          </div>
                        </a>
                      </div>
                      <div className="py-2 first:pt-0 px-5">
                        <a
                          className="w-full ti-btn ti-btn-primary p-2"
                          href="javascript:void(0);"
                        >
                          View All
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="header-profile hs-dropdown ti-dropdown"
                  data-hs-dropdown-placement="bottom-right"
                >
                  <button
                    id="dropdown-profile"
                    type="button"
                    className="hs-dropdown-toggle ti-dropdown-toggle gap-2 p-0 flex-shrink-0 h-8 w-8 rounded-full shadow-none focus:ring-gray-400 text-xs dark:focus:ring-white/10"
                  >
                    <img
                      className="inline-block rounded-full ring-2 ring-white dark:ring-white/10"
                      src="../assets/img/users/1.jpg"
                      alt="Image Description"
                    />
                  </button>

                  <div
                    className="hs-dropdown-menu ti-dropdown-menu border-0 w-[20rem]"
                    aria-labelledby="dropdown-profile"
                  >
                    <div className="ti-dropdown-header !bg-primary flex">
                      <div className="ltr:mr-3 rtl:ml-3">
                        <img
                          className="avatar shadow-none rounded-full !ring-transparent"
                          src="../assets/img/users/1.jpg"
                          alt="profile-img"
                        />
                      </div>
                      <div>
                        <p className="ti-dropdown-header-title !text-white">
                          Json Taylor
                        </p>
                        <p className="ti-dropdown-header-content !text-white/50">
                          Web Designer
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 ti-dropdown-divider">
                      <a href="profile.html" className="ti-dropdown-item">
                        <i className="ti ti-user-circle text-lg"></i>
                        Profile
                      </a>
                      <a href="mail-inbox.html" className="ti-dropdown-item">
                        <i className="ti ti-inbox text-lg"></i>
                        Inbox
                      </a>
                      <a href="tasks.html" className="ti-dropdown-item">
                        <i className="ti ti-clipboard-check text-lg"></i>
                        Task Manager
                      </a>
                      <a href="profile-settings.html" className="ti-dropdown-item">
                        <i className="ti ti-adjustments-horizontal text-lg"></i>
                        Settings
                      </a>
                      <a href="index3.html" className="ti-dropdown-item">
                        <i className="ti ti-wallet text-lg"></i>
                        Bal: $7,12,950
                      </a>
                      <a href="signin.html" className="ti-dropdown-item">
                        <i className="ti ti-logout  text-lg"></i>
                        Log Out
                      </a>
                    </div>
                  </div>
                </div>
                <div className="switcher-icon">
                  <button
                    aria-label="button"
                    type="button"
                    className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-gray-100 hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus-visible:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                    data-hs-overlay="#hs-overlay-switcher"
                  >
                    <i className="ri-settings-5-line header-icon animate-spin"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default CustomNavbar;
