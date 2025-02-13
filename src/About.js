import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom';

const About = () => {

    const [searchparams, setSearchParams] = useSearchParams();

    const showReactVideos = searchparams.get('filter') === 'react'

    console.log(showReactVideos);

    return (
        <div>
            About
            <nav>
                <Link to='videos'>Videos</Link>
                <Link to='notes'>Notes</Link>
            </nav>
            <Outlet />

            <button onClick={() => setSearchParams({ filter: 'react' })}>Apply Filter</button>
            <button onClick={() => setSearchParams({ filter: '' })}>Reset Filter</button>

            {
                showReactVideos ? <h2>All react videos</h2> : <h2>All the videos</h2>
            }



        </div>
    )
}

export default About
