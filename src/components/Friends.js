import React, {Component} from 'react';
import {createFragmentContainer, graphql} from 'react-relay';

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