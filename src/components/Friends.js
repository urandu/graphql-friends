import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {createFragment, graphql} from 'react-relay'
import FriendsList from './FriendsList'

class Friends extends Component{
    render(){
        return(
            <div>
                <div className="row">
                    <h1>Friends</h1>
                    <FriendList viewer={this.props.viewer} />
                </div>
            </div>
        )
    }
}


export default createFragmentContainer(Friends, {
    viewer:graphql`
        fragment Friends_viewer on User {
            id,
            ...FriendsList_viewer,
        }
    `,
});