import React from 'react';
import logo from '../assets/logo.png';
import Link from 'next/link';
import classes from './main-header.module.css';
import Image from 'next/image';

export default function MainHeader() {
    return (
        <header className={classes.header}>
            <Link className={classes.logo} href='/'>
                <Image src={logo} alt='Site Logo' priority />
                NextLevel Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href='/meals'>Browse Meals</Link>
                    </li>
                    <li>
                        <Link href='/community'>Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
