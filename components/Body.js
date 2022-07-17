import React from 'react'
import styles from '../styles/Home.module.css'
import peopleworking from '../public/people-working.png'
import Image from 'next/image'

const Body = () => {
    return (
        <main>
            <div>
                <div className={styles.heading}>
                    <h1 style={{ marginBottom: "-2%", marginTop: "1%" }}>MORE THAN JUST</h1>
                    <h1 style={{ marginTop: "0%" }}>SHORTER LINKS</h1>
                </div>
                <div className={styles.image}>
                    <Image
                        src={peopleworking}
                        width={450}
                        height={450}
                    />
                </div>
                <div className={styles.input}>
                    <input type="text" placeholder='Sharten a link here...' />
                    <button type='submit'>Sharten it!</button>
                </div>
                <div >
                    <div className={styles.log}>
                        <ul>
                            <li>
                                <h3>xyz3424343242342@gmail.com</h3>
                                <h3>xyz@gmail.com</h3>
                                <button>copy</button>
                            </li>
                            <li>
                                <h3>xyz3424343242342@gmail.com</h3>
                                <h3>xyz@gmail.com</h3>
                                <button>copy</button>
                            </li>
                            <li>
                                <h3>xyz3424343242342@gmail.com</h3>
                                <h3>xyz@gmail.com</h3>
                                <button>copy</button>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.info}>
                        <h1>Advanced Statistics</h1>
                        <h3>Track jow your links are performing across the web with</h3>
                        <h3 style={{marginTop:"-2%"}}>our advanced statistics dashboard</h3>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Body