// In order to prevent the first render from being different you can use `useEffect` which is only executed in the browser and is executed during hydration
import { useEffect, useState } from 'react'
import React from 'react'

export const about = () => {
    const [color, setColor] = useState('blue')
    useEffect(() => setColor('red'), [])

    return <h1 className={`title ${color}`}>Hello World!</h1>
}
export default about