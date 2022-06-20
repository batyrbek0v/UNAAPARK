import React from 'react'
import Banner from '../../components/Banner/ContactBanner/Banner'
import ContactCard from '../../components/ContactCard/Card'
import Map from '../../components/ContactMap/Map'

const Contacts = () => {
  return (
    <React.Fragment>
      <Banner/>
      <ContactCard/>
      <Map/>
    </React.Fragment>
  )
}

export default Contacts