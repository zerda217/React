import React from 'react'
import {Post} from './'
import {Link, Route} from 'react-router-dom'

const Posts = ({match}) => {
    return (
        <div>
            <hr/>
            <h3>목록</h3>
            <ul>
                <li><Link to={`${match.url}/1`}>1</Link></li>
                <li><Link to={`${match.url}/2`}>2</Link></li>
                <li><Link to={`${match.url}/3`}>3</Link></li>
            </ul>
            <Route exact path={match.url} render={() => (<p>고양고양</p>)} />
            <Route exact path={`${match.url}/:id`} component={Post} />
        </div>
    )
}

export default Posts
