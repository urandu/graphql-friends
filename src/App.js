import React from 'react'
import ReactDOM from 'react-dom'


import Friends from './components/Friends'

const mountNode = document.getElementById('root');

ReactDOM.render(
    <QueryRenderer
        environment={modernEnvironment}

        query={graphql`
            query AppQuery {
                viewer {
                    ...Friends_viewer
                 }
            }
        `}

        variables={{}}
        render = {({error, props}) => {
            if(props){
                return <Friends viewer={props.viewer} />;
            }else{
                return <div>Loading...</div>;
            }
        }}
    />,
    mountNode
);