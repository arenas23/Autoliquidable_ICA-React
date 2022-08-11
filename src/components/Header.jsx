import React from 'react'
import {Link} from "react-router-dom"
import '@styles/Header.scss'

const logo = '@icons/icon_menu.svg'

const Header = () => {
    return (
      <nav>
        <img src={logo} alt="menu" className="menu" />

        <div className="navbar-left">
          <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
          <ul>
            <li>
              <Link to="/autoliquidable">autoliquidable</Link>
            </li>
            <li>
              <Link to="/recovery-password">recovery password</Link>
            </li>
            <li>
              <a href="/">Electronics</a>
            </li>
            <li>
              <a href="/">Furnitures</a>
            </li>
            <li>
              <a href="/">Toys</a>
            </li>
            <li>
              <a href="/">Others</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul>
            <li className="navbar-email">platzi@example.com</li>
            <li className="navbar-shopping-cart">
              <img src="./icons/icon_shopping_cart.svg" alt="shopping cart" />
              <div>2</div>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Header;