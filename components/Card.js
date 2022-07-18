import React from 'react'
import styles from '../styles/Cardspage.module.css'
import Image from 'next/image'
import BrandRecognition from '../public/icon-brand-recognition.svg'
const Card = () => {
    return (
        <div className={styles.wrap}>
            <div>
                <div>
                    <Image src={BrandRecognition} />
                </div>
                <div>
                    <h2>Brand Recognition</h2>
                    <h4>Boost your brand recognition with each click. Generuc links don&apos;t mean a thing.Branded links help instil confidence in your content.</h4>
                </div>
            </div>
            <div>
                <div>
                    <Image src={BrandRecognition} />
                </div>
                <div>
                    <h2>Brand Recognition</h2>
                    <h4>Boost your brand recognition with each click. Generuc links don&apos;t mean a thing.Branded links help instil confidence in your content.</h4>
                </div>
            </div>
            <div>
                <div>
                    <Image src={BrandRecognition} />
                </div>
                <div>
                    <h2>Brand Recognition</h2>
                    <h4>Boost your brand recognition with each click. Generuc links don&apos;t mean a thing.Branded links help instil confidence in your content.</h4>
                </div>
            </div>
        </div>
    )
}

export default Card