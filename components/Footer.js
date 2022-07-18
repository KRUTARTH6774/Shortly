import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Meteror from '../public/Meteor.png'
import facebookLogo from '../public/icon-facebook.svg'
import twitterLogo from '../public/icon-twitter.svg'
import pinterestLogo from '../public/icon-pinterest.svg'
import instagramLogo from '../public/icon-instagram.svg'
const Footer = () => {
    return (
        <footer>
            <div className={styles.getStarted}>
                <h1>Boost your links today</h1>
                <button>Get Started</button>
                {/* <Image
                    src={Meteror}
                    layout="responsive"
                    // width={700}
                    height={75}
                // sizes='100vw'
                /> */}
            </div>
            <div className={styles.Fcontainer}>
                <div style={{ width: "9vw", marginLeft: "7vw" }}>
                    <h2>Shortly</h2>
                    <div className={styles.socialMediaLogos}>
                        <Image src={facebookLogo} />
                        <Image src={twitterLogo} />
                        <Image src={pinterestLogo} />
                        <Image src={instagramLogo} />
                    </div>
                </div>
                <div className={styles.collection}>
                    <div className={styles.features}>
                        <h4>Features</h4>
                        <ul>
                            <li>Link Shartening</li>
                            <li>Branded Links</li>
                            <li>Analytics</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Resources</h4>
                        <ul>
                            <li>Blog</li>
                            <li>Developers</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Company</h4>
                        <ul>
                            <li>About</li>
                            <li>Our Team</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div style={{ width: "0vw" }}></div>
            </div>
        </footer>
    )
}

export default Footer