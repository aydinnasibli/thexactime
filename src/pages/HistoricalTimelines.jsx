import React from 'react'
import ParallaxTimeline from '../components/ParallaxTimeline'
import logo from '../assets/suv.jpg'
import { Typography } from '@material-tailwind/react'
import { CarouselTime } from '../components/CarouselX'
function HistoricalTimelines() {
    return (

        <div>
            <div><CarouselTime /></div>

            <div class="grid grid-rows-4 grid-flow-col gap-4">
                <div ><ParallaxTimeline /></div>
                <div ><ParallaxTimeline /></div>
                <div ><ParallaxTimeline /></div>
                <div ><ParallaxTimeline /></div>

            </div>
        </div>
    )
}

export default HistoricalTimelines