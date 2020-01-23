import React from 'react'

const Comments = props => {
    return (
        <>
            <p>ID {props.id}</p>
            <p>NAME {props.name}</p>
            <p>BODY {props.body}</p>
            <p>EMAIL {props.email}</p>
        </>
    )
}

export default Comments
