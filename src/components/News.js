import React from 'react'

import {
    BrowserRouter,
    Switch,
    Route,
    NavLink,
    Link
} from 'react-router-dom'


import NewsFive from './NewsFive'
import NewsFour from './NewsFour'
import NewsThree from './NewsThree'
import NewsOne from './NewsOne'
import NewsTwo from './NewsTwo'


// Switch allows once a matched is found it exist out


const InfoNav = () => {

    return (
        <div className='nav-bar'>
            <NavLink class='nav' to='/' activeStyle={{ color: 'white' }} exact={true}>Politics</NavLink>
            <NavLink class='nav' to='/newsone' activeStyle={{ color: 'white' }}>Sports</NavLink>
            <NavLink class='nav' to='newstwo' activeStyle={{ color: 'white' }}>Entertainement</NavLink>
            <NavLink class='nav' to='newsthree' activeStyle={{ color: 'white' }}>Health</NavLink>
            <NavLink class='nav' to='/newsfour' activeStyle={{ color: 'white' }}>Money</NavLink>
        </div>
    )
}

const News = () => {

    return (


        <BrowserRouter>
            <div>

                <InfoNav />
                <Switch>

                    <Route path='/' component={NewsFive} exact />
                    <Route path='/newsfour' component={NewsFour} />
                    <Route path='/newsthree' component={NewsThree} />
                    <Route path='/newsone' component={NewsOne} />
                    <Route path='/newstwo' component={NewsTwo} />

                </Switch>

            </div>
        </BrowserRouter>

    )
}


export default News


