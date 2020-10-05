import React from "react"
import { Map as ReactMap, TileLayer } from "react-leaflet"
import { showDataOnMap } from "../utils"
import "./Map.css"
const Map = (props) => {
  const { center, zoom, countries, casesType } = props
  return (
    <div className="map">
      <ReactMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </ReactMap>
    </div>
  )
}

export default Map
