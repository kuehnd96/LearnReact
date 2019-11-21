import React from 'react'
import {useContext} from 'react' // NOTE: React hook
import {RoomContext} from '../context'
import Title from './Title'

// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({rooms}) {
    // NOTE: Quick way to use react context in function component
    const context = useContext(RoomContext)
    const {handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = context;
    
    // get unique types
    let types = getUnique(rooms, 'type');
    // add 'all'
    types = ['all', ...types];
    // map to JSX
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    // get unique capacities
    let capacities = getUnique(rooms, 'capacity')
    capacities = capacities.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })
    
    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
                { /* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                { /* end select type */}
                { /* select capacity */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {capacities}
                    </select>
                </div>
                { /* end select capacity */}
                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price">
                        room price ${price}
                    </label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"/>
                </div>
                {/* end room price */}
            </form>
        </section>
    )
}