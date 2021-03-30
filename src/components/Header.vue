<template>
  <b-navbar class="bg-white shadow">
    <b-container>
        <b-navbar-brand>
            <img src='../assets/uroom-logo.jpg' alt="Logo URoom">
        </b-navbar-brand>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header',
  props: {}
}
</script>

<style scoped>

.navbar {
    z-index: 1008;
    width: 100%;
    padding: 0;
}
.navbar.fixed.banner--stick,
.navbar.shadow:not(.fixed):not(.banner--stick) {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.04)
}
.navbar-nav,
.navbar-nav * {
    line-height: 1;
}
.navbar .container {
    position: relative;
}
.navbar.absolute {
    position: absolute;
}
.navbar.navbar-bg-light {
    background: var(--color-white) !important;
}
.navbar .navbar-brand {
    padding-top: 0;
    padding-bottom: 0;
    margin: 0;
}
.navbar .navbar-brand a {
    color: #303030;
}
.navbar-brand img {
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    -webkit-transform: translateZ();
    height: auto;
    width: auto;
    max-width: none;
}
@media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: .001dpcm) {
    .navbar-brand img {
        image-rendering: -webkit-optimize-contrast;
    }
}
.navbar.transparent .logo-dark {
    display: none;
}
.navbar.fixed.transparent .logo-light {
    display: none;
}
.navbar.fixed.transparent .logo-dark {
    display: inline-block;
}
.nav-fill .nav-item {
    text-align: left;
}
.nav-fill>.nav-item {
    text-align: center;
}
.navbar-nav .nav-link {
    color: #303030;
}
.navbar-nav .nav-link,
.dropdown-item,
.mega-menu-content a {
    font-size: 0.85rem;
    font-weight: 500;
}
.nav-uppercase .navbar-nav .nav-link {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}
.dropdown-menu {
    min-width: 170px;
    padding: 0;
    margin: 0;
    background: #1e2228;
    border: 0;
    border-radius: 0;
    border-bottom-left-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
}
.dropdown-menu .dropdown-menu {
    border-radius: 0.2rem;
}
.navbar.extended:not(.banner--clone) .dropdown-menu,
.navbar.transparent:not(.banner--clone) .dropdown-menu {
    border-top-left-radius: 0.2rem;
    border-top-right-radius: 0.2rem;
}
.dropdown-menu .nav-item,
.mega-menu-content li {
    line-height: 1;
}
.dropdown-item,
.mega-menu-content a {
    padding: 0.6rem 1.2rem;
}
.mega-menu-content a {
    padding-left: 0;
    padding-right: 0;
    display: block;
}
.mega-menu-content .icon-list i {
    font-size: 0.7rem;
    width: 1.1rem;
}
.mega-menu-content a:hover {
    color: var(--color-white);
}
.dropdown-item.active {
    background: none;
    color: inherit;
}
.dropdown-item:focus,
.dropdown-item:hover,
.dropdown-item.highlighted {
    background: none !important;
    border-top-color: transparent;
}
.dropdown-menu,
.dropdown-item,
.mega-menu-content a,
.dropdown-item:hover,
.dropdown-item:focus,
.mega-menu-content a:hover,
.mega-menu-content a:focus {
    color: var(--color-white);
}
.dropdown-toggle::after {
    display: none;
}
.navbar-nav:not(.sm-collapsible) .dropdown-item.has-submenu {
    padding-right: 2rem;
}
.navbar-other .nav-item a:not(.btn),
.navbar-other .nav-item button {
    color: #303030;
    cursor: pointer;
    transition: all 200ms ease-in-out;
}
.navbar-other .nav-item+.nav-item {
    padding-left: 0.8rem;
}
.navbar-other .nav-item+.nav-item.search-dropdown {
    padding-left: 1rem !important;
}
abbr[title],
acronym[title] {
    cursor: help !important;
    text-decoration: none !important;
}
.navbar:not(.extended) .topbar {
    font-size: 0.75rem;
    padding: 0.15rem 0;
}

.bg-white {
    background: var(--color-white)
}

.shadow {
    box-shadow: var(--shadow) !important;
    transition: all 200ms ease-in-out;
}

*,
*:before,
*:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

</style>
