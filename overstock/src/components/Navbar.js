
import React from 'react'

import "../CSS/navbar.css"

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="https://searchlogovector.com/wp-content/uploads/2018/09/overstock-logo-vector.png" width={"180px"} height={"90px"}/></a>
    <form class="d-flex">
        <input class="form-control" type="search" placeholder="Search... everything you find ships for free" aria-label="Search"/>
        <button class="search-btn" type="submit">
        <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    <div class="account-icon">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa-regular fa-user"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa-regular fa-heart"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa-solid fa-cart-shopping"></i></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar;