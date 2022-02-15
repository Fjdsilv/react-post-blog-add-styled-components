import React from 'react'

const Posts = ({id, name, text}) => {
  return (
    <div>
        <li>
            <div className="postFeed">
            <img src="" alt="text"/>
            <div>
                <p>{text}</p>
                <h6>{name}</h6>
            </div>
            </div>
        </li>
    </div>
  )
}

export default Posts