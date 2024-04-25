import React from 'react'
import Person from './Person'

export default function PersonList() {
    const people = [
        {
            img:22,
            name: 'john', 
            job: 'developer'
        },

        {
            img:32,
            name: 'bob', 
            job: 'designer'
        },

        {
            img:42,
            name: 'sam', 
            job: 'artist'
        },
    ]


  return (
        <section>
            <Person Person={people[0]}/>
            <Person Person={people[1]}>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Omnis praesentium ducimus odit sunt incidunt nam.
            </Person>
            <Person Person={people[2]}/>
        </section>
   
  )
}
