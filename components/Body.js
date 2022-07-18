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
        if(link === ''){
            alert('input field can not be empty')
        }
        else if(!data.ok){
            alert('write somthing like : example.com')
        }else{
            setLinks(dist => ({ ...dist, [link]: data.result.short_link }))
        }
        setLink('')
        // setLinks(data.result.short_link)
    }
    const CopytoClipboard = (key,value)=>{
        // console.log(value)
        navigator.clipboard.writeText(value)
        document.getElementById(key).innerHTML = 'Copied!'
        document.getElementById(key).style.background = 'black'
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
                    <div className={styles.input}>
                        <input type="text" value={link} onChange={(e) => { setLink(e.target.value) }} placeholder='Sharten a link here...' />
                        <button onClick={() => fetchLink(link)} type='submit'>Sharten it!</button>
                    </div>
                    <div >
                        <div className={styles.log}>
                            <ul>
                                {Object.entries(slink).map(([key, value]) => <li key={key}>
                                    <h3>{key}</h3>
                                    <h3>{value}</h3>
                                    <button id={key} onClick={()=>{CopytoClipboard(key,value)}}>copy</button>
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