import React from "react";

const test = () => {
  return (
    <div>
      <div>
        <div className="page">
          <aside className="app-sidebar" id="sidebar">
            <div className="main-sidebar-header">
              <a className="header-logo" href="index.html">
                <img
                  alt="logo"
                  className="main-logo desktop-logo"
                  src="../assets/img/brand-logos/desktop-logo.png"
                />
                <img
                  alt="logo"
                  className="main-logo toggle-logo"
                  src="../assets/img/brand-logos/toggle-logo.png"
                />
                <img
                  alt="logo"
                  className="main-logo desktop-dark"
                  src="../assets/img/brand-logos/desktop-dark.png"
                />
                <img
                  alt="logo"
                  className="main-logo toggle-dark"
                  src="../assets/img/brand-logos/toggle-dark.png"
                />
              </a>
            </div>
            <div className="main-sidebar " id="sidebar-scroll">
              <nav className="main-menu-container nav nav-pills flex-column sub-open">
                <div className="slide-left" id="slide-left">
                  <svg
                    fill="#7b8191"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
                  </svg>
                </div>
                <ul className="main-menu">
                  <li className="slide__category">
                    <span className="category-name">Main</span>
                  </li>
                  <li className="slide  has-sub">
                    <a className="side-menu__item" href="javascript:void(0);">
                      <i className="ri-home-8-line side-menu__icon" />
                      <span className="side-menu__label">Dashboards</span>
                      <i className="ri ri-arrow-right-s-line side-menu__angle" />
                    </a>
                    <ul className="slide-menu child1">
                      <li className="slide side-menu__label1">
                        <a href="javascript:void(0)">Dashboards</a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="index.html">
                          Sales
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="index2.html">
                          Ecommerce
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="index3.html">
                          Crypto
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="index4.html">
                          Jobs
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="index5.html">
                          NFT
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="index6.html">
                          Analytics
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="index7.html">
                          Projects
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="index8.html">
                          HRM
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="index9.html">
                          CRM
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="index10.html">
                          Personal
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="index11.html">
                          Stocks
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="index12.html">
                          Course
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="slide">
                    <a className="side-menu__item" href="widgets.html">
                      <i className="ri-apps-2-line side-menu__icon" />
                      <span className="side-menu__label">Widgets</span>
                    </a>
                  </li>
                  <li className="slide__category">
                    <span className="category-name">General</span>
                  </li>
                  <li className="slide has-sub">
                    <a className="side-menu__item" href="javascript:void(0);">
                      <i className="ri-inbox-line side-menu__icon" />
                      <span className="side-menu__label">Components</span>
                      <i className="ri ri-arrow-right-s-line side-menu__angle" />
                    </a>
                    <ul className="slide-menu child1">
                      <li className="slide side-menu__label1">
                        <a href="javascript:void(0)">Components</a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="accordion.html">
                          Accordion
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="alerts.html">
                          Alerts
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="avatars.html">
                          Avatars
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="badges.html">
                          Badges
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="blockquotes.html">
                          Blockquotes
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="buttons.html">
                          Buttons
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="cards.html">
                          Cards
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="collapse.html">
                          Collapse
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="list-group.html">
                          ListGroup
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="list.html">
                          List
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="indicators.html">
                          Indicators
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="progress.html">
                          Progress
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="skeleton.html">
                          Skeleton
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="spinners.html">
                          Spinners
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="toast.html">
                          Toast
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="slide has-sub">
                    <a className="side-menu__item" href="javascript:void(0);">
                      <i className="ri-cpu-line side-menu__icon" />
                      <span className="side-menu__label">Elements</span>
                      <i className="ri ri-arrow-right-s-line side-menu__angle" />
                    </a>
                    <ul className="slide-menu child1">
                      <li className="slide side-menu__label1">
                        <a href="javascript:void(0)">Elements</a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="navbar.html">
                          Navbar
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="mega-menu.html">
                          MegaMenu
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="tabs.html">
                          Nav &Tabs
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="scrollspy.html">
                          Scrollspy
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="breadcrumb.html">
                          Breadcrumb
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="pagination.html">
                          Pagination
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="grid.html">
                          Grids
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="columns.html">
                          {" "}
                          Columns
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="slide has-sub">
                    <a className="side-menu__item" href="javascript:void(0);">
                      <i className="ri-file-text-line side-menu__icon" />
                      <span className="side-menu__label">Forms</span>
                      <i className="ri ri-arrow-right-s-line side-menu__angle" />
                    </a>
                    <ul className="slide-menu child1">
                      <li className="slide side-menu__label1">
                        <a href="javascript:void(0)">Forms</a>
                      </li>
                      <li className="slide">
                        <a
                          className="side-menu__item"
                          href="form-elements.html"
                        >
                          FormElements
                        </a>
                      </li>
                      <li className="slide">
                        <a
                          className="side-menu__item"
                          href="advanced-forms.html"
                        >
                          AdvancedForms
                        </a>
                      </li>
                      <li className="slide">
                        <a
                          className="side-menu__item"
                          href="form-input-group.html"
                        >
                          Form-Input-Group
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="file-upload.html">
                          File Uploads
                        </a>
                      </li>
                      <li className="slide">
                        <a
                          className="side-menu__item"
                          href="form-checkbox.html"
                        >
                          Form-Checkbox
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="form-radio.html">
                          Form-Radio
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="form-switch.html">
                          Form-Switch
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="form-select.html">
                          Form-Select
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="form-layouts.html">
                          Form-Layouts
                        </a>
                      </li>
                      <li className="slide">
                        <a
                          className="side-menu__item"
                          href="form-validations.html"
                        >
                          Form-Validations
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="quil-editor.html">
                          Form-Editor
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="slide has-sub">
                    <a className="side-menu__item" href="javascript:void(0);">
                      <i className="ri-stack-line side-menu__icon" />
                      <span className="side-menu__label">Advanced Ui</span>
                      <i className="ri ri-arrow-right-s-line side-menu__angle" />
                    </a>
                    <ul className="slide-menu child1">
                      <li className="slide side-menu__label1">
                        <a href="javascript:void(0)">Advanced Ui</a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="rangeslider.html">
                          Rangeslider
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="calendar.html">
                          Calendar
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="carousel.html">
                          Carousel
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="gallery.html">
                          Gallery
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="sweetalert.html">
                          Sweetalert
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="ratings.html">
                          Rating
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="draggable.html">
                          Draggable Cards
                        </a>
                      </li>
                      <li className="slide">
                        <a
                          className="side-menu__item"
                          href="notifications.html"
                        >
                          Notifications
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="treeview.html">
                          Treeview
                        </a>
                      </li>
                      <li className="slide has-sub">
                        <a
                          className="side-menu__item"
                          href="javascript:void(0);"
                        >
                          File Manger
                          <i className="ri ri-arrow-right-s-line side-menu__angle" />
                        </a>
                        <ul className="slide-menu child2">
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="filemanager.html"
                            >
                              File Manger
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="filemanager-list.html"
                            >
                              File Manger List
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="file-details.html"
                            >
                              File Details
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="slide has-sub">
                    <a className="side-menu__item" href="javascript:void(0);">
                      <i className="ri-file-list-3-line side-menu__icon" />
                      <span className="side-menu__label">Basic Ui</span>
                      <i className="ri ri-arrow-right-s-line side-menu__angle" />
                    </a>
                    <ul className="slide-menu child1">
                      <li className="slide side-menu__label1">
                        <a href="javascript:void(0)">Basic Ui</a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="dropdown.html">
                          Dropdown
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="modal.html">
                          Modal
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="offcanvas.html">
                          Offcanvas
                        </a>
                      </li>
                      <li className="slide">
                        <a
                          className="side-menu__item"
                          href="tooltip-popovers.html"
                        >
                          Tooltips & Popovers
                        </a>
                      </li>
                      <li className="slide has-sub">
                        <a
                          className="side-menu__item"
                          href="javascript:void(0);"
                        >
                          Tables
                          <i className="ri ri-arrow-right-s-line side-menu__angle" />
                        </a>
                        <ul className="slide-menu child2">
                          <li className="slide">
                            <a className="side-menu__item" href="tables.html">
                              BasicTables
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="datatables.html"
                            >
                              DataTables
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="edittable.html"
                            >
                              Edit Table
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="slide__category">
                    <span className="category-name">Levels</span>
                  </li>
                  <li className="slide has-sub">
                    <a className="side-menu__item" href="javascript:void(0);">
                      <i className="ri-node-tree side-menu__icon" />
                      <span className="side-menu__label">NestedMenu</span>
                      <i className="ri ri-arrow-right-s-line side-menu__angle" />
                    </a>
                    <ul className="slide-menu child1">
                      <li className="slide side-menu__label1">
                        <a href="javascript:void(0)">Nested Menu</a>
                      </li>
                      <li className="slide">
                        <a
                          className="side-menu__item"
                          href="javascript:void(0);"
                        >
                          Nested-1
                        </a>
                      </li>
                      <li className="slide has-sub">
                        <a
                          className="side-menu__item"
                          href="javascript:void(0);"
                        >
                          Nested-2
                          <i className="ri ri-arrow-right-s-line side-menu__angle" />
                        </a>
                        <ul className="slide-menu child2">
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="javascript:void(0);"
                            >
                              Nested-2-1
                            </a>
                          </li>
                          <li className="slide has-sub">
                            <a
                              className="side-menu__item"
                              href="javascript:void(0);"
                            >
                              Nested-2-2
                              <i className="ri ri-arrow-right-s-line side-menu__angle" />
                            </a>
                            <ul className="slide-menu child3">
                              <li className="slide">
                                <a
                                  className="side-menu__item"
                                  href="javascript:void(0);"
                                >
                                  Nested-2-2-1
                                </a>
                              </li>
                              <li className="slide">
                                <a
                                  className="side-menu__item"
                                  href="javascript:void(0);"
                                >
                                  Nested-2-2-2
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="slide__category">
                    <span className="category-name">Maps & charts</span>
                  </li>
                  <li className="slide has-sub">
                    <a className="side-menu__item" href="javascript:void(0);">
                      <i className="ri-map-pin-user-line side-menu__icon" />
                      <span className="side-menu__label">Maps</span>
                      <i className="ri ri-arrow-right-s-line side-menu__angle" />
                    </a>
                    <ul className="slide-menu child1">
                      <li className="slide side-menu__label1">
                        <a href="javascript:void(0)">Maps</a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="google-maps.html">
                          Google Maps
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="leaflet-maps.html">
                          Leaflet Maps
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="vector-maps.html">
                          Vector Maps
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="slide has-sub">
                    <a className="side-menu__item" href="javascript:void(0);">
                      <i className="ri-pie-chart-2-line side-menu__icon" />
                      <span className="side-menu__label">Charts</span>
                      <i className="ri ri-arrow-right-s-line side-menu__angle" />
                    </a>
                    <ul className="slide-menu child1">
                      <li className="slide side-menu__label1">
                        <a href="javascript:void(0)">Charts</a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="apex-charts.html">
                          ApexCharts
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="chartjs.html">
                          ChartJS
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="echartjs.html">
                          EchartJs
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="slide__category">
                    <span className="category-name">Pages</span>
                  </li>
                  <li className="slide has-sub">
                    <a className="side-menu__item" href="javascript:void(0);">
                      <i className="ri-book-open-line side-menu__icon" />
                      <span className="side-menu__label">Pages</span>
                      <i className="ri ri-arrow-right-s-line side-menu__angle" />
                    </a>
                    <ul className="slide-menu child1">
                      <li className="slide side-menu__label1">
                        <a href="javascript:void(0)">Pages</a>
                      </li>
                      <li className="slide has-sub">
                        <a
                          className="side-menu__item"
                          href="javascript:void(0);"
                        >
                          Profile
                          <i className="ri ri-arrow-right-s-line side-menu__angle" />
                        </a>
                        <ul className="slide-menu child2">
                          <li className="slide">
                            <a className="side-menu__item" href="profile.html">
                              Home
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="profile-settings.html"
                            >
                              Profile Settings
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="slide has-sub">
                        <a
                          className="side-menu__item"
                          href="javascript:void(0);"
                        >
                          Invoice
                          <i className="ri ri-arrow-right-s-line side-menu__angle" />
                        </a>
                        <ul className="slide-menu child2">
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="invoice-list.html"
                            >
                              Invoice List
                            </a>
                          </li>
                          <li className="slide">
                            <a className="side-menu__item" href="invoice.html">
                              Invoice Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="slide has-sub">
                        <a
                          className="side-menu__item"
                          href="javascript:void(0);"
                        >
                          Blog
                          <i className="ri ri-arrow-right-s-line side-menu__angle" />
                        </a>
                        <ul className="slide-menu child2">
                          <li className="slide">
                            <a className="side-menu__item" href="blog.html">
                              Blog
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="blog-details.html"
                            >
                              Blog Details
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="blog-edit.html"
                            >
                              Edit Blog
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="slide has-sub">
                        <a
                          className="side-menu__item"
                          href="javascript:void(0);"
                        >
                          Mail
                          <i className="ri ri-arrow-right-s-line side-menu__angle" />
                        </a>
                        <ul className="slide-menu child2">
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="mail-inbox.html"
                            >
                              Mail
                            </a>
                          </li>
                          <li className="slide">
                            <a className="side-menu__item" href="chat.html">
                              Chat
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="mail-settings.html"
                            >
                              Mail-settings
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="slide has-sub">
                        <a
                          className="side-menu__item"
                          href="javascript:void(0);"
                        >
                          Ecommerce
                          <i className="ri ri-arrow-right-s-line side-menu__angle" />
                        </a>
                        <ul className="slide-menu child2">
                          <li className="slide">
                            <a className="side-menu__item" href="products.html">
                              Products
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="product-list.html"
                            >
                              Product list
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="add-product.html"
                            >
                              Add Product
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="edit-product.html"
                            >
                              Edit Product
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="products-details.html"
                            >
                              Products-Details
                            </a>
                          </li>
                          <li className="slide">
                            <a className="side-menu__item" href="cart.html">
                              Cart
                            </a>
                          </li>
                          <li className="slide">
                            <a className="side-menu__item" href="checkout.html">
                              Checkout
                            </a>
                          </li>
                          <li className="slide">
                            <a className="side-menu__item" href="orders.html">
                              Orders
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="order-details.html"
                            >
                              Order Details
                            </a>
                          </li>
                          <li className="slide">
                            <a className="side-menu__item" href="wishlist.html">
                              Whislist
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="about.html">
                          About Us
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="contacts.html">
                          Contacts
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="pricing.html">
                          Pricing tables
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="timeline.html">
                          Timeline
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="team.html">
                          Team
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="landing.html">
                          Landing
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="todo.html">
                          Todo list
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="tasks.html">
                          Tasks
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="reviews.html">
                          Reviews
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="faqs.html">
                          Faq's
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="contactus.html">
                          Contact Us
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="terms.html">
                          Terms&conditions
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="empty.html">
                          Empty
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="slide has-sub">
                    <a className="side-menu__item" href="javascript:void(0);">
                      <i className="ri-camera-lens-line side-menu__icon" />
                      <span className="side-menu__label">Icons</span>
                      <i className="ri ri-arrow-right-s-line side-menu__angle" />
                    </a>
                    <ul className="slide-menu child1">
                      <li className="slide side-menu__label1">
                        <a href="javascript:void(0)">Icons</a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="tabler-icons.html">
                          Tabler Icons
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="remix-icons.html">
                          Remix Icons
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="slide has-sub">
                    <a className="side-menu__item" href="javascript:void(0);">
                      <i className="ri-error-warning-line side-menu__icon" />
                      <span className="side-menu__label">Authentication</span>
                      <i className="ri ri-arrow-right-s-line side-menu__angle" />
                    </a>
                    <ul className="slide-menu child1">
                      <li className="slide side-menu__label1">
                        <a href="javascript:void(0)">Authentication</a>
                      </li>
                      <li className="slide has-sub">
                        <a
                          className="side-menu__item"
                          href="javascript:void(0);"
                        >
                          Sign-In
                          <i className="ri ri-arrow-right-s-line side-menu__angle" />
                        </a>
                        <ul className="slide-menu child2">
                          <li className="slide">
                            <a className="side-menu__item" href="signin.html">
                              Basic
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="signin-cover.html"
                            >
                              Cover-1
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="signin-cover2.html"
                            >
                              Cover-2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="slide has-sub">
                        <a
                          className="side-menu__item"
                          href="javascript:void(0);"
                        >
                          Sign-Up
                          <i className="ri ri-arrow-right-s-line side-menu__angle" />
                        </a>
                        <ul className="slide-menu child2">
                          <li className="slide">
                            <a className="side-menu__item" href="signup.html">
                              Basic
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="signup-cover.html"
                            >
                              Cover-1
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="signup-cover2.html"
                            >
                              Cover-2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="slide has-sub">
                        <a
                          className="side-menu__item"
                          href="javascript:void(0);"
                        >
                          Create Password
                          <i className="ri ri-arrow-right-s-line side-menu__angle" />
                        </a>
                        <ul className="slide-menu child2">
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="createpassword.html"
                            >
                              Basic
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="createpassword-cover.html"
                            >
                              Cover-1
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="createpassword-cover2.html"
                            >
                              Cover-2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="slide has-sub">
                        <a
                          className="side-menu__item"
                          href="javascript:void(0);"
                        >
                          Forgot Password
                          <i className="ri ri-arrow-right-s-line side-menu__angle" />
                        </a>
                        <ul className="slide-menu child2">
                          <li className="slide">
                            <a className="side-menu__item" href="forgot.html">
                              Basic
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="forgot-cover.html"
                            >
                              Cover-1
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="forgot-cover2.html"
                            >
                              Cover-2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="slide has-sub">
                        <a
                          className="side-menu__item"
                          href="javascript:void(0);"
                        >
                          Reset Password
                          <i className="ri ri-arrow-right-s-line side-menu__angle" />
                        </a>
                        <ul className="slide-menu child2">
                          <li className="slide">
                            <a className="side-menu__item" href="reset.html">
                              Basic
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="reset-cover.html"
                            >
                              Cover-1
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="reset-cover2.html"
                            >
                              Cover-2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="slide has-sub">
                        <a
                          className="side-menu__item"
                          href="javascript:void(0);"
                        >
                          Lockscreen
                          <i className="ri ri-arrow-right-s-line side-menu__angle" />
                        </a>
                        <ul className="slide-menu child2">
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="lockscreen.html"
                            >
                              Basic
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="lockscreen-cover.html"
                            >
                              Cover-1
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="lockscreen-cover2.html"
                            >
                              Cover-2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="slide has-sub">
                        <a
                          className="side-menu__item"
                          href="javascript:void(0);"
                        >
                          Two-Step Verfication
                          <i className="ri ri-arrow-right-s-line side-menu__angle" />
                        </a>
                        <ul className="slide-menu child2">
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="verfication.html"
                            >
                              Basic
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="verfication-cover.html"
                            >
                              Cover-1
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              className="side-menu__item"
                              href="verfication-cover2.html"
                            >
                              Cover-2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="maintanace.html">
                          Under Maintanace
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="construction.html">
                          Under Construction
                        </a>
                      </li>
                      <li className="slide">
                        <a className="side-menu__item" href="comingsoon.html">
                          Coming Soon
                        </a>
                      </li>
                      <li className="slide has-sub">
                        <a
                          className="side-menu__item"
                          href="javascript:void(0);"
                        >
                          Error Pages
                          <i className="ri ri-arrow-right-s-line side-menu__angle" />
                        </a>
                        <ul className="slide-menu child2">
                          <li className="slide">
                            <a className="side-menu__item" href="404.html">
                              404Error
                            </a>
                          </li>
                          <li className="slide">
                            <a className="side-menu__item" href="500.html">
                              500Error
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="slide-right" id="slide-right">
                  <svg
                    fill="#7b8191"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
                  </svg>
                </div>
              </nav>
            </div>
          </aside>
          <header className="header custom-sticky !top-0 !w-full">
            <nav aria-label="Global" className="main-header">
              <div className="header-content">
                <div className="header-left">
                  <div className="">
                    <button
                      className="sidebar-toggle !w-100 !h-100"
                      type="button"
                    >
                      <span className="sr-only">Toggle Navigation</span>
                      <i className="ri-arrow-right-circle-line header-icon" />
                    </button>
                  </div>
                </div>
                <div className="responsive-logo">
                  <a
                    aria-label="Brand"
                    className="responsive-logo-dark"
                    href="index.html"
                  >
                    <img
                      alt="logo"
                      className="mx-auto"
                      src="../assets/img/brand-logos/desktop-logo.png"
                    />
                  </a>
                  <a
                    aria-label="Brand"
                    className="responsive-logo-light"
                    href="index.html"
                  >
                    <img
                      alt="logo"
                      className="mx-auto"
                      src="../assets/img/brand-logos/desktop-dark.png"
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
                          className="hs-dropdown-toggle ti-dropdown-toggle p-0 flex-shrink-0 h-[2.375rem] w-[2.375rem] border-0 rounded-full shadow-none focus:ring-gray-400 text-xs dark:focus:ring-white/10"
                          id="dropdown-flag"
                          type="button"
                        >
                          <img
                            alt="flag-img"
                            className="h-[1.375rem] w-[1.375rem]"
                            src="../assets/img/flags/10.png"
                          />
                        </button>
                        <div
                          aria-labelledby="dropdown-flag"
                          className="hs-dropdown-menu ti-dropdown-menu min-w-[10rem]"
                        >
                          <div className="ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10">
                            <div className="py-2 first:pt-0 last:pb-0">
                              <div className="ti-dropdown-item">
                                <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                                  <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                                    <img
                                      alt="flag-img"
                                      src="../assets/img/flags/10.png"
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
                                      alt="flag-img"
                                      src="../assets/img/flags/1.png"
                                    />
                                  </div>
                                  <div>
                                    <p className="text-xs font-medium">
                                      Argentina
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="ti-dropdown-item">
                                <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                                  <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                                    <img
                                      alt="flag-img"
                                      src="../assets/img/flags/2.png"
                                    />
                                  </div>
                                  <div>
                                    <p className="text-xs font-medium">
                                      Canada
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="ti-dropdown-item">
                                <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                                  <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                                    <img
                                      alt="flag-img"
                                      src="../assets/img/flags/3.png"
                                    />
                                  </div>
                                  <div>
                                    <p className="text-xs font-medium">
                                      France
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="ti-dropdown-item">
                                <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                                  <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                                    <img
                                      alt="flag-img"
                                      src="../assets/img/flags/4.png"
                                    />
                                  </div>
                                  <div>
                                    <p className="text-xs font-medium">
                                      Germany
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="ti-dropdown-item">
                                <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                                  <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                                    <img
                                      alt="flag-img"
                                      src="../assets/img/flags/5.png"
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
                          className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-gray-100 hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                          data-hs-overlay="#search-modal"
                          type="button"
                        >
                          <i className="ri-search-2-line header-icon" />
                        </button>
                      </div>
                      <div className="header-theme-mode hidden sm:block">
                        <a
                          aria-label="anchor"
                          className="hs-dark-mode-active:hidden flex hs-dark-mode group flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-gray-100 hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                          data-hs-theme-click-value="dark"
                          href="javascript:;"
                        >
                          <i className="ri-moon-line header-icon" />
                        </a>
                        <a
                          aria-label="anchor"
                          className="hs-dark-mode-active:flex hidden hs-dark-mode group flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-gray-100 hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                          data-hs-theme-click-value="light"
                          href="javascript:;"
                        >
                          <i className="ri-sun-line header-icon" />
                        </a>
                      </div>
                      <div className="header-fullscreen hidden lg:block">
                        <a
                          aria-label="anchor"
                          className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-gray-100 hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                          href="javascript:void(0);"
                          onclick="openFullscreen();"
                        >
                          <i className="ri-fullscreen-line header-icon full-screen-open" />
                          <i className="ri-fullscreen-line header-icon fullscreen-exit-line hidden" />
                        </a>
                      </div>
                      <div
                        className="header-cart hs-dropdown ti-dropdown hidden lg:block"
                        data-hs-dropdown-placement="bottom-right"
                      >
                        <button
                          className="hs-dropdown-toggle ti-dropdown-toggle p-0 border-0 flex-shrink-0 h-[2.375rem] w-[2.375rem] rounded-full shadow-none focus:ring-gray-400 text-xs dark:focus:ring-white/10"
                          id="dropdown-cart"
                          type="button"
                        >
                          <i className="ri-shopping-basket-line header-icon" />
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
                          aria-labelledby="dropdown-cart"
                          className="hs-dropdown-menu ti-dropdown-menu w-[20rem] border-0"
                        >
                          <div className="ti-dropdown-header !bg-primary border-b dark:border-white/10 flex justify-between items-center">
                            <p className="ti-dropdown-header-title !text-white font-semibold">
                              Shopping Cart
                            </p>
                            <a
                              className="badge bg-black/20 text-white rounded-sm"
                              href="javascript:void(0)"
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
                                  className="flex items-center space-x-3 rtl:space-x-reverse w-full"
                                  href="cart.html"
                                >
                                  <img
                                    alt="product-img"
                                    className="avatar p-2 shadow-none  shrink-0 items-center justify-center rounded-sm bg-gray-100 dark:bg-black/20 !ring-transparent"
                                    loading="lazy"
                                    src="../assets/img/ecommerce/products/1.png"
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
                                  className="header-remove-btn ltr:ml-auto rtl:mr-auto flex-shrink-0 inline-flex items-center justify-center text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white"
                                  href="javascript:void(0);"
                                >
                                  <i className="ri-close-circle-line" />
                                </a>
                              </div>
                              <div className="ti-dropdown-item relative header-box">
                                <a
                                  className="flex items-center space-x-3 rtl:space-x-reverse w-full"
                                  href="cart.html"
                                >
                                  <img
                                    alt="product-img"
                                    className="avatar p-2 shadow-none  shrink-0 items-center justify-center rounded-sm bg-gray-100 dark:bg-black/20 !ring-transparent"
                                    loading="lazy"
                                    src="../assets/img/ecommerce/products/2.png"
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
                                  className="header-remove-btn ltr:ml-auto rtl:mr-auto flex-shrink-0 inline-flex items-center justify-center text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white"
                                  href="javascript:void(0);"
                                >
                                  <i className="ri-close-circle-line" />
                                </a>
                              </div>
                              <div className="ti-dropdown-item relative header-box">
                                <a
                                  className="flex items-center space-x-3 rtl:space-x-reverse w-full"
                                  href="cart.html"
                                >
                                  <img
                                    alt="product-img"
                                    className="avatar p-2 shadow-none  shrink-0 items-center justify-center rounded-sm bg-gray-100 dark:bg-black/20 !ring-transparent"
                                    loading="lazy"
                                    src="../assets/img/ecommerce/products/9.png"
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
                                  className="header-remove-btn ltr:ml-auto rtl:mr-auto flex-shrink-0 inline-flex items-center justify-center text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white"
                                  href="javascript:void(0);"
                                >
                                  <i className="ri-close-circle-line" />
                                </a>
                              </div>
                              <div className="ti-dropdown-item relative header-box">
                                <a
                                  className="flex items-center space-x-3 rtl:space-x-reverse w-full"
                                  href="cart.html"
                                >
                                  <img
                                    alt="product-img"
                                    className="avatar p-2 shadow-none  shrink-0 items-center justify-center rounded-sm bg-gray-100 dark:bg-black/20 !ring-transparent"
                                    loading="lazy"
                                    src="../assets/img/ecommerce/products/10.png"
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
                                  className="header-remove-btn ltr:ml-auto rtl:mr-auto flex-shrink-0 inline-flex items-center justify-center text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white"
                                  href="javascript:void(0);"
                                >
                                  <i className="ri-close-circle-line" />
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
                          className="hs-dropdown-toggle ti-dropdown-toggle p-0 border-0 flex-shrink-0 h-[2.375rem] w-[2.375rem] rounded-full shadow-none focus:ring-gray-400 text-xs dark:focus:ring-white/10"
                          id="dropdown-notification"
                          type="button"
                        >
                          <i className="ri-notification-2-line header-icon animate-bell" />
                          <span className="flex absolute h-5 w-5 top-0 ltr:right-0 rtl:left-0 -mt-1 ltr:-mr-1 rtl:-ml-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success/80 opacity-75" />
                            <span
                              className="relative inline-flex rounded-full h-5 w-5 bg-success text-white justify-center items-center"
                              id="notify-data"
                            >
                              4
                            </span>
                          </span>
                        </button>
                        <div
                          aria-labelledby="dropdown-notification"
                          className="hs-dropdown-menu ti-dropdown-menu w-[20rem] border-0"
                        >
                          <div className="ti-dropdown-header !bg-primary border-b dark:border-white/10 flex justify-between items-center">
                            <p className="ti-dropdown-header-title !text-white font-semibold">
                              Notifications
                            </p>
                            <a
                              className="badge bg-black/20 text-white rounded-sm"
                              href="javascript:void(0)"
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
                                  className="flex space-x-3 rtl:space-x-reverse"
                                  href="mail-inbox.html"
                                >
                                  <div className="ltr:mr-2 rtl:ml-2 avatar rounded-full ring-0">
                                    <img
                                      alt="img"
                                      className="rounded-sm"
                                      src="../assets/img/users/17.jpg"
                                    />
                                  </div>
                                  <div className="relative w-full">
                                    <h5 className="text-sm text-gray-800 dark:text-white font-semibold mb-1">
                                      Elon Isk
                                    </h5>
                                    <p className="text-xs mb-1 max-w-[200px] truncate">
                                      Hello there! How are you doing? Call me
                                      when...
                                    </p>
                                    <p className="text-xs text-gray-400 dark:text-white/70">
                                      2 min
                                    </p>
                                  </div>
                                </a>
                                <a
                                  aria-label="anchor"
                                  className="header-remove-btn ltr:ml-auto rtl:mr-auto text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white"
                                  href="javascript:void(0);"
                                >
                                  <i className="ri-close-circle-line" />
                                </a>
                              </div>
                              <div className="ti-dropdown-item relative header-box">
                                <a
                                  className="flex items-center space-x-3 rtl:space-x-reverse"
                                  href="mail-inbox.html"
                                >
                                  <div className="ltr:mr-2 rtl:ml-2 avatar rounded-full ring-0">
                                    <img
                                      alt="img"
                                      className="rounded-sm"
                                      src="../assets/img/users/2.jpg"
                                    />
                                  </div>
                                  <div className="relative w-full">
                                    <h5 className="text-sm text-gray-800 dark:text-white font-semibold mb-1">
                                      Shakira Sen
                                    </h5>
                                    <p className="text-xs mb-1 max-w-[200px] truncate">
                                      I would like to discuss about that
                                      assets...
                                    </p>
                                    <p className="text-xs text-gray-400 dark:text-white/70">
                                      09:43
                                    </p>
                                  </div>
                                </a>
                                <a
                                  aria-label="anchor"
                                  className="header-remove-btn ltr:ml-auto rtl:mr-auto text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white"
                                  href="javascript:void(0);"
                                >
                                  <i className="ri-close-circle-line" />
                                </a>
                              </div>
                              <div className="ti-dropdown-item relative header-box">
                                <a
                                  className="flex items-center space-x-3 rtl:space-x-reverse"
                                  href="mail-inbox.html"
                                >
                                  <div className="ltr:mr-2 rtl:ml-2 avatar rounded-full ring-0">
                                    <img
                                      alt="img"
                                      className="rounded-sm"
                                      src="../assets/img/users/21.jpg"
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
                                  className="header-remove-btn ltr:ml-auto rtl:mr-auto text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white"
                                  href="javascript:void(0);"
                                >
                                  <i className="ri-close-circle-line" />
                                </a>
                              </div>
                              <div className="ti-dropdown-item relative header-box">
                                <a
                                  className="flex items-center space-x-3 rtl:space-x-reverse"
                                  href="mail-inbox.html"
                                >
                                  <div className="ltr:mr-2 rtl:ml-2 avatar rounded-full ring-0">
                                    <img
                                      alt="img"
                                      className="rounded-sm"
                                      src="../assets/img/users/11.jpg"
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
                                  className="header-remove-btn ltr:ml-auto rtl:mr-auto text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white"
                                  href="javascript:void(0);"
                                >
                                  <i className="ri-close-circle-line" />
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
                          className="hs-dropdown-toggle ti-dropdown-toggle p-0 border-0 flex-shrink-0 h-[2.375rem] w-[2.375rem] rounded-full shadow-none focus:ring-gray-400 text-xs dark:focus:ring-white/10"
                          id="dropdown-apps"
                          type="button"
                        >
                          <i className="ri-bookmark-line header-icon" />
                        </button>
                        <div
                          aria-labelledby="dropdown-apps"
                          className="hs-dropdown-menu ti-dropdown-menu w-[20rem] border-0"
                        >
                          <div className="ti-dropdown-header !bg-primary border-b dark:border-white/10 flex justify-between items-center text-center">
                            <p className="ti-dropdown-header-title font-semibold !text-white">
                              Related Apps
                            </p>
                          </div>
                          <div className="ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10">
                            <div className="grid grid-cols-3 gap-0 p-4 pt-2">
                              <a
                                className="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20"
                                href="mail-inbox.html"
                              >
                                <i className="ri ri-mail-line leading-none text-2xl avatar ring-0 bg-primary/20 text-primary rounded-sm p-3 my-3 align-middle flex justify-center mx-auto" />
                                <div className="text-xs font-semibold text-gray-800 dark:text-white">
                                  Mail Inbox
                                </div>
                              </a>
                              <a
                                className="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20"
                                href="chat.html"
                              >
                                <i className="ri ri-chat-2-line leading-none text-2xl avatar ring-0 bg-secondary/20 text-secondary rounded-sm p-3 my-3 align-middle flex justify-center mx-auto" />
                                <div className="text-xs font-semibold text-gray-800 dark:text-white">
                                  Chat
                                </div>
                              </a>
                              <a
                                className="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20"
                                href="tasks.html"
                              >
                                <i className="ri ri-task-line leading-none text-2xl avatar ring-0 bg-warning/20 text-warning rounded-sm p-3 my-3 align-middle flex justify-center mx-auto" />
                                <div className="text-xs font-semibold text-gray-800 dark:text-white">
                                  Task
                                </div>
                              </a>
                              <a
                                className="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20"
                                href="calendar.html"
                              >
                                <i className="ri ri-calendar-event-line leading-none text-2xl avatar ring-0 bg-danger/20 text-danger rounded-sm p-3 my-3 align-middle flex justify-center mx-auto" />
                                <div className="text-xs font-semibold text-gray-800 dark:text-white">
                                  Calendar
                                </div>
                              </a>
                              <a
                                className="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20"
                                href="filemanager.html"
                              >
                                <i className="ri ri-file-copy-2-line leading-none text-2xl avatar ring-0 bg-info/20 text-info rounded-sm p-3 my-3 align-middle flex justify-center mx-auto" />
                                <div className="text-xs font-semibold text-gray-800 dark:text-white">
                                  FileManager
                                </div>
                              </a>
                              <a
                                className="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20"
                                href="contacts.html"
                              >
                                <i className="ri ri-group-line leading-none text-2xl avatar ring-0 bg-success/20 text-success rounded-sm p-3 my-3 align-middle flex justify-center mx-auto" />
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
                          className="hs-dropdown-toggle ti-dropdown-toggle gap-2 p-0 flex-shrink-0 h-8 w-8 rounded-full shadow-none focus:ring-gray-400 text-xs dark:focus:ring-white/10"
                          id="dropdown-profile"
                          type="button"
                        >
                          <img
                            alt="Image Description"
                            className="inline-block rounded-full ring-2 ring-white dark:ring-white/10"
                            src="../assets/img/users/1.jpg"
                          />
                        </button>
                        <div
                          aria-labelledby="dropdown-profile"
                          className="hs-dropdown-menu ti-dropdown-menu border-0 w-[20rem]"
                        >
                          <div className="ti-dropdown-header !bg-primary flex">
                            <div className="ltr:mr-3 rtl:ml-3">
                              <img
                                alt="profile-img"
                                className="avatar shadow-none rounded-full !ring-transparent"
                                src="../assets/img/users/1.jpg"
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
                            <a className="ti-dropdown-item" href="profile.html">
                              <i className="ti ti-user-circle text-lg" />
                              Profile
                            </a>
                            <a
                              className="ti-dropdown-item"
                              href="mail-inbox.html"
                            >
                              <i className="ti ti-inbox text-lg" />
                              Inbox
                            </a>
                            <a className="ti-dropdown-item" href="tasks.html">
                              <i className="ti ti-clipboard-check text-lg" />
                              Task Manager
                            </a>
                            <a
                              className="ti-dropdown-item"
                              href="profile-settings.html"
                            >
                              <i className="ti ti-adjustments-horizontal text-lg" />
                              Settings
                            </a>
                            <a className="ti-dropdown-item" href="index3.html">
                              <i className="ti ti-wallet text-lg" />
                              Bal: $7,12,950
                            </a>
                            <a className="ti-dropdown-item" href="signin.html">
                              <i className="ti ti-logout  text-lg" />
                              Log Out
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="switcher-icon">
                        <button
                          aria-label="button"
                          className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-gray-100 hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus-visible:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                          data-hs-overlay="#hs-overlay-switcher"
                          type="button"
                        >
                          <i className="ri-settings-5-line header-icon animate-spin" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <div className="content">
            <div className="main-content">
              <div className="block justify-between page-header md:flex">
                <div>
                  <h3 className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-white text-2xl font-medium">
                    {" "}
                    Dashboard
                  </h3>
                </div>
                <ol className="flex items-center whitespace-nowrap min-w-0">
                  <li className="text-sm">
                    <a
                      className="flex items-center font-semibold text-primary hover:text-primary dark:text-primary truncate"
                      href="javascript:void(0);"
                    >
                      Home
                      <i className="ti ti-chevrons-right flex-shrink-0 mx-3 overflow-visible text-gray-300 dark:text-gray-300 rtl:rotate-180" />
                    </a>
                  </li>
                  <li
                    aria-current="page"
                    className="text-sm text-gray-500 hover:text-primary dark:text-white/70 "
                  >
                    Dashboard
                  </li>
                </ol>
              </div>
              <div className="grid grid-cols-12 gap-x-5">
                <div className="col-span-12 md:col-span-6 xxl:col-span-3">
                  <div className="box overflow-hidden">
                    <div className="box-body">
                      <div className="flex">
                        <div className="flex space-x-3 rtl:space-x-reverse">
                          <div className="avatar p-2 rounded-sm bg-primary/10">
                            <svg
                              className="fill-primary"
                              enableBackground="new 0 0 24 24"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                className="fill-primary"
                                d="M9,10h2.5c0.276123,0,0.5-0.223877,0.5-0.5S11.776123,9,11.5,9H10V8c0-0.276123-0.223877-0.5-0.5-0.5S9,7.723877,9,8v1c-1.1045532,0-2,0.8954468-2,2s0.8954468,2,2,2h1c0.5523071,0,1,0.4476929,1,1s-0.4476929,1-1,1H7.5C7.223877,15,7,15.223877,7,15.5S7.223877,16,7.5,16H9v1.0005493C9.0001831,17.2765503,9.223999,17.5001831,9.5,17.5h0.0006104C9.7765503,17.4998169,10.0001831,17.276001,10,17v-1c1.1045532,0,2-0.8954468,2-2s-0.8954468-2-2-2H9c-0.5523071,0-1-0.4476929-1-1S8.4476929,10,9,10z M21.5,12H17V2.5c0.000061-0.0875244-0.0228882-0.1735229-0.0665283-0.2493896c-0.1375732-0.2393188-0.4431152-0.3217773-0.6824951-0.1842041l-3.2460327,1.8603516L9.7481079,2.0654297c-0.1536865-0.0878906-0.3424072-0.0878906-0.4960938,0l-3.256897,1.8613281L2.7490234,2.0664062C2.6731567,2.0227661,2.5871582,1.9998779,2.4996338,1.9998779C2.2235718,2.000061,1.9998779,2.223938,2,2.5v17c0.0012817,1.380188,1.119812,2.4987183,2.5,2.5H19c1.6561279-0.0018311,2.9981689-1.3438721,3-3v-6.5006104C21.9998169,12.2234497,21.776001,11.9998169,21.5,12z M4.5,21c-0.828064-0.0009155-1.4990845-0.671936-1.5-1.5V3.3623047l2.7412109,1.5712891c0.1575928,0.0872192,0.348877,0.0875854,0.5068359,0.0009766L9.5,3.0761719l3.2519531,1.8583984c0.157959,0.0866089,0.3492432,0.0862427,0.5068359-0.0009766L16,3.3623047V19c0.0008545,0.7719116,0.3010864,1.4684448,0.7803345,2H4.5z M21,19c0,1.1045532-0.8954468,2-2,2s-2-0.8954468-2-2v-6h4V19z"
                              ></path>
                            </svg>
                          </div>
                          <h6 className="text-lg font-medium text-gray-800 mb-2 dark:text-white my-auto">
                            Total Revenue
                          </h6>
                        </div>
                        <span className="badge bg-primary/10 text-primary py-1 ltr:ml-auto rtl:mr-auto !my-auto">
                          <i className="ti ti-trending-up" /> 20%
                        </span>
                      </div>
                      <div className="mt-2">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                          $26,35,262
                        </h2>
                        <p className="text-xs text-gray-400 ">in last week</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 xxl:col-span-3">
                  <div className="box overflow-hidden">
                    <div className="box-body">
                      <div className="flex">
                        <div className="flex space-x-3 rtl:space-x-reverse">
                          <div className="avatar p-2 rounded-sm bg-secondary/10">
                            <svg
                              className="fill-secondary"
                              enableBackground="new 0 0 24 24"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                className="fill-secondary"
                                d="M9.5,7h7C16.776123,7,17,6.776123,17,6.5S16.776123,6,16.5,6h-7C9.223877,6,9,6.223877,9,6.5S9.223877,7,9.5,7z M7.5,11h9c0.276123,0,0.5-0.223877,0.5-0.5S16.776123,10,16.5,10h-9C7.223877,10,7,10.223877,7,10.5S7.223877,11,7.5,11z M20.5,2H3.4993896C3.2234497,2.0001831,2.9998169,2.223999,3,2.5v19c-0.000061,0.1124268,0.0378418,0.2216187,0.1074829,0.3098755c0.1710205,0.2167358,0.4853516,0.2537231,0.7020874,0.0827026l2.8652344-2.2617188l2.3583984,1.7695312c0.1777954,0.1328125,0.421814,0.1328125,0.5996094,0L12,19.625l2.3671875,1.7753906c0.1777954,0.1328125,0.421814,0.1328125,0.5996094,0l2.3583984-1.7695312l2.8652344,2.2617188C20.2785034,21.9623413,20.3876343,22.0002441,20.5,22h0.0006104C20.7766113,21.9998169,21.0001831,21.7759399,21,21.5V2.4993896C20.9998169,2.2234497,20.776001,1.9998169,20.5,2z M20,20.46875l-2.3574219-1.8613281c-0.0882568-0.069519-0.1972656-0.1072998-0.3095703-0.1074219c-0.1080933-0.000061-0.2132568,0.0349121-0.2998047,0.0996094L14.6669922,20.375l-2.3671875-1.7753906c-0.1777954-0.1328125-0.421814-0.1328125-0.5996094,0L9.3330078,20.375l-2.3662109-1.7753906c-0.1817017-0.1348877-0.4311523-0.1317139-0.609375,0.0078125L4,20.46875V3h16V20.46875z M7.5,15h9c0.276123,0,0.5-0.223877,0.5-0.5S16.776123,14,16.5,14h-9C7.223877,14,7,14.223877,7,14.5S7.223877,15,7.5,15z"
                              ></path>
                            </svg>
                          </div>
                          <h6 className="text-lg font-medium text-gray-800 mb-2 dark:text-white my-auto">
                            Total Sales
                          </h6>
                        </div>
                        <span className="badge bg-secondary/10 text-secondary py-1 ltr:ml-auto rtl:mr-auto !my-auto">
                          <i className="ti ti-trending-up" /> 1.8%
                        </span>
                      </div>
                      <div className="mt-2">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                          $56,35,262
                        </h2>
                        <p className="text-xs text-gray-400 ">in last week</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 xxl:col-span-3">
                  <div className="box overflow-hidden">
                    <div className="box-body">
                      <div className="flex">
                        <div className="flex space-x-3 rtl:space-x-reverse">
                          <div className="avatar p-2 rounded-sm bg-warning/10">
                            <svg
                              className="fill-warning"
                              enableBackground="new 0 0 24 24"
                              id="shopping-bag"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                className="fill-warning"
                                d="M19.5,7H16V5.9169922c0-2.2091064-1.7908325-4-4-4s-4,1.7908936-4,4V7H4.5C4.4998169,7,4.4996338,7,4.4993896,7C4.2234497,7.0001831,3.9998169,7.223999,4,7.5V19c0.0018311,1.6561279,1.3438721,2.9981689,3,3h10c1.6561279-0.0018311,2.9981689-1.3438721,3-3V7.5c0-0.0001831,0-0.0003662,0-0.0006104C19.9998169,7.2234497,19.776001,6.9998169,19.5,7z M9,5.9169922c0-1.6568604,1.3431396-3,3-3s3,1.3431396,3,3V7H9V5.9169922z M19,19c-0.0014038,1.1040039-0.8959961,1.9985962-2,2H7c-1.1040039-0.0014038-1.9985962-0.8959961-2-2V8h3v2.5C8,10.776123,8.223877,11,8.5,11S9,10.776123,9,10.5V8h6v2.5c0,0.0001831,0,0.0003662,0,0.0005493C15.0001831,10.7765503,15.223999,11.0001831,15.5,11c0.0001831,0,0.0003662,0,0.0006104,0C15.7765503,10.9998169,16.0001831,10.776001,16,10.5V8h3V19z"
                                fill="#4B5563"
                              ></path>
                            </svg>
                          </div>
                          <h6 className="text-lg font-medium text-gray-800 mb-2 dark:text-white my-auto">
                            Total Products
                          </h6>
                        </div>
                        <span className="badge bg-warning/10 text-warning py-1 ltr:ml-auto rtl:mr-auto !my-auto">
                          <i className="ti ti-trending-down" /> 1.8%
                        </span>
                      </div>
                      <div className="mt-2">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                          $4,262
                        </h2>
                        <p className="text-xs text-gray-400 ">in last week</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 xxl:col-span-3">
                  <div className="box overflow-hidden">
                    <div className="box-body">
                      <div className="flex">
                        <div className="flex space-x-3 rtl:space-x-reverse">
                          <div className="avatar p-2 rounded-sm bg-success/10">
                            <svg
                              className="fill-success"
                              enableBackground="new 0 0 24 24"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                className="fill-success"
                                d="M10.75,8H12h0.0006104H15.5C15.776123,8,16,7.776123,16,7.5S15.776123,7,15.5,7h-3V5.5C12.5,5.223877,12.276123,5,12,5s-0.5,0.223877-0.5,0.5V7h-0.75C9.2312012,7,8,8.2312012,8,9.75s1.2312012,2.75,2.75,2.75h2.5c0.9664917,0,1.75,0.7835083,1.75,1.75S14.2164917,16,13.25,16H8.5C8.223877,16,8,16.223877,8,16.5S8.223877,17,8.5,17h3v1.5c0,0.0001831,0,0.0003662,0,0.0005493C11.5001831,18.7765503,11.723999,19.0001831,12,19c0.0001831,0,0.0003662,0,0.0006104,0c0.2759399-0.0001831,0.4995728-0.223999,0.4993896-0.5V17h0.75c1.5187988,0,2.75-1.2312012,2.75-2.75s-1.2312012-2.75-2.75-2.75h-2.5C9.7835083,11.5,9,10.7164917,9,9.75S9.7835083,8,10.75,8z M12,1C5.9248657,1,1,5.9248657,1,12s4.9248657,11,11,11c6.0722656-0.0068359,10.9931641-4.9277344,11-11C23,5.9248657,18.0751343,1,12,1z M12,22C6.4771729,22,2,17.5228271,2,12S6.4771729,2,12,2c5.5201416,0.0064697,9.9935303,4.4798584,10,10C22,17.5228271,17.5228271,22,12,22z"
                              ></path>
                            </svg>
                          </div>
                          <h6 className="text-lg font-medium text-gray-800 mb-2 dark:text-white my-auto">
                            Total Expenses
                          </h6>
                        </div>
                        <span className="badge bg-success/10 text-success py-1 ltr:ml-auto rtl:mr-auto !my-auto">
                          <i className="ti ti-trending-up" /> 1.2%
                        </span>
                      </div>
                      <div className="mt-2">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                          $35,262
                        </h2>
                        <p className="text-xs text-gray-400 ">in last week</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-x-5">
                <div className="col-span-12 lg:col-span-12 xxl:col-span-6">
                  <div className="box">
                    <div className="box-header">
                      <div className="flex">
                        <h5 className="box-title my-auto">Sales Over View</h5>
                        <div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
                          <button
                            aria-label="button"
                            className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                            type="button"
                          >
                            <i className="text-sm leading-none ti ti-dots-vertical" />{" "}
                          </button>
                          <div className="hs-dropdown-menu ti-dropdown-menu">
                            <a
                              className="ti-dropdown-item"
                              href="javascript:void(0)"
                            >
                              Download
                            </a>
                            <a
                              className="ti-dropdown-item"
                              href="javascript:void(0)"
                            >
                              Import
                            </a>
                            <a
                              className="ti-dropdown-item"
                              href="javascript:void(0)"
                            >
                              Export
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-body">
                      <ul className="flex flex-wrap sm:space-x-6 sm:rtl:space-x-reverse">
                        <li>
                          <p className="inline-flex items-center">
                            <span className="block w-3 h-3 rounded-full ltr:mr-2 rtl:ml-2 border-4 border-primary pointer-events-none" />
                            <span className="flex items-center">
                              <span className="text-2xl text-gray-800 dark:text-white font-semibold ltr:mr-2 rtl:ml-2 pointer-events-none">
                                $9.65K
                              </span>
                              <span className="text-sm text-gray-400 dark:text-white/80">
                                / Income
                              </span>
                            </span>
                          </p>
                        </li>
                        <li>
                          <p className="inline-flex items-center">
                            <span className="block w-3 h-3 rounded-full ltr:mr-2 rtl:ml-2 border-4 border-gray-200 pointer-events-none" />
                            <span className="flex items-center">
                              <span className="text-2xl text-gray-800 dark:text-white font-semibold ltr:mr-2 rtl:ml-2 pointer-events-none">
                                $3.75K
                              </span>
                              <span className="text-sm text-gray-400 dark:text-white/80">
                                / Expenses
                              </span>
                            </span>
                          </p>
                        </li>
                      </ul>
                      <div id="salesOverview" />
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                  <div className="box">
                    <div className="box-header">
                      <div className="flex">
                        <h5 className="box-title my-auto">Top Customers</h5>
                        <div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
                          <button
                            aria-label="button"
                            className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                            type="button"
                          >
                            <i className="text-sm leading-none ti ti-dots-vertical" />{" "}
                          </button>
                          <div className="hs-dropdown-menu ti-dropdown-menu">
                            <a
                              className="ti-dropdown-item"
                              href="javascript:void(0)"
                            >
                              Download
                            </a>
                            <a
                              className="ti-dropdown-item"
                              href="javascript:void(0)"
                            >
                              Import
                            </a>
                            <a
                              className="ti-dropdown-item"
                              href="javascript:void(0)"
                            >
                              Export
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-body">
                      <ul className="flex flex-col">
                        <li className="px-0 pt-0 ti-list-group border-0 text-gray-800 dark:text-white">
                          <a
                            className="flex  justify-between items-center w-full"
                            href="javascript:void(0);"
                          >
                            <div className="flex space-x-3 rtl:space-x-reverse w-full">
                              <img
                                alt="Image Description"
                                className="avatar avatar-sm rounded-sm"
                                src="../assets/img/users/2.jpg"
                              />
                              <div className="flex w-full">
                                <div className="block my-auto">
                                  <p className="block text-sm font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200">
                                    Socrates Itumay
                                  </p>
                                  <p className="text-xs text-gray-400 dark:text-white/80 truncate sm:max-w-max max-w-[100px] font-normal">
                                    15 Purchases
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="">
                              <span className="text-sm font-medium">
                                $1,835
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="px-0 pt-3 ti-list-group border-0 text-gray-800 dark:text-white">
                          <a
                            className="flex  justify-between items-center w-full"
                            href="javascript:void(0);"
                          >
                            <div className="flex space-x-3 rtl:space-x-reverse w-full">
                              <img
                                alt="Image Description"
                                className="avatar avatar-sm rounded-sm"
                                src="../assets/img/users/3.jpg"
                              />
                              <div className="flex w-full">
                                <div className="block my-auto">
                                  <p className="block text-sm font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200">
                                    Json Taylor
                                  </p>
                                  <p className="text-xs text-gray-400 dark:text-white/80 truncate sm:max-w-max max-w-[100px] font-normal">
                                    18 Purchases
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="">
                              <span className="text-sm font-medium">
                                $2,415
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="px-0 pt-3 ti-list-group border-0 text-gray-800 dark:text-white">
                          <a
                            className="flex  justify-between items-center w-full"
                            href="javascript:void(0);"
                          >
                            <div className="flex space-x-3 rtl:space-x-reverse w-full">
                              <img
                                alt="Image Description"
                                className="avatar avatar-sm rounded-sm"
                                src="../assets/img/users/4.jpg"
                              />
                              <div className="flex w-full">
                                <div className="block my-auto">
                                  <p className="block text-sm font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200">
                                    Suzika Stallone
                                  </p>
                                  <p className="text-xs text-gray-400 dark:text-white/80 truncate sm:max-w-max max-w-[100px] font-normal">
                                    21 Purchases
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="">
                              <span className="text-sm font-medium">
                                $2,341
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="px-0 pt-3 ti-list-group border-0 text-gray-800 dark:text-white">
                          <a
                            className="flex  justify-between items-center w-full"
                            href="javascript:void(0);"
                          >
                            <div className="flex space-x-3 rtl:space-x-reverse w-full">
                              <img
                                alt="Image Description"
                                className="avatar avatar-sm rounded-sm"
                                src="../assets/img/users/5.jpg"
                              />
                              <div className="flex w-full">
                                <div className="block my-auto">
                                  <p className="block text-sm font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200">
                                    Angelina Hose
                                  </p>
                                  <p className="text-xs text-gray-400 dark:text-white/80 truncate sm:max-w-max max-w-[100px] font-normal">
                                    24 Purchases
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="">
                              <span className="text-sm font-medium">2,624</span>
                            </div>
                          </a>
                        </li>
                        <li className="px-0 pt-3 ti-list-group border-0 text-gray-800 dark:text-white">
                          <a
                            className="flex  justify-between items-center w-full"
                            href="javascript:void(0);"
                          >
                            <div className="flex space-x-3 rtl:space-x-reverse w-full">
                              <img
                                alt="Image Description"
                                className="avatar avatar-sm rounded-sm"
                                src="../assets/img/users/6.jpg"
                              />
                              <div className="flex w-full">
                                <div className="block my-auto">
                                  <p className="block text-sm font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200">
                                    Selena Deoyl
                                  </p>
                                  <p className="text-xs text-gray-400 dark:text-white/80 truncate sm:max-w-max max-w-[100px] font-normal">
                                    12 Purchases
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="">
                              <span className="text-sm font-medium">
                                $1,035
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="px-0 pt-3 pb-0 ti-list-group border-0 text-gray-800 dark:text-white">
                          <a
                            className="flex  justify-between items-center w-full"
                            href="javascript:void(0);"
                          >
                            <div className="flex space-x-3 rtl:space-x-reverse w-full">
                              <img
                                alt="Image Description"
                                className="avatar avatar-sm rounded-sm"
                                src="../assets/img/users/10.jpg"
                              />
                              <div className="flex w-full">
                                <div className="block my-auto">
                                  <p className="block text-sm font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200">
                                    Charlie Davieson
                                  </p>
                                  <p className="text-xs text-gray-400 dark:text-white/80 truncate sm:max-w-max max-w-[100px] font-normal">
                                    15 Purchases
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="">
                              <span className="text-sm font-medium">
                                $1,835
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                  <div className="box">
                    <div className="box-header">
                      <div className="flex">
                        <h5 className="box-title my-auto">Sale Value</h5>
                        <div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
                          <button
                            aria-label="button"
                            className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                            type="button"
                          >
                            <i className="text-sm leading-none ti ti-dots-vertical" />{" "}
                          </button>
                          <div className="hs-dropdown-menu ti-dropdown-menu">
                            <a
                              className="ti-dropdown-item"
                              href="javascript:void(0)"
                            >
                              Download
                            </a>
                            <a
                              className="ti-dropdown-item"
                              href="javascript:void(0)"
                            >
                              Import
                            </a>
                            <a
                              className="ti-dropdown-item"
                              href="javascript:void(0)"
                            >
                              Export
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-body pb-0 px-0">
                      <div className="sales-value relative border-b border-gray-200 dark:border-white/10 pb-6">
                        <canvas
                          className="!h-[230px] !w-full mx-auto my-auto"
                          id="sales-donut"
                        />
                        <div className="chart-circle-value circle-style absolute border-2 border-dashed border-primary -top-5 inset-0 flex justify-center items-center w-[150px] h-[150px] leading-[70px] rounded-full text-5xl mx-auto my-auto">
                          <div className="text-xl font-bold">75%</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="p-5 ltr:border-r rtl:border-l border-gray-200 dark:border-white/10">
                          <div className="text-sm text-gray-500 dark:text-white/80 text-center font-medium">
                            Sale Items
                          </div>
                          <div className="text-center">
                            <p className="text-gray-800 dark:text-white text-2xl font-medium">
                              567
                            </p>
                            <span className="text-success font-semibold">
                              <i className="ri-arrow-up-s-fill align-middle" />
                              0.23%
                            </span>
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="text-sm text-gray-500 dark:text-white/80 text-center font-medium">
                            Sale Revenue
                          </div>
                          <div className="text-center">
                            <p className="text-gray-800 dark:text-white text-2xl font-medium">
                              $11,197
                            </p>
                            <span className="text-danger font-semibold">
                              <i className="ri-arrow-down-s-fill align-middle" />
                              0.15%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-x-5">
                <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                  <div className="box">
                    <div className="box-header">
                      <div className="flex">
                        <h5 className="box-title my-auto">Upcoming Products</h5>
                        <div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
                          <button
                            aria-label="button"
                            className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                            type="button"
                          >
                            <i className="text-sm leading-none ti ti-dots-vertical" />{" "}
                          </button>
                          <div className="hs-dropdown-menu ti-dropdown-menu">
                            <a
                              className="ti-dropdown-item"
                              href="javascript:void(0)"
                            >
                              Download
                            </a>
                            <a
                              className="ti-dropdown-item"
                              href="javascript:void(0)"
                            >
                              Import
                            </a>
                            <a
                              className="ti-dropdown-item"
                              href="javascript:void(0)"
                            >
                              Export
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-body">
                      <ul className="flex flex-col">
                        <li className="p-0 mb-6 ti-list-group border-0 text-gray-800 dark:text-white">
                          <a className="w-full" href="javascript:void(0);">
                            <div className="flex items-center">
                              <div className="leading-none">
                                <img
                                  alt="image"
                                  className="avatar avatar-sm rounded-full"
                                  src="../assets/img/ecommerce/jpg/1.jpg"
                                />
                              </div>
                              <div className="flex-auto ltr:ml-2 rtl:mr-2">
                                <p className="text-sm font-semibold mb-0">
                                  Smart Phone
                                </p>
                                <p className="text-xs text-gray-400 dark:text-white/80 mb-0 !font-normal">
                                  Mobiles
                                </p>
                              </div>
                              <div className="block text-end">
                                <span className="text-sm text-success font-semibold">
                                  $199.99
                                </span>
                                <p className="text-xs text-gray-400 dark:text-white/80 !font-normal">
                                  <i className="ti ti-clock-hour-2 ltr:mr-1 rtl:mr-1" />
                                  01 Apr, 2023
                                </p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="p-0 mb-6 ti-list-group border-0 text-gray-800 dark:text-white">
                          <a className="w-full" href="javascript:void(0);">
                            <div className="flex items-center">
                              <div className="leading-none">
                                <img
                                  alt="image"
                                  className="avatar avatar-sm rounded-full"
                                  src="../assets/img/ecommerce/jpg/2.jpg"
                                />
                              </div>
                              <div className="flex-auto ltr:ml-2 rtl:mr-2">
                                <p className="text-sm font-semibold mb-0">
                                  White Headphones
                                </p>
                                <p className="text-xs text-gray-400 dark:text-white/80 mb-0 !font-normal">
                                  Music
                                </p>
                              </div>
                              <div className="block text-end">
                                <span className="text-sm text-success font-semibold">
                                  $79.49
                                </span>
                                <p className="text-xs text-gray-400 dark:text-white/80 !font-normal">
                                  <i className="ti ti-clock-hour-2 ltr:mr-1 rtl:mr-1" />
                                  01 Apr, 2023
                                </p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="p-0 mb-6 ti-list-group border-0 text-gray-800 dark:text-white">
                          <a className="w-full" href="javascript:void(0);">
                            <div className="flex items-center">
                              <div className="leading-none">
                                <img
                                  alt="image"
                                  className="avatar avatar-sm rounded-full"
                                  src="../assets/img/ecommerce/jpg/3.jpg"
                                />
                              </div>
                              <div className="flex-auto ltr:ml-2 rtl:mr-2">
                                <p className="text-sm font-semibold mb-0">
                                  Stop Watch
                                </p>
                                <p className="text-xs text-gray-400 dark:text-white/80 mb-0 !font-normal">
                                  Electronics
                                </p>
                              </div>
                              <div className="block text-end">
                                <span className="text-sm text-success font-semibold">
                                  $49.29
                                </span>
                                <p className="text-xs text-gray-400 dark:text-white/80 !font-normal">
                                  <i className="ti ti-clock-hour-2 ltr:mr-1 rtl:mr-1" />
                                  01 Apr, 2023
                                </p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="p-0 mb-6 ti-list-group border-0 text-gray-800 dark:text-white">
                          <a className="w-full" href="javascript:void(0);">
                            <div className="flex items-center">
                              <div className="leading-none">
                                <img
                                  alt="image"
                                  className="avatar avatar-sm rounded-full"
                                  src="../assets/img/ecommerce/jpg/4.jpg"
                                />
                              </div>
                              <div className="flex-auto ltr:ml-2 rtl:mr-2">
                                <p className="text-sm font-semibold mb-0">
                                  Kikon Camera
                                </p>
                                <p className="text-xs text-gray-400 dark:text-white/80 mb-0 !font-normal">
                                  Electronics
                                </p>
                              </div>
                              <div className="block text-end">
                                <span className="text-sm text-success font-semibold">
                                  $1,699.00
                                </span>
                                <p className="text-xs text-gray-400 dark:text-white/80 !font-normal">
                                  <i className="ti ti-clock-hour-2 ltr:mr-1 rtl:mr-1" />
                                  01 Apr, 2023
                                </p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="p-0 mb-6 ti-list-group border-0 text-gray-800 dark:text-white">
                          <a className="w-full" href="javascript:void(0);">
                            <div className="flex items-center">
                              <div className="leading-none">
                                <img
                                  alt="image"
                                  className="avatar avatar-sm rounded-full"
                                  src="../assets/img/ecommerce/jpg/6.jpg"
                                />
                              </div>
                              <div className="flex-auto ltr:ml-2 rtl:mr-2">
                                <p className="text-sm font-semibold mb-0">
                                  Kids shoes
                                </p>
                                <p className="text-xs text-gray-400 dark:text-white/80 mb-0 !font-normal">
                                  Clothing
                                </p>
                              </div>
                              <div className="block text-end">
                                <span className="text-sm text-success font-semibold">
                                  $149.00
                                </span>
                                <p className="text-xs text-gray-400 dark:text-white/80 !font-normal">
                                  <i className="ti ti-clock-hour-2 ltr:mr-1 rtl:mr-1" />
                                  01 Apr, 2023
                                </p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="p-0 mb-0 ti-list-group border-0 text-gray-800 dark:text-white">
                          <a className="w-full" href="javascript:void(0);">
                            <div className="flex items-center">
                              <div className="leading-none">
                                <img
                                  alt="image"
                                  className="avatar avatar-sm rounded-full"
                                  src="../assets/img/ecommerce/jpg/5.jpg"
                                />
                              </div>
                              <div className="flex-auto ltr:ml-2 rtl:mr-2">
                                <p className="text-sm font-semibold mb-0">
                                  Photo Frame
                                </p>
                                <p className="text-xs text-gray-400 dark:text-white/80 mb-0 !font-normal">
                                  Furniture
                                </p>
                              </div>
                              <div className="block text-end">
                                <span className="text-sm text-success font-semibold">
                                  $29.99
                                </span>
                                <p className="text-xs text-gray-400 dark:text-white/80 !font-normal">
                                  <i className="ti ti-clock-hour-2 ltr:mr-1 rtl:mr-1" />
                                  01 Apr, 2023
                                </p>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6 xxl:col-span-4">
                  <div className="box">
                    <div className="box-header">
                      <div className="flex">
                        <h5 className="box-title my-auto">Social Visitors</h5>
                        <div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
                          <button
                            className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                            type="button"
                          >
                            This Week <i className="ti ti-chevron-down" />
                          </button>
                          <div className="hs-dropdown-menu ti-dropdown-menu">
                            <a
                              className="ti-dropdown-item"
                              href="javascript:void(0)"
                            >
                              This Week
                            </a>
                            <a
                              className="ti-dropdown-item"
                              href="javascript:void(0)"
                            >
                              This Month
                            </a>
                            <a
                              className="ti-dropdown-item"
                              href="javascript:void(0)"
                            >
                              This Year
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-body p-2">
                      <div id="visitors" />
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-12 xxl:col-span-5">
                  <div className="box">
                    <div className="box-header flex">
                      <h5 className="box-title my-auto">
                        Top Selling Products
                      </h5>
                      <div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
                        <button
                          aria-label="button"
                          className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                          type="button"
                        >
                          <i className="text-sm leading-none ti ti-dots-vertical" />
                        </button>
                        <div className="hs-dropdown-menu ti-dropdown-menu">
                          <a
                            className="ti-dropdown-item"
                            href="javascript:void(0)"
                          >
                            Action
                          </a>
                          <a
                            className="ti-dropdown-item"
                            href="javascript:void(0)"
                          >
                            Another Action
                          </a>
                          <a
                            className="ti-dropdown-item"
                            href="javascript:void(0)"
                          >
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="box-body p-0">
                      <div className="overflow-auto">
                        <table className="ti-custom-table ti-custom-table-head">
                          <thead>
                            <tr>
                              <th
                                className="text-center !p-[0.65rem]"
                                scope="col"
                              >
                                Product
                              </th>
                              <th className="!p-[0.65rem]" scope="col">
                                Category
                              </th>
                              <th className="!p-[0.65rem]" scope="col">
                                Stock
                              </th>
                              <th className="!p-[0.65rem]" scope="col">
                                TotalSales
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem] min-w-[180px] truncate">
                                <img
                                  alt="Image Description"
                                  className="avatar avatar-sm p-2 rounded-full bg-gray-100 dark:bg-black/20 ltr:mr-2 rtl:ml-2"
                                  src="../assets/img/ecommerce/products/13.png"
                                />
                                Ethnic School bag for children (24L)
                              </td>
                              <td className="!p-[0.65rem]">Bags</td>
                              <td className="!p-[0.65rem] text-sm">
                                <span className="badge leading-none bg-success/10 text-success rounded-sm">
                                  In Stock
                                </span>
                              </td>
                              <td className="!p-[0.65rem]">
                                <span className="text-sm font-semibold">
                                  5,093
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem] min-w-[180px] truncate">
                                <img
                                  alt="Image Description"
                                  className="avatar avatar-sm p-2 rounded-full bg-gray-100 dark:bg-black/20 ltr:mr-2 rtl:ml-2"
                                  src="../assets/img/ecommerce/products/14.png"
                                />
                                Leather jacket for men (S,M,L,XL)
                              </td>
                              <td className="!p-[0.65rem]">Clothing</td>
                              <td className="!p-[0.65rem] text-sm">
                                <span className="badge leading-none bg-success/10 text-success rounded-sm">
                                  In Stock
                                </span>
                              </td>
                              <td className="!p-[0.65rem]">
                                <span className="text-sm font-semibold">
                                  6,890
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem] min-w-[180px] truncate">
                                <img
                                  alt="Image Description"
                                  className="avatar avatar-sm p-2 rounded-full bg-gray-100 dark:bg-black/20 ltr:mr-2 rtl:ml-2"
                                  src="../assets/img/ecommerce/products/15.png"
                                />
                                Childrens Teddy toy of high quality
                              </td>
                              <td className="!p-[0.65rem]">Toys</td>
                              <td className="!p-[0.65rem] text-sm">
                                <span className="badge leading-none bg-danger/10 text-danger rounded-sm">
                                  Out Of Stock
                                </span>
                              </td>
                              <td className="!p-[0.65rem]">
                                <span className="text-sm font-semibold">
                                  5,423
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem] min-w-[180px] truncate">
                                <img
                                  alt="Image Description"
                                  className="avatar avatar-sm p-2 rounded-full bg-gray-100 dark:bg-black/20 ltr:mr-2 rtl:ml-2"
                                  src="../assets/img/ecommerce/products/16.png"
                                />
                                Orange smart watch (24mm)
                              </td>
                              <td className="!p-[0.65rem]">Fashion</td>
                              <td className="!p-[0.65rem] text-sm">
                                <span className="badge leading-none bg-danger/10 text-danger rounded-sm">
                                  Out Of Stock
                                </span>
                              </td>
                              <td className="!p-[0.65rem]">
                                <span className="text-sm font-semibold">
                                  10,234
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem] min-w-[180px] truncate">
                                <img
                                  alt="Image Description"
                                  className="avatar avatar-sm p-2 rounded-full bg-gray-100 dark:bg-black/20 ltr:mr-2 rtl:ml-2"
                                  src="../assets/img/ecommerce/products/17.png"
                                />
                                Black Camera
                              </td>
                              <td className="!p-[0.65rem]">Electronic</td>
                              <td className="!p-[0.65rem] text-sm">
                                <span className="badge leading-none bg-success/10 text-success rounded-sm">
                                  In Stock
                                </span>
                              </td>
                              <td className="!p-[0.65rem]">
                                <span className="text-sm font-semibold">
                                  10,234
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem] min-w-[180px] truncate">
                                <img
                                  alt="Image Description"
                                  className="avatar avatar-sm p-2 rounded-full bg-gray-100 dark:bg-black/20 ltr:mr-2 rtl:ml-2"
                                  src="../assets/img/ecommerce/products/18.png"
                                />
                                Hand Bag For Ladies
                              </td>
                              <td className="!p-[0.65rem]">Fashion</td>
                              <td className="!p-[0.65rem] text-sm">
                                <span className="badge leading-none bg-danger/10 text-danger rounded-sm">
                                  Out Of Stock
                                </span>
                              </td>
                              <td className="!p-[0.65rem]">
                                <span className="text-sm font-semibold">
                                  1,034
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12">
                  <div className="box">
                    <div className="box-header">
                      <div className="flex">
                        <h5 className="box-title my-auto">
                          Recent Order Details
                        </h5>
                        <div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
                          <button
                            className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                            type="button"
                          >
                            View All <i className="ti ti-chevron-down" />
                          </button>
                          <div className="hs-dropdown-menu ti-dropdown-menu">
                            <a
                              className="ti-dropdown-item"
                              href="javascript:void(0)"
                            >
                              Download
                            </a>
                            <a
                              className="ti-dropdown-item"
                              href="javascript:void(0)"
                            >
                              Import
                            </a>
                            <a
                              className="ti-dropdown-item"
                              href="javascript:void(0)"
                            >
                              Export
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-body">
                      <div className="table-bordered rounded-sm ti-custom-table-head overflow-auto">
                        <table className="ti-custom-table ti-custom-table-head whitespace-nowrap">
                          <thead className="bg-gray-50 dark:bg-black/20">
                            <tr className="">
                              <th className="dark:text-white/80" scope="col">
                                S.no
                              </th>
                              <th className="dark:text-white/80" scope="col">
                                Item Details
                              </th>
                              <th className="dark:text-white/80" scope="col">
                                Customer ID
                              </th>
                              <th
                                className="dark:text-white/80 min-w-[300px]"
                                scope="col"
                              >
                                Customer Details
                              </th>
                              <th className="dark:text-white/80" scope="col">
                                Ordered Date
                              </th>
                              <th className="dark:text-white/80" scope="col">
                                Status
                              </th>
                              <th className="dark:text-white/80" scope="col">
                                Price
                              </th>
                              <th className="dark:text-white/80" scope="col">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody className="">
                            <tr className="">
                              <td>1</td>
                              <td>
                                <div className="flex space-x-3 rtl:space-x-reverse w-full">
                                  <img
                                    alt="Image Description"
                                    className="avatar rounded-sm bg-gray-100 dark:bg-black/20 p-2"
                                    src="../assets/img/ecommerce/products/1.png"
                                  />
                                  <div className="block w-full my-auto">
                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-300 min-w-[180px] truncate">
                                      Black Heals For Women
                                    </span>
                                    <span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">
                                      #2343
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="!text-success font-semibold text-base">
                                #user1
                              </td>
                              <td>
                                <div className="flex space-x-3 rtl:space-x-reverse text-start">
                                  <img
                                    alt="Image Description"
                                    className="avatar avatar-sm rounded-sm"
                                    src="../assets/img/users/2.jpg"
                                  />
                                  <div className="block my-auto">
                                    <p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">
                                      Socrates Itumay
                                    </p>
                                    <span className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">
                                      socratesitumay@gmail.com
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td>10-12-2022</td>
                              <td>
                                <span className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-success/10 text-success/80">
                                  Success
                                </span>
                              </td>
                              <td>$999</td>
                              <td className="font-medium space-x-2 rtl:space-x-reverse">
                                <div className="hs-tooltip ti-main-tooltip">
                                  <a
                                    className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary"
                                    href="javascript:void(0);"
                                  >
                                    <i className="ti ti-eye" />
                                    <span
                                      className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
                                      role="tooltip"
                                    >
                                      View
                                    </span>
                                  </a>
                                </div>
                                <div className="hs-tooltip ti-main-tooltip">
                                  <a
                                    className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary"
                                    href="javascript:void(0);"
                                  >
                                    <i className="ti ti-pencil" />
                                    <span
                                      className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
                                      role="tooltip"
                                    >
                                      Edit
                                    </span>
                                  </a>
                                </div>
                                <div className="hs-tooltip ti-main-tooltip">
                                  <a
                                    className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger"
                                    href="javascript:void(0);"
                                  >
                                    <i className="ti ti-trash" />
                                    <span
                                      className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
                                      role="tooltip"
                                    >
                                      Delete
                                    </span>
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr className="">
                              <td>2</td>
                              <td>
                                <div className="flex space-x-3 rtl:space-x-reverse w-full">
                                  <img
                                    alt="Image Description"
                                    className="avatar rounded-sm bg-gray-100 dark:bg-black/20 p-2"
                                    src="../assets/img/ecommerce/products/2.png"
                                  />
                                  <div className="block w-full my-auto">
                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-300 min-w-[180px] truncate">
                                      White Tshirt
                                    </span>
                                    <span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">
                                      #5655
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="!text-success font-semibold text-base">
                                #user2
                              </td>
                              <td>
                                <div className="flex space-x-3 rtl:space-x-reverse text-start">
                                  <img
                                    alt="Image Description"
                                    className="avatar avatar-sm rounded-sm"
                                    src="../assets/img/users/3.jpg"
                                  />
                                  <div className="block my-auto">
                                    <p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">
                                      Json Taylor
                                    </p>
                                    <span className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">
                                      jsontaylor2416@gmail.com
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td>11-12-2022</td>
                              <td>
                                <span className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-info/10 text-info/80">
                                  Shipping
                                </span>
                              </td>
                              <td>$699</td>
                              <td className="font-medium space-x-2 rtl:space-x-reverse">
                                <div className="hs-tooltip ti-main-tooltip">
                                  <a
                                    className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary"
                                    href="javascript:void(0);"
                                  >
                                    <i className="ti ti-eye" />
                                    <span
                                      className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
                                      role="tooltip"
                                    >
                                      View
                                    </span>
                                  </a>
                                </div>
                                <div className="hs-tooltip ti-main-tooltip">
                                  <a
                                    className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary"
                                    href="javascript:void(0);"
                                  >
                                    <i className="ti ti-pencil" />
                                    <span
                                      className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
                                      role="tooltip"
                                    >
                                      Edit
                                    </span>
                                  </a>
                                </div>
                                <div className="hs-tooltip ti-main-tooltip">
                                  <a
                                    className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger"
                                    href="javascript:void(0);"
                                  >
                                    <i className="ti ti-trash" />
                                    <span
                                      className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
                                      role="tooltip"
                                    >
                                      Delete
                                    </span>
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr className="">
                              <td>3</td>
                              <td>
                                <div className="flex space-x-3 rtl:space-x-reverse w-full">
                                  <img
                                    alt="Image Description"
                                    className="avatar rounded-sm bg-gray-100 dark:bg-black/20 p-2"
                                    src="../assets/img/ecommerce/products/3.png"
                                  />
                                  <div className="block w-full my-auto">
                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-300 min-w-[180px] truncate">
                                      Jacket For Men
                                    </span>
                                    <span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">
                                      #15245
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="!text-success font-semibold text-base">
                                #user3
                              </td>
                              <td>
                                <div className="flex space-x-3 rtl:space-x-reverse text-start">
                                  <img
                                    alt="Image Description"
                                    className="avatar avatar-sm rounded-sm"
                                    src="../assets/img/users/4.jpg"
                                  />
                                  <div className="block my-auto">
                                    <p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">
                                      Suzika Stallone
                                    </p>
                                    <span className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">
                                      suzikastallone3214@gmail.com
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td>12-12-2022</td>
                              <td>
                                <span className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-warning/10 text-warning/80">
                                  Out For Delivery
                                </span>
                              </td>
                              <td>$599</td>
                              <td className="font-medium space-x-2 rtl:space-x-reverse">
                                <div className="hs-tooltip ti-main-tooltip">
                                  <a
                                    className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary"
                                    href="javascript:void(0);"
                                  >
                                    <i className="ti ti-eye" />
                                    <span
                                      className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
                                      role="tooltip"
                                    >
                                      View
                                    </span>
                                  </a>
                                </div>
                                <div className="hs-tooltip ti-main-tooltip">
                                  <a
                                    className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary"
                                    href="javascript:void(0);"
                                  >
                                    <i className="ti ti-pencil" />
                                    <span
                                      className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
                                      role="tooltip"
                                    >
                                      Edit
                                    </span>
                                  </a>
                                </div>
                                <div className="hs-tooltip ti-main-tooltip">
                                  <a
                                    className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger"
                                    href="javascript:void(0);"
                                  >
                                    <i className="ti ti-trash" />
                                    <span
                                      className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
                                      role="tooltip"
                                    >
                                      Delete
                                    </span>
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr className="">
                              <td>4</td>
                              <td>
                                <div className="flex space-x-3 rtl:space-x-reverse w-full">
                                  <img
                                    alt="Image Description"
                                    className="avatar rounded-sm bg-gray-100 dark:bg-black/20 p-2"
                                    src="../assets/img/ecommerce/products/4.png"
                                  />
                                  <div className="block w-full my-auto">
                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-300 min-w-[180px] truncate">
                                      Airpods
                                    </span>
                                    <span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">
                                      #45415
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="!text-success font-semibold text-base">
                                #user4
                              </td>
                              <td>
                                <div className="flex space-x-3 rtl:space-x-reverse text-start">
                                  <img
                                    alt="Image Description"
                                    className="avatar avatar-sm rounded-sm"
                                    src="../assets/img/users/5.jpg"
                                  />
                                  <div className="block my-auto">
                                    <p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">
                                      Selena Deoyl
                                    </p>
                                    <span className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">
                                      selenadeoyl114@gmail.com
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td>12-12-2022</td>
                              <td>
                                <span className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-danger/10 text-danger/80">
                                  Cancelled
                                </span>
                              </td>
                              <td>$299</td>
                              <td className="font-medium space-x-2 rtl:space-x-reverse">
                                <div className="hs-tooltip ti-main-tooltip">
                                  <a
                                    className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary"
                                    href="javascript:void(0);"
                                  >
                                    <i className="ti ti-eye" />
                                    <span
                                      className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
                                      role="tooltip"
                                    >
                                      View
                                    </span>
                                  </a>
                                </div>
                                <div className="hs-tooltip ti-main-tooltip">
                                  <a
                                    className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary"
                                    href="javascript:void(0);"
                                  >
                                    <i className="ti ti-pencil" />
                                    <span
                                      className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
                                      role="tooltip"
                                    >
                                      Edit
                                    </span>
                                  </a>
                                </div>
                                <div className="hs-tooltip ti-main-tooltip">
                                  <a
                                    className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger"
                                    href="javascript:void(0);"
                                  >
                                    <i className="ti ti-trash" />
                                    <span
                                      className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
                                      role="tooltip"
                                    >
                                      Delete
                                    </span>
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr className="">
                              <td>5</td>
                              <td>
                                <div className="flex space-x-3 rtl:space-x-reverse w-full">
                                  <img
                                    alt="Image Description"
                                    className="avatar rounded-sm bg-gray-100 dark:bg-black/20 p-2"
                                    src="../assets/img/ecommerce/products/5.png"
                                  />
                                  <div className="block w-full my-auto">
                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-300 min-w-[180px] truncate">
                                      Jasmine Fragrance
                                    </span>
                                    <span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">
                                      #35656
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="!text-success font-semibold text-base">
                                #user5
                              </td>
                              <td>
                                <div className="flex space-x-3 rtl:space-x-reverse text-start">
                                  <img
                                    alt="Image Description"
                                    className="avatar avatar-sm rounded-sm"
                                    src="../assets/img/users/9.jpg"
                                  />
                                  <div className="block my-auto">
                                    <p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">
                                      Roman Killon
                                    </p>
                                    <span className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">
                                      romankillon143@gmail.com
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td>13-12-2022</td>
                              <td>
                                <span className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary/80">
                                  Ordered
                                </span>
                              </td>
                              <td>$299</td>
                              <td className="font-medium space-x-2 rtl:space-x-reverse">
                                <div className="hs-tooltip ti-main-tooltip">
                                  <a
                                    className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary"
                                    href="javascript:void(0);"
                                  >
                                    <i className="ti ti-eye" />
                                    <span
                                      className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
                                      role="tooltip"
                                    >
                                      View
                                    </span>
                                  </a>
                                </div>
                                <div className="hs-tooltip ti-main-tooltip">
                                  <a
                                    className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary"
                                    href="javascript:void(0);"
                                  >
                                    <i className="ti ti-pencil" />
                                    <span
                                      className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
                                      role="tooltip"
                                    >
                                      Edit
                                    </span>
                                  </a>
                                </div>
                                <div className="hs-tooltip ti-main-tooltip">
                                  <a
                                    className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger"
                                    href="javascript:void(0);"
                                  >
                                    <i className="ti ti-trash" />
                                    <span
                                      className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
                                      role="tooltip"
                                    >
                                      Delete
                                    </span>
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr className="">
                              <td>6</td>
                              <td>
                                <div className="flex space-x-3 rtl:space-x-reverse w-full">
                                  <img
                                    alt="Image Description"
                                    className="avatar rounded-sm bg-gray-100 dark:bg-black/20 p-2"
                                    src="../assets/img/ecommerce/products/6.png"
                                  />
                                  <div className="block w-full my-auto">
                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-300 min-w-[180px] truncate">
                                      Smart Watch
                                    </span>
                                    <span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">
                                      #622545
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="!text-success font-semibold text-base">
                                #user6
                              </td>
                              <td>
                                <div className="flex space-x-3 rtl:space-x-reverse text-start">
                                  <img
                                    alt="Image Description"
                                    className="avatar avatar-sm rounded-sm"
                                    src="../assets/img/users/10.jpg"
                                  />
                                  <div className="block my-auto">
                                    <p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">
                                      Charlie Davieson
                                    </p>
                                    <span className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">
                                      charliedavieson@gmail.com
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td>13-12-2022</td>
                              <td>
                                <span className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-secondary/10 text-secondary/80">
                                  Packed
                                </span>
                              </td>
                              <td>$299</td>
                              <td className="font-medium space-x-2 rtl:space-x-reverse">
                                <div className="hs-tooltip ti-main-tooltip">
                                  <a
                                    className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary"
                                    href="javascript:void(0);"
                                  >
                                    <i className="ti ti-eye" />
                                    <span
                                      className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
                                      role="tooltip"
                                    >
                                      View
                                    </span>
                                  </a>
                                </div>
                                <div className="hs-tooltip ti-main-tooltip">
                                  <a
                                    className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary"
                                    href="javascript:void(0);"
                                  >
                                    <i className="ti ti-pencil" />
                                    <span
                                      className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
                                      role="tooltip"
                                    >
                                      Edit
                                    </span>
                                  </a>
                                </div>
                                <div className="hs-tooltip ti-main-tooltip">
                                  <a
                                    className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger"
                                    href="javascript:void(0);"
                                  >
                                    <i className="ti ti-trash" />
                                    <span
                                      className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
                                      role="tooltip"
                                    >
                                      Delete
                                    </span>
                                  </a>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hs-overlay ti-modal hidden" id="search-modal">
            <div className="ti-modal-box">
              <div className="ti-modal-content">
                <div className="ti-modal-body">
                  <div className="header-search">
                    <label className="sr-only" htmlFor="icon">
                      Search
                    </label>
                    <div className="relative">
                      <div className="search-btn">
                        <i className="ri ri-search-2-line search-btn-icon" />
                      </div>
                      <input
                        className="py-2 ltr:pl-11 rtl:pr-11 ti-form-input focus:z-10"
                        id="icon"
                        name="icon"
                        placeholder="Search"
                        type="text"
                      />
                      <div className="voice-search">
                        <i className="ri ri-mic-2-line voice-btn-icon" />
                      </div>
                      <div className="search-dropdown">
                        <i className="ri ri-more-2-line search-dropdown-btn-icon" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <p className="font-semibold text-[13px] text-gray-400 dark:text-gray-200 mb-2">
                      Are You Looking For...
                    </p>
                    <div className="badge rounded-sm bg-secondary/20 text-secondary relative header-box">
                      <a
                        className="w-full my-auto items-center flex space-x-2 rtl:space-x-reverse"
                        href="team.html"
                      >
                        <span className="inline-block text-secondary ltr:mr-1 rtl:ml-1">
                          <i className="ri ri-user-line text-sm" />
                        </span>
                        Team
                      </a>
                      <a
                        className="header-remove-btn flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-secondary hover:bg-secondary hover:text-secondary focus:outline-none focus:bg-secondary focus:text-white"
                        href="javascript:void(0);"
                      >
                        <span className="sr-only">Remove badge</span>
                        <svg
                          className="h-4 w-4 hover:fill-white"
                          fill="currentColor"
                          height="16"
                          viewBox="0 0 16 16"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                        </svg>
                      </a>
                    </div>
                    <div className="badge rounded-sm bg-secondary/20 text-secondary relative header-box">
                      <a
                        className="w-full my-auto items-center flex space-x-2 rtl:space-x-reverse"
                        href="form-elements.html"
                      >
                        <span className="inline-block text-secondary ltr:mr-1 rtl:ml-1">
                          <i className="ri ri-file-text-line text-sm" />
                        </span>
                        Forms
                      </a>
                      <a
                        className="header-remove-btn flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-secondary hover:bg-secondary hover:text-secondary focus:outline-none focus:bg-secondary focus:text-white"
                        href="javascript:void(0);"
                      >
                        <span className="sr-only">Remove badge</span>
                        <svg
                          className="h-4 w-4 hover:fill-white"
                          fill="currentColor"
                          height="16"
                          viewBox="0 0 16 16"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                        </svg>
                      </a>
                    </div>
                    <div className="badge rounded-sm bg-secondary/20 text-secondary relative header-box">
                      <a
                        className="w-full my-auto items-center flex space-x-2 rtl:space-x-reverse"
                        href="vector-maps.html"
                      >
                        <span className="inline-block text-secondary ltr:mr-1 rtl:ml-1">
                          <i className="ri ri-map-pin-line text-sm" />
                        </span>
                        Maps
                      </a>
                      <a
                        className="mt-auto py-3 border-t dark:border-white/10 bg-white dark:bg-bgdark"
                        href="javascript:void(0);"
                      ></a>
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <a
                          className="mt-auto py-3 border-t dark:border-white/10 bg-white dark:bg-bgdark"
                          href="javascript:void(0);"
                        ></a>
                        <p className="text-center">
                          <a
                            className="mt-auto py-3 border-t dark:border-white/10 bg-white dark:bg-bgdark"
                            href="javascript:void(0);"
                          >
                            Copyright © <span id="year" />{" "}
                          </a>
                          <a className="text-primary" href="javascript:void(0)">
                            Synto
                          </a>
                          . Designed with{" "}
                          <span className="ri ri-heart-fill text-red-500" /> by{" "}
                          <a className="text-primary" href="javascript:void(0)">
                            {" "}
                            Spruko{" "}
                          </a>{" "}
                          All rights reserved{" "}
                        </p>
                      </div>
                    </div>
                    {`     class="header-remove-btn flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-secondary hover:bg-secondary hover:text-secondary focus:outline-none focus:bg-secondary focus:text-white">                  `}
                    <span className="sr-only">Remove badge</span>
                    <svg
                      className="h-4 w-4 hover:fill-white"
                      fill="currentColor"
                      height="16"
                      viewBox="0 0 16 16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                    </svg>
                  </div>
                  <div className="badge rounded-sm bg-secondary/20 text-secondary relative header-box">
                    <a
                      className="w-full my-auto items-center flex space-x-2 rtl:space-x-reverse"
                      href="widgets.html"
                    >
                      <span className="inline-block text-secondary ltr:mr-1 rtl:ml-1">
                        <i className="ri ri-server-line text-sm" />
                      </span>
                      Widgets
                    </a>
                    <a
                      className="header-remove-btn flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-secondary hover:bg-secondary hover:text-secondary focus:outline-none focus:bg-secondary focus:text-white"
                      href="javascript:void(0);"
                    >
                      <span className="sr-only">Remove badge</span>
                      <svg
                        className="h-4 w-4 hover:fill-white"
                        fill="currentColor"
                        height="16"
                        viewBox="0 0 16 16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="font-semibold text-sm text-gray-500 mb-2">
                    Recent Search :
                  </p>
                  <div className="p-2 border dark:border-white/10 rounded-sm flex items-center text-gray-500 mb-1 relative header-box">
                    <a
                      className="w-full my-auto items-center flex"
                      href="notifications.html"
                    >
                      <span className="text-sm">Notifications</span>
                    </a>
                    <a
                      aria-label="anchor"
                      className="ltr:ml-auto rtl:mr-auto flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 focus:outline-none header-remove-btn"
                      href="javascript:void(0);"
                    >
                      <i className="ri-close-line" />
                    </a>
                  </div>
                  <div className="p-2 border dark:border-white/10 rounded-sm flex items-center text-gray-500 mb-1 relative header-box">
                    <a
                      className="w-full my-auto items-center flex"
                      href="alerts.html"
                    >
                      <span className="text-sm">Alerts</span>
                    </a>
                    <a
                      aria-label="anchor"
                      className="ltr:ml-auto rtl:mr-auto flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 focus:outline-none header-remove-btn"
                      href="javascript:void(0);"
                    >
                      <i className="ri-close-line" />
                    </a>
                  </div>
                  <div className="p-2 border dark:border-white/10 rounded-sm flex items-center text-gray-500 relative header-box">
                    <a
                      className="w-full my-auto items-center flex"
                      href="tables.html"
                    >
                      <span className="text-sm">Tables</span>
                    </a>
                    <a
                      aria-label="anchor"
                      className="ltr:ml-auto rtl:mr-auto flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 focus:outline-none header-remove-btn"
                      href="javascript:void(0);"
                    >
                      <i className="ri-close-line" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="ti-modal-footer">
                <div className="inline-flex rounded-md shadow-sm">
                  <button
                    className="ti-btn-group py-1 ti-btn-soft-primary dark:border-white/10"
                    type="button"
                  >
                    Search
                  </button>
                  <button
                    className="ti-btn-group py-1 ti-btn-primary dark:border-white/10"
                    type="button"
                  >
                    Clear Recents
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="mt-auto py-3 border-t dark:border-white/10 bg-white dark:bg-bgdark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center">
              Copyright © <span id="year" />{" "}
              <a className="text-primary" href="javascript:void(0)">
                Synto
              </a>
              . Designed with <span className="ri ri-heart-fill text-red-500" />{" "}
              by{" "}
              <a className="text-primary" href="javascript:void(0)">
                {" "}
                Spruko{" "}
              </a>{" "}
              All rights reserved{" "}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default test;
