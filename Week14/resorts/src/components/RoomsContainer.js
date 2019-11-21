// Newer way to consume context from functional component
import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import {withRoomConsumer} from '../context'
import Loading from './Loading'

function RoomContainer({context}) {
    const {loading, sortedRooms, rooms} = context
    
    if (loading) {
        return <Loading />
    }

    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    )
}

export default withRoomConsumer(RoomContainer)


/* Older way to consume context from functional component
import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import {RoomConsumer} from '../context'
import Loading from './Loading'

export default function RoomsContainer() {
    return (
        // NOTE: Hooks make this pattern less common
        <RoomConsumer>
            {
                (value) => {
                    const {loading, sortedRooms, rooms} = value

                    if (loading) {
                        return <Loading />
                    }

                    return (
                        <div>
                            Hello from rooms container
                            <RoomsFilter rooms={rooms} />
                            <RoomsList rooms={sortedRooms} />
                        </div>
                    )
                }
            }
        </RoomConsumer>
    )
}
*/