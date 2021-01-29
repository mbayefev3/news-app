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
            <NavLink class='nav' to='/' exact={true}>Politics</NavLink>
            <NavLink class='nav' to='/newsone'>Sports</NavLink>
            <NavLink class='nav' to='newstwo'>Entertainement</NavLink>
            <NavLink class='nav' to='newsthree'>Health</NavLink>
            <NavLink class='nav' to='/newsfour'>Money</NavLink>
        </div>
    )
}

const News = () => {

    return (
        <div>

            <BrowserRouter>
                <InfoNav />
                <Switch>

                    <Route path='/' component={NewsFive} exact />
                    <Route path='/newsfour' component={NewsFour} />
                    <Route path='/newsthree' component={NewsThree} />
                    <Route path='/newsone' component={NewsOne} />
                    <Route path='/newstwo' component={NewsTwo} />

                </Switch>

            </BrowserRouter>
        </div>
    )
}


export default News


