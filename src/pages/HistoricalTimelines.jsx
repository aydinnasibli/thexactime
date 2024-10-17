import React from 'react'
import ParallaxTimeline from '../components/ParallaxTimeline'
import logo from '../assets/suv.jpg'
import { Typography } from '@material-tailwind/react'
function HistoricalTimelines() {
    return (

        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 mb-40 space-x-0">
                <figure>
                    <img
                        className="h-96 w-full rounded-lg object-cover object-center"
                        src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                        alt="nature image"
                    />
                    <Typography as="caption" variant="small" className="mt-2  font-normal text-justfiy">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


                    </Typography>
                </figure> <figure>
                    <img
                        className="h-96 w-full rounded-lg object-cover object-center"
                        src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                        alt="nature image"
                    />
                    <Typography as="caption" variant="small" className="mt-2  font-normal text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


                    </Typography>
                </figure> <figure>
                    <img
                        className="h-96 w-full rounded-lg object-cover object-center"
                        src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                        alt="nature image"
                    />
                    <Typography as="caption" variant="small" className="mt-2  font-normal text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


                    </Typography>
                </figure>
            </div>

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