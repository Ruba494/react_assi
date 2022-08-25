import React, { useRef, useEffect, useState } from "react";
import { Container, Button, InputGroup, Form } from "react-bootstrap";
import "mapbox-gl/dist/mapbox-gl.css";
import "./MapTab.css";
import "./MenuItem.css";

import geoJson from "./resturantsSample.json";

import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoicnViYWFsbXUiLCJhIjoiY2w3ODI4Z3NjMDVoMjN4bzMxZzRhaHBkYiJ9.scmjNyMgHRC5fMd-DRcoYw";

const MapTab = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(46.655865);
  const [lat, setLat] = useState(24.803056);
  const [zoom, setZoom] = useState(11.7);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    map.on("load", function () {
      // Add an image to use as a custom marker
      map.loadImage(
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALQSURBVHgBrVaxctpAEN074YTxYGSnYgxxSJcSunSRO3eJvyDwBTFfAHTpbH9BcOcSfwFyly6U6aIhwiZVBLZncDLS5S0CmwAnRMKb0Wh1e7t793b3ToIisA1sbqY/CKEspUReCMqPVR6RahOJC9//1ez1eo7Oh1g0mMlk8oax8Qlqi2JBNXz/d31RIGN2IJfbw4qNczh/RbEhClIapVTKvL+97X/WBtjd3avi9RFPklZHEhQebG2ZdHPTv5wLwCsfO/8vIIiFnfQnOxnlIOT8yReI27QeeEh+kXMi+QsJra7ROWM7LBIiyavHRkrR85UtRLB/dyd3ut2OYBmDZ9E2wuIyN0zzWQlfB9ppgurd7vfyYDBwhkNvyGMsI5FN0zSZYktnu7Hx9B4UibekR8N1OzUWuMKy2b2f4fP8mMdCnbD1i1NvEEAV9BOCEQ1weoyd1CjMEx5xhIC1cI5fJy1EXlJEcl3XtcdiaT44cVlTIpFokx6jAJ5Oy0miJXAcx4vScw60K0ilUiP6lKLTeW1IXyaTs0gLZUul1KVWrQT3B11ddWqghIPwar2wstwj1hmGeK+zDwJxIdAG6OLgmz4I1RBgYSK5ssbJXwjfly9HR0U2+6IFVxZpwcexOuv1XJvzkkymClh5Nfo4Vzb6Z38UIJfL4UKRLVojuNu5Ch8unOW7iA/Q2gatRZblY8SohlkNUgaVB3kihE2lb/u4QFU2pxr0MQBjHbsIAqMy/f3XlcmnJE7IHYiv6d/cn15fd86nR+TslERC1iji+NABiXV8P3EyOz73V+F53jCdTv8AYe9oBeBormD19ty4zmDFsm3gpisvUkidhe8LNlhKVUiN1BaHNgB+CBwpVZmWANTUea5Ob0QZo6q+RlXV+L4+ifIhKAZwZfI/0+zV2gbvxWW2kmIAHB8y15PvMe+HcWxj7YDB9wbOmBY4h3OjHMX7NP4A46IhSsOEZbgAAAAASUVORK5CYII",
        function (error, image) {
          if (error) throw error;
          map.addImage("custom-marker", image);
          // Add a GeoJSON source with multiple points
          map.addSource("points", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: geoJson.features,
            },
          });
          // Add a symbol layer
          map.addLayer({
            id: "points",
            type: "symbol",
            source: "points",
            layout: {
              "icon-image": "custom-marker",
              // get the title name from the source's "title" property

              "text-offset": [0, 1.25],
              "text-anchor": "top",
            },
          });
        }
      );
    });

    map.on("click", "points", (e) => {
      // Copy coordinates array.
      const coordinates = e.features[0].geometry.coordinates.slice();
      const title = e.features[0].properties.title;
      console.log(coordinates);

      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(
          '<div class="row"><div class="col-sm-4"> <img class="card-img" src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000"></div><div class="col-sm-8"><div class="card-body"><div class="vstack gap-4 minBreakpoint-xs"><div class="vstack gap-0 minBreakpoint-xs"><div class="card-title h5">' +
            title +
            '</div></div><div class="mt-2 hstack minBreakpoint-xs"><div class="me-auto card-subtitle h6">menu list</div><button type="button" class="btn btn-primary">&gt</button></div></div></div></div></div>'
        )
        .addTo(map);
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Container className="md me-5">
        <InputGroup className="search-bar justify-content-md-center">
          <Form.Control placeholder="Search" />

          <Button variant="outline-secondary">Search</Button>
        </InputGroup>
      </Container>
      <div className="map">
        <div ref={mapContainerRef} className="map-container"></div>
      </div>
    </>
  );
};

export default MapTab;
