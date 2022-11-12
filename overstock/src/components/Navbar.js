
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
      <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown">
          <i class="fa-regular fa-user"></i>
          </a>
          {/* <a class="nav-link active " aria-current="page" href="#"><i class="fa-regular fa-user"></i></a> */}

          <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>

        </li>
        <li class="nav-item">
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown">
          <i class="fa-regular fa-heart"></i>
          </a>
          <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
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