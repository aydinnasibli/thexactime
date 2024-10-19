import React from 'react'
import ParallaxTimeline from '../components/ParallaxTimeline'
import logo from '../assets/suv.jpg'
import { Typography } from '@material-tailwind/react'

function HistoricalTimelines() {
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-rows-4 grid-flow-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 mb-40 gap-y-10 sm:gap-x-5">
                    {/* Image 1 */}
                    <figure className="flex flex-col items-center">
                        <img
                            className="h-64 w-full sm:h-80 sm:w-80 rounded-lg object-cover object-center"
                            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                            alt="nature image"
                        />
                        <Typography as="caption" variant="small" className="mt-2 text-center font-normal">
                            Image caption
                        </Typography>
                    </figure>

                    {/* Image 2 */}
                    <figure className="flex flex-col items-center">
                        <img
                            className="h-64 w-full sm:h-80 sm:w-80 rounded-lg object-cover object-center"
                            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                            alt="nature image"
                        />
                        <Typography as="caption" variant="small" className="mt-2 text-center font-normal">
                            Image caption
                        </Typography>
                    </figure>

                    {/* Image 3 */}
                    <figure className="flex flex-col items-center">
                        <img
                            className="h-64 w-full sm:h-80 sm:w-80 rounded-lg object-cover object-center"
                            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                            alt="nature image"
                        />
                        <Typography as="caption" variant="small" className="mt-2 text-center font-normal">
                            Image caption
                        </Typography>
                    </figure>
                </div>

                {/* Parallax Timeline */}
                <div className="mt-10">
                    <ParallaxTimeline />
                </div>
            </div>
        </div>
    )
}

export default HistoricalTimelines
