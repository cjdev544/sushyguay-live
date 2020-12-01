import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, Circle, LayerGroup } from "react-leaflet"
import { css } from '@emotion/core'
import QueryHomePage from '../queries/homePage'



const InfoMap = () => {

    const { coordenadasParaMapa } = QueryHomePage()
    const { latitude, longitude } = coordenadasParaMapa

    const position = [latitude, longitude]

    const greenOptions = { color: 'gray', fillColor: 'gray' }

    return (
        <MapContainer 
            center={position} 
            zoom={13} 
            scrollWheelZoom={false}
            css={ css`
                height: 100%;
                z-index: 2;
            `}
        >
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LayerGroup>
                <Circle
                    center={position}
                    pathOptions={greenOptions}
                    radius={1000}
                />
            </LayerGroup>
            <Marker position={position}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
        </MapContainer>
    )
}
export default InfoMap
