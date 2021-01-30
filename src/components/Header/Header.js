import React from "react";
import HeaderNavigation from "./HeaderNavigation";
import styles from './Header.module.scss'
import logoImage from  '../../assets/Images/logo.png'
import Button from "../Button/Button";

const Header = ({openModalfn}) => (
    <header className={styles.wrapper}>
        <img src={logoImage}/>
        <HeaderNavigation/>
        <Button onClick={openModalfn} secondary>new item</Button>
    </header>
);

export default Header;