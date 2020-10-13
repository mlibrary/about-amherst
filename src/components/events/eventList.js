import React from "react"
import EventCard from "./eventCard"

const EventList = ({events, cardStyle}) => {
  return (
    <section className="event-card-list">
      <h2>Events</h2>
      <p className="scala-sans">Amherst College Press representatives will be attending the following events. <a href="mailto:acpress@amherst.edu">Email us</a> if you'd like to meet up.</p>
      <ul className="list-unstyled">
      {
        events.map(({node}) => {
          return <EventCard key={node.id} event={node} cardStyle={cardStyle} />
        })
      }
      </ul>
    </section>
  )
}

export default EventList
