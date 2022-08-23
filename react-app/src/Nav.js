import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function nav() {
  return (
    <Tabs 
    defaultActiveKey="profile"
    id="uncontrolled-tab-example"
    className="mb-3">
        <Tab  eventKey="home" title="Home"></Tab>
        <Tab  eventKey="map" title="Map"></Tab>

    </Tabs>
  )
}
