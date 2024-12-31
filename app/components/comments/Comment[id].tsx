import React from 'react'
import { EditDeleteComment } from './EditDeleteComment'

type comments = {
    _id: string,
    commenterId: string,
    commenterName: string,
    text: string,
}

export const Comment = (comments: comments) => {
  return (
    <div>
        <h2>{comments.commenterName}</h2>
        <p>{comments.text}</p>
        <EditDeleteComment props={comments}/>
    </div>
  )
}
