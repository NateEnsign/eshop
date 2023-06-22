import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import {useStateValue} from './StateProvider'

const Header = () => {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className={styles.header}>
      <Link to='/' style={{textDecoration: "none"}}>
      <div className={styles.header__logo}>
        <StorefrontIcon className={styles.header__logoImage} fontSize="large" />
        <h2 className={styles.header__logoTitle}>EShop</h2>
      </div>
        </Link>
      <div className={styles.header__search}>
        <input type="text" className={styles.header__searchInput} />
        <SearchIcon className={styles.header__searchIcon} />
      </div>
      <div className={styles.header__nav}>
        <div className={styles.nav__item}>
          <span className={styles.nav__itemLineOne}> Hello Guest</span>
          <span className={styles.nav__itemLineTwo}>Sign In</span>
        </div>
        <div className={styles.nav__item}>
          <span className={styles.nav__itemLineOne}>Your</span>
          <span className={styles.nav__itemLineTwo}>Shop</span>
        </div>
        <Link to="checkout" style={{ textDecoration: "none" }}>
          <div className={styles.nav__itemBasket}>
            <ShoppingBasketIcon />
            <span className={styles.nav__basketCount}>{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
