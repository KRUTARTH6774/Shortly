import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className={styles.list}>
                <ul>
                    <li style={{ fontSize: "35px", color: "#35323e" }}>Shortly</li>
                    <li><Link href="/#">Features</Link></li>
                    <li><Link href="/#">Pricing</Link></li>
                    <li><Link href="/#">Resources</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar