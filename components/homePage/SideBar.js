"use client";
import Link from "next/link";
import { useState } from "react";
const SideBar = () => {
  const [dash, setDash] = useState(false);

  const handleMenuClick = () => {
    setDash(!dash);
  };
  return (
    // Start::app-sidebar
    // <div>
    <aside className="app-sidebar" id="sidebar">
      {/* Start::main-sidebar-header */}
      <div className="main-sidebar-header">
        <a href="index.html" className="header-logo">
          <img
            src="../assets/img/brand-logos/desktop-logo.png"
            alt="logo"
            className="main-logo desktop-logo"
          />
          <img
            src="../assets/img/brand-logos/toggle-logo.png"
            alt="logo"
            className="main-logo toggle-logo"
          />
          <img
            src="../assets/img/brand-logos/desktop-dark.png"
            alt="logo"
            className="main-logo desktop-dark"
          />
          <img
            src="../assets/img/brand-logos/toggle-dark.png"
            alt="logo"
            className="main-logo toggle-dark"
          />
        </a>
      </div>
      {/* End::main-sidebar-header */}
      {/* Start::main-sidebar */}
      <div className="main-sidebar " id="sidebar-scroll">
        {/* Start::nav */}
        <nav className="main-menu-container nav nav-pills flex-column sub-open">
          <div className="slide-left" id="slide-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#7b8191"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
            </svg>
          </div>
          <ul className="main-menu">
            {/* Start::slide__category */}
            <li className="slide__category">
              <span className="category-name">Main</span>
            </li>
            {/* End::slide__category */}
            {/* Start::slide */}
            <li className={`slide  has-sub active${dash ? " open" : ""}`}>
              <a href="#" className="side-menu__item" onClick={handleMenuClick}>
                <i className="ri-home-8-line side-menu__icon" />
                <span className="side-menu__label">Dashboards</span>
                <i
                  className={`ri ${
                    dash ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line"
                  } side-menu__angle`}
                />
              </a>
              {dash && (
                <ul className="slide-menu child1 active">
                  <li className="slide side-menu__label1">
                    <Link href="/sales" legacyBehavior>
                      <a className="side-menu__item">Sales</a>
                    </Link>
                  </li>
                  <li className="slide">
                    <Link href="/ecommerce" legacyBehavior>
                      <a className="side-menu__item">Ecommerce</a>
                    </Link>
                  </li>
                  <li className="slide">
                    <Link href="/crypto" legacyBehavior>
                      <a className="side-menu__item">Crypto</a>
                    </Link>
                  </li>
                  <li className="slide">
                    <Link href="/jobs" legacyBehavior>
                      <a className="side-menu__item">Jobs</a>
                    </Link>
                  </li>
                  <li className="slide">
                    <Link href="/nft" legacyBehavior>
                      <a className="side-menu__item">NFT</a>
                    </Link>
                  </li>
                  <li className="slide">
                    <Link href="/analytics" legacyBehavior>
                      <a className="side-menu__item">Analytics</a>
                    </Link>
                  </li>
                  <li className="slide">
                    <Link href="/projects" legacyBehavior>
                      <a className="side-menu__item">Projects</a>
                    </Link>
                  </li>
                  <li className="slide">
                    <Link href="/hrm" legacyBehavior>
                      <a className="side-menu__item">HRM</a>
                    </Link>
                  </li>
                  <li className="slide">
                    <Link href="/crm" legacyBehavior>
                      <a className="side-menu__item">CRM</a>
                    </Link>
                  </li>
                  <li className="slide">
                    <Link href="/personal" legacyBehavior>
                      <a className="side-menu__item">Personal</a>
                    </Link>
                  </li>
                  <li className="slide">
                    <Link href="/stocks" legacyBehavior>
                      <a className="side-menu__item">Stocks</a>
                    </Link>
                  </li>
                  <li className="slide">
                    <Link href="/course" legacyBehavior>
                      <a className="side-menu__item">Course</a>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            {/* End::slide */}
            {/* Start::slide */}
            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <i className="ri-cpu-line side-menu__icon" />
                <span className="side-menu__label">Elements</span>
                <i className="ri ri-arrow-right-s-line side-menu__angle" />
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0)">Elements</a>
                </li>
                <li className="slide">
                  <a href="navbar.html" className="side-menu__item">
                    Navbar
                  </a>
                </li>
                <li className="slide">
                  <a href="mega-menu.html" className="side-menu__item">
                    MegaMenu
                  </a>
                </li>
                <li className="slide">
                  <a href="tabs.html" className="side-menu__item">
                    Nav &amp;Tabs
                  </a>
                </li>
                <li className="slide">
                  <a href="scrollspy.html" className="side-menu__item">
                    Scrollspy
                  </a>
                </li>
                <li className="slide">
                  <a href="breadcrumb.html" className="side-menu__item">
                    Breadcrumb
                  </a>
                </li>
                <li className="slide">
                  <a href="pagination.html" className="side-menu__item">
                    Pagination
                  </a>
                </li>
                <li className="slide">
                  <a href="grid.html" className="side-menu__item">
                    Grids
                  </a>
                </li>
                <li className="slide">
                  <a href="columns.html" className="side-menu__item">
                    {" "}
                    Columns
                  </a>
                </li>
              </ul>
            </li>
            {/* End::slide */}
            {/* Start::slide */}
            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <i className="ri-file-text-line side-menu__icon" />
                <span className="side-menu__label">Forms</span>
                <i className="ri ri-arrow-right-s-line side-menu__angle" />
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0)">Forms</a>
                </li>
                <li className="slide">
                  <a href="form-elements.html" className="side-menu__item">
                    FormElements
                  </a>
                </li>
                <li className="slide">
                  <a href="advanced-forms.html" className="side-menu__item">
                    AdvancedForms
                  </a>
                </li>
                <li className="slide">
                  <a href="form-input-group.html" className="side-menu__item">
                    Form-Input-Group
                  </a>
                </li>
                <li className="slide">
                  <a href="file-upload.html" className="side-menu__item">
                    File Uploads
                  </a>
                </li>
                <li className="slide">
                  <a href="form-checkbox.html" className="side-menu__item">
                    Form-Checkbox
                  </a>
                </li>
                <li className="slide">
                  <a href="form-radio.html" className="side-menu__item">
                    Form-Radio
                  </a>
                </li>
                <li className="slide">
                  <a href="form-switch.html" className="side-menu__item">
                    Form-Switch
                  </a>
                </li>
                <li className="slide">
                  <a href="form-select.html" className="side-menu__item">
                    Form-Select
                  </a>
                </li>
                <li className="slide">
                  <a href="form-layouts.html" className="side-menu__item">
                    Form-Layouts
                  </a>
                </li>
                <li className="slide">
                  <a href="form-validations.html" className="side-menu__item">
                    Form-Validations
                  </a>
                </li>
                <li className="slide">
                  <a href="quil-editor.html" className="side-menu__item">
                    Form-Editor
                  </a>
                </li>
              </ul>
            </li>
            {/* End::slide */}
            {/* Start::slide */}
            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <i className="ri-stack-line side-menu__icon" />
                <span className="side-menu__label">Advanced Ui</span>
                <i className="ri ri-arrow-right-s-line side-menu__angle" />
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0)">Advanced Ui</a>
                </li>
                <li className="slide">
                  <a href="rangeslider.html" className="side-menu__item">
                    Rangeslider
                  </a>
                </li>
                <li className="slide">
                  <a href="calendar.html" className="side-menu__item">
                    Calendar
                  </a>
                </li>
                <li className="slide">
                  <a href="carousel.html" className="side-menu__item">
                    Carousel
                  </a>
                </li>
                <li className="slide">
                  <a href="gallery.html" className="side-menu__item">
                    Gallery
                  </a>
                </li>
                <li className="slide">
                  <a href="sweetalert.html" className="side-menu__item">
                    Sweetalert
                  </a>
                </li>
                <li className="slide">
                  <a href="ratings.html" className="side-menu__item">
                    Rating
                  </a>
                </li>
                <li className="slide">
                  <a href="draggable.html" className="side-menu__item">
                    Draggable Cards
                  </a>
                </li>
                <li className="slide">
                  <a href="notifications.html" className="side-menu__item">
                    Notifications
                  </a>
                </li>
                <li className="slide">
                  <a href="treeview.html" className="side-menu__item">
                    Treeview
                  </a>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    File Manger
                    <i className="ri ri-arrow-right-s-line side-menu__angle" />
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="filemanager.html" className="side-menu__item">
                        File Manger
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="filemanager-list.html"
                        className="side-menu__item"
                      >
                        File Manger List
                      </a>
                    </li>
                    <li className="slide">
                      <a href="file-details.html" className="side-menu__item">
                        File Details
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* End::slide */}
            {/* Start::slide */}
            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <i className="ri-file-list-3-line side-menu__icon" />
                <span className="side-menu__label">Basic Ui</span>
                <i className="ri ri-arrow-right-s-line side-menu__angle" />
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0)">Basic Ui</a>
                </li>
                <li className="slide">
                  <a href="dropdown.html" className="side-menu__item">
                    Dropdown
                  </a>
                </li>
                <li className="slide">
                  <a href="modal.html" className="side-menu__item">
                    Modal
                  </a>
                </li>
                <li className="slide">
                  <a href="offcanvas.html" className="side-menu__item">
                    Offcanvas
                  </a>
                </li>
                <li className="slide">
                  <a href="tooltip-popovers.html" className="side-menu__item">
                    Tooltips &amp; Popovers
                  </a>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Tables
                    <i className="ri ri-arrow-right-s-line side-menu__angle" />
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="tables.html" className="side-menu__item">
                        BasicTables
                      </a>
                    </li>
                    <li className="slide">
                      <a href="datatables.html" className="side-menu__item">
                        DataTables
                      </a>
                    </li>
                    <li className="slide">
                      <a href="edittable.html" className="side-menu__item">
                        Edit Table
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* End::slide */}
            {/* Start::slide__category */}
            <li className="slide__category">
              <span className="category-name">Levels</span>
            </li>
            {/* End::slide__category */}
            {/* Start::slide */}
            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <i className="ri-node-tree side-menu__icon" />
                <span className="side-menu__label">NestedMenu</span>
                <i className="ri ri-arrow-right-s-line side-menu__angle" />
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0)">Nested Menu</a>
                </li>
                <li className="slide">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Nested-1
                  </a>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Nested-2
                    <i className="ri ri-arrow-right-s-line side-menu__angle" />
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="javascript:void(0);" className="side-menu__item">
                        Nested-2-1
                      </a>
                    </li>
                    <li className="slide has-sub">
                      <a href="javascript:void(0);" className="side-menu__item">
                        Nested-2-2
                        <i className="ri ri-arrow-right-s-line side-menu__angle" />
                      </a>
                      <ul className="slide-menu child3">
                        <li className="slide">
                          <a
                            href="javascript:void(0);"
                            className="side-menu__item"
                          >
                            Nested-2-2-1
                          </a>
                        </li>
                        <li className="slide">
                          <a
                            href="javascript:void(0);"
                            className="side-menu__item"
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
            {/* End::slide */}
            {/* Start::slide__category */}
            <li className="slide__category">
              <span className="category-name">Maps &amp; charts</span>
            </li>
            {/* End::slide__category */}
            {/* Start::slide */}
            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <i className="ri-map-pin-user-line side-menu__icon" />
                <span className="side-menu__label">Maps</span>
                <i className="ri ri-arrow-right-s-line side-menu__angle" />
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0)">Maps</a>
                </li>
                <li className="slide">
                  <a href="google-maps.html" className="side-menu__item">
                    Google Maps
                  </a>
                </li>
                <li className="slide">
                  <a href="leaflet-maps.html" className="side-menu__item">
                    Leaflet Maps
                  </a>
                </li>
                <li className="slide">
                  <a href="vector-maps.html" className="side-menu__item">
                    Vector Maps
                  </a>
                </li>
              </ul>
            </li>
            {/* End::slide */}
            {/* Start::slide */}
            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <i className="ri-pie-chart-2-line side-menu__icon" />
                <span className="side-menu__label">Charts</span>
                <i className="ri ri-arrow-right-s-line side-menu__angle" />
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0)">Charts</a>
                </li>
                <li className="slide">
                  <a href="apex-charts.html" className="side-menu__item">
                    ApexCharts
                  </a>
                </li>
                <li className="slide">
                  <a href="chartjs.html" className="side-menu__item">
                    ChartJS
                  </a>
                </li>
                <li className="slide">
                  <a href="echartjs.html" className="side-menu__item">
                    EchartJs
                  </a>
                </li>
              </ul>
            </li>
            {/* End::slide */}
            {/* Start::slide__category */}
            <li className="slide__category">
              <span className="category-name">Pages</span>
            </li>
            {/* End::slide__category */}
            {/* Start::slide */}
            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <i className="ri-book-open-line side-menu__icon" />
                <span className="side-menu__label">Pages</span>
                <i className="ri ri-arrow-right-s-line side-menu__angle" />
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0)">Pages</a>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Profile
                    <i className="ri ri-arrow-right-s-line side-menu__angle" />
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="profile.html" className="side-menu__item">
                        Home
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="profile-settings.html"
                        className="side-menu__item"
                      >
                        Profile Settings
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Invoice
                    <i className="ri ri-arrow-right-s-line side-menu__angle" />
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="invoice-list.html" className="side-menu__item">
                        Invoice List
                      </a>
                    </li>
                    <li className="slide">
                      <a href="invoice.html" className="side-menu__item">
                        Invoice Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Blog
                    <i className="ri ri-arrow-right-s-line side-menu__angle" />
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="blog.html" className="side-menu__item">
                        Blog
                      </a>
                    </li>
                    <li className="slide">
                      <a href="blog-details.html" className="side-menu__item">
                        Blog Details
                      </a>
                    </li>
                    <li className="slide">
                      <a href="blog-edit.html" className="side-menu__item">
                        Edit Blog
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Mail
                    <i className="ri ri-arrow-right-s-line side-menu__angle" />
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="mail-inbox.html" className="side-menu__item">
                        Mail
                      </a>
                    </li>
                    <li className="slide">
                      <a href="chat.html" className="side-menu__item">
                        Chat
                      </a>
                    </li>
                    <li className="slide">
                      <a href="mail-settings.html" className="side-menu__item">
                        Mail-settings
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Ecommerce
                    <i className="ri ri-arrow-right-s-line side-menu__angle" />
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="products.html" className="side-menu__item">
                        Products
                      </a>
                    </li>
                    <li className="slide">
                      <a href="product-list.html" className="side-menu__item">
                        Product list
                      </a>
                    </li>
                    <li className="slide">
                      <a href="add-product.html" className="side-menu__item">
                        Add Product
                      </a>
                    </li>
                    <li className="slide">
                      <a href="edit-product.html" className="side-menu__item">
                        Edit Product
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="products-details.html"
                        className="side-menu__item"
                      >
                        Products-Details
                      </a>
                    </li>
                    <li className="slide">
                      <a href="cart.html" className="side-menu__item">
                        Cart
                      </a>
                    </li>
                    <li className="slide">
                      <a href="checkout.html" className="side-menu__item">
                        Checkout
                      </a>
                    </li>
                    <li className="slide">
                      <a href="orders.html" className="side-menu__item">
                        Orders
                      </a>
                    </li>
                    <li className="slide">
                      <a href="order-details.html" className="side-menu__item">
                        Order Details
                      </a>
                    </li>
                    <li className="slide">
                      <a href="wishlist.html" className="side-menu__item">
                        Whislist
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="slide">
                  <a href="about.html" className="side-menu__item">
                    About Us
                  </a>
                </li>
                <li className="slide">
                  <a href="contacts.html" className="side-menu__item">
                    Contacts
                  </a>
                </li>
                <li className="slide">
                  <a href="pricing.html" className="side-menu__item">
                    Pricing tables
                  </a>
                </li>
                <li className="slide">
                  <a href="timeline.html" className="side-menu__item">
                    Timeline
                  </a>
                </li>
                <li className="slide">
                  <a href="team.html" className="side-menu__item">
                    Team
                  </a>
                </li>
                <li className="slide">
                  <a href="landing.html" className="side-menu__item">
                    Landing
                  </a>
                </li>
                <li className="slide">
                  <a href="todo.html" className="side-menu__item">
                    Todo list
                  </a>
                </li>
                <li className="slide">
                  <a href="tasks.html" className="side-menu__item">
                    Tasks
                  </a>
                </li>
                <li className="slide">
                  <a href="reviews.html" className="side-menu__item">
                    Reviews
                  </a>
                </li>
                <li className="slide">
                  <a href="faqs.html" className="side-menu__item">
                    Faq's
                  </a>
                </li>
                <li className="slide">
                  <a href="contactus.html" className="side-menu__item">
                    Contact Us
                  </a>
                </li>
                <li className="slide">
                  <a href="terms.html" className="side-menu__item">
                    Terms&amp;conditions
                  </a>
                </li>
                <li className="slide">
                  <a href="empty.html" className="side-menu__item">
                    Empty
                  </a>
                </li>
              </ul>
            </li>
            {/* End::slide */}
            {/* Start::slide */}
            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <i className="ri-camera-lens-line side-menu__icon" />
                <span className="side-menu__label">Icons</span>
                <i className="ri ri-arrow-right-s-line side-menu__angle" />
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0)">Icons</a>
                </li>
                <li className="slide">
                  <a href="tabler-icons.html" className="side-menu__item">
                    Tabler Icons
                  </a>
                </li>
                <li className="slide">
                  <a href="remix-icons.html" className="side-menu__item">
                    Remix Icons
                  </a>
                </li>
              </ul>
            </li>
            {/* End::slide */}
            {/* Start::slide */}
            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <i className="ri-error-warning-line side-menu__icon" />
                <span className="side-menu__label">Authentication</span>
                <i className="ri ri-arrow-right-s-line side-menu__angle" />
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0)">Authentication</a>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Sign-In
                    <i className="ri ri-arrow-right-s-line side-menu__angle" />
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="signin.html" className="side-menu__item">
                        Basic
                      </a>
                    </li>
                    <li className="slide">
                      <a href="signin-cover.html" className="side-menu__item">
                        Cover-1
                      </a>
                    </li>
                    <li className="slide">
                      <a href="signin-cover2.html" className="side-menu__item">
                        Cover-2
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Sign-Up
                    <i className="ri ri-arrow-right-s-line side-menu__angle" />
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="signup.html" className="side-menu__item">
                        Basic
                      </a>
                    </li>
                    <li className="slide">
                      <a href="signup-cover.html" className="side-menu__item">
                        Cover-1
                      </a>
                    </li>
                    <li className="slide">
                      <a href="signup-cover2.html" className="side-menu__item">
                        Cover-2
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Create Password
                    <i className="ri ri-arrow-right-s-line side-menu__angle" />
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="createpassword.html" className="side-menu__item">
                        Basic
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="createpassword-cover.html"
                        className="side-menu__item"
                      >
                        Cover-1
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="createpassword-cover2.html"
                        className="side-menu__item"
                      >
                        Cover-2
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Forgot Password
                    <i className="ri ri-arrow-right-s-line side-menu__angle" />
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="forgot.html" className="side-menu__item">
                        Basic
                      </a>
                    </li>
                    <li className="slide">
                      <a href="forgot-cover.html" className="side-menu__item">
                        Cover-1
                      </a>
                    </li>
                    <li className="slide">
                      <a href="forgot-cover2.html" className="side-menu__item">
                        Cover-2
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Reset Password
                    <i className="ri ri-arrow-right-s-line side-menu__angle" />
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="reset.html" className="side-menu__item">
                        Basic
                      </a>
                    </li>
                    <li className="slide">
                      <a href="reset-cover.html" className="side-menu__item">
                        Cover-1
                      </a>
                    </li>
                    <li className="slide">
                      <a href="reset-cover2.html" className="side-menu__item">
                        Cover-2
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Lockscreen
                    <i className="ri ri-arrow-right-s-line side-menu__angle" />
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="lockscreen.html" className="side-menu__item">
                        Basic
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="lockscreen-cover.html"
                        className="side-menu__item"
                      >
                        Cover-1
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="lockscreen-cover2.html"
                        className="side-menu__item"
                      >
                        Cover-2
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Two-Step Verfication
                    <i className="ri ri-arrow-right-s-line side-menu__angle" />
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="verfication.html" className="side-menu__item">
                        Basic
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="verfication-cover.html"
                        className="side-menu__item"
                      >
                        Cover-1
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="verfication-cover2.html"
                        className="side-menu__item"
                      >
                        Cover-2
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="slide">
                  <a href="maintanace.html" className="side-menu__item">
                    Under Maintanace
                  </a>
                </li>
                <li className="slide">
                  <a href="construction.html" className="side-menu__item">
                    Under Construction
                  </a>
                </li>
                <li className="slide">
                  <a href="comingsoon.html" className="side-menu__item">
                    Coming Soon
                  </a>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Error Pages
                    <i className="ri ri-arrow-right-s-line side-menu__angle" />
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="404.html" className="side-menu__item">
                        404Error
                      </a>
                    </li>
                    <li className="slide">
                      <a href="500.html" className="side-menu__item">
                        500Error
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* End::slide */}
          </ul>
          <div className="slide-right" id="slide-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#7b8191"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
            </svg>
          </div>
        </nav>
        {/* End::nav */}
      </div>
      {/* End::main-sidebar */}
    </aside>

    // </div>
  );
};

export default SideBar;
