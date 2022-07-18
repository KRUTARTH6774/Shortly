import React from 'react'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import peopleworking from '../public/people-working.png'
import Image from 'next/image'
import Card from './Card'


const Body = () => {
    const dist = {}
    const [slink, setLinks] = useState('')
    const [link, setLink] = useState('')
    const fetchLink = async (link) => {
        const response = await fetch('https://api.shrtco.de/v2/shorten?url=' + link)
        const data = await response.json()
        if (link === '') {
            document.getElementById('bg-img').style.border = '5px solid #f46262'
            document.getElementById('error-msg').style.display = 'flex'
            document.getElementById('error-msg').innerHTML = 'Input field can not be empty :)'
            // alert('input field can not be empty')
        }
        else if (!data.ok) {
            document.getElementById('bg-img').style.border = '5px solid red'
            document.getElementById('error-msg').style.display = 'flex'
            document.getElementById('error-msg').innerHTML = 'Wrong input :('
            // alert('Wrong input :(')
        } else {
            setLinks(dist => ({ ...dist, [link]: data.result.short_link }))
            document.getElementById('bg-img').style.border = 'none'
            document.getElementById('error-msg').style.display = 'none'
            document.getElementById('error-msg').innerHTML = ''
        }
        setLink('')
        // setLinks(data.result.short_link)
    }
    const CopytoClipboard = (key, value) => {
        // console.log(value)
        navigator.clipboard.writeText(value)
        document.getElementById(key).innerHTML = 'Copied!'
        document.getElementById(key).style.background = 'black'
        document.getElementById(key + 'h3').style.color = 'black'
    }
    // dist[link] = slink

    // console.log(slink);
    return (
        <>
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
                    <form onSubmit={e=>{e.preventDefault()}} id='bg-img' className={styles.input}>
                        <input type="text" value={link} onChange={(e) => { setLink(e.target.value) }} placeholder='Sharten a link here...' />
                        <button onClick={() => fetchLink(link)} type='submit'>Sharten it!</button>
                    </form>
                    <p id='error-msg' style={{ display: 'none', justifyContent: "center", color: "red", fontWeight: "bold" }}></p>
                    <div >
                        <div className={styles.log}>
                            <ul>
                                {Object.entries(slink).map(([key, value]) => <li key={key}>
                                    <h3 style={{ width: "50%" }}>{key}</h3>
                                    <h3 id={key + 'h3'} style={{
                                        marginLeft: "0%",
                                        position: "relative",
                                        left: "5%"
                                    }}>{value}</h3>
                                    <button id={key} onClick={() => { CopytoClipboard(key, value) }}>copy</button>
                                </li>)}
                            </ul>
                        </div>
                        <div className={styles.info}>
                            <h1>Advanced Statistics</h1>
                            <h3>Track jow your links are performing across the web with</h3>
                            <h3 style={{ marginTop: "-2%" }}>our advanced statistics dashboard</h3>
                        </div>
                    </div>
                </div>
            </main>
            <Card />
        </>
    )
}

export default Body