import React from 'react'

function List(props) {
    props.list.map(item => {
        return (<div key={item.objectId}>
            <span>{item.title}</span>
        </div>
        );
    })
}

export default List
