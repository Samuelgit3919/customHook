import React from 'react'

export default function Person(props) {
    const {img, name, job, } = props.Person;
    const { children } = props;
    const url= `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return (
    <div className='person'>
       <img src={url} alt="" />
       <div>
          <h4>{name}</h4>
          <h4>{job}</h4>
          {children}
       </div>
    </div>
  )
}
