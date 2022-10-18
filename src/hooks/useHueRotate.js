import { useEffect, useState } from 'react'
import * as R from 'ramda'

export const useHueRotate = (
    numRotations = 2,
    rotateSpeed = 40,
    targetCount = 5
) => {
    const [clickCount, setClickCount] = useState(0)

    const root = document.getElementById('root')

    const rotateHue = () => {
        let hue = 0

        const intervalId = setInterval(() => {
            root.style.filter = `hue-rotate(${hue}deg)`

            if (hue < 360 * numRotations) {
                hue += 10
            } else {
                root.style.filter = null
                setClickCount(0)
                clearInterval(intervalId)
            }
        }, rotateSpeed)
    }

    const onClick = () => clickCount < targetCount && setClickCount(R.inc)

    useEffect(() => {
        if (R.equals(targetCount, clickCount)) rotateHue()
    }, [clickCount])

    useEffect(() => {
        const intervalId = setInterval(() => setClickCount(0), 5000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return {
        clickCount,
        onClick,
    }
}
