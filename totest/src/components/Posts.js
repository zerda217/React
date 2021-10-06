import { Post } from './';
import { Link, Route } from 'react-router-dom';

const Posts = ({match}) => {
    return (
        <>
            <h3>포스트 목록</h3>
            <ul>
                <li><Link to = {`${match.url}/1`}></Link></li>
                <li><Link to = {`${match.url}/2`}></Link></li>
                <li><Link to = {`${match.url}/3`}></Link></li>
            </ul>
            <Route exact path={match.url} render={() => (<p>포스트 선택</p>)}/>
            <Route exact path={'${match.url}/:id'} component={Post}/>
        </>
    )
}

export default Posts;