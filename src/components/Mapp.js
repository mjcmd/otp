import React from 'react'
import { useEffect, useState} from 'react';
import Navbar from './Navbar';
import InputForm from './InputForm';
import './css/mapp.css'
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';

var polyline = require('@mapbox/polyline');


// import'./images/marker-flag-start-shadowed.png/'
// import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
// import Map from 'leaflet'

var map;
var L;
let itineraryJson ;

export default function Mapp() {
    const [thumbnailClick, setThumbnailClick] = useState(-1);
    const [itinerary, setItinerary] = useState({})

    useEffect(() => {

        console.log("Mappjs:useEffect started...")
        
        // testData = [];

        

        if(map === undefined){
            console.log("should exist once only...")
            L = window.L;
            map = L.map('map', {closePopupOnClick: false}).setView([28.7041, 77.1025], 11);

            const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
            const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

            const tiles = L.tileLayer(tileUrl, {attribution});
            tiles.addTo(map);
        }

        // if(thumbnailClick === -2){

        //   map.eachLayer(function (layer){
        //     map.removeLayer(layer);
        //   });

        //   const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        //   const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

        //   const tiles = L.tileLayer(tileUrl, {attribution});
        //   tiles.addTo(map);
        // }

        var latlngs = [];
        
        
        if(thumbnailClick !== -1){
                
            map.eachLayer(function (layer){
                map.removeLayer(layer);
            });

            const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
            const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

            const tiles = L.tileLayer(tileUrl, {attribution});
            tiles.addTo(map);
            
            // ##########for testing##############################
            // var testCircle = L.circleMarker([28.7041, 77.1025], {radius: 10, color: 'black', fillColor: 'rgba(200, 200, 200, 1)', weight: '2', fillOpacity: '1'});
            // testCircle.bindTooltip( `<div>Test Data</div>`, {className: 'myCSSClass'} )
            // .on('dblclick', function (e) {
            //   this.openTooltip();
            // });
            // testCircle.addTo(map);

            //#################################################layers############
            var multiSegments = [];
            // multiSegments.push(testCircle);

            for (let i=0; i < itinerary.legs.length && itinerary.legs.length !== 0; i++){


                console.log(itinerary.legs[i].legGeometry.points);
                console.log("decoded...");
                console.log(polyline.decode(itinerary.legs[i].legGeometry.points));

                // var legLatlngs = polyline.decode(itinerary.legs[i].legGeometry.points);


                // var legPolyline = L.polyline(legLatlngs, {color: 'rgba(0,255,0,1)', weight: '8'}); //.addTo(map);
                // multiSegments.push(legPolyline);
               
                if(itinerary.legs[i].mode === "WALK"){
                    console.log("walk leg");

                    // var walkLatLngs = [];

                    var walkLatLngs = polyline.decode(itinerary.legs[i].legGeometry.points);
                    var walkPolyline = L.polyline(walkLatLngs, {color: 'rgba(113,110,119,1)', weight: '8'}).bringToBack(); //.addTo(map); //rgba(128, 127, 127, .6)
                    walkPolyline.bindTooltip( `<div> <i  class="material-icons" style="font-size:26px; vertical-align:middle;"> directions_walk</i>  WALK to ${itinerary.legs[i].to.name} (${(itinerary.legs[i].distance*0.00062137).toFixed(2)}miles)</div>`, {className: 'toolTipClass'} ).on('mouseover', function (e) {
                        this.openTooltip();
                      }).on('mousemove', function (e) {
                        this.openTooltip(e.latlng);
                      }).on('mouseout', function (e) {
                        this.closeTooltip();
                      });
                    multiSegments.push(walkPolyline);

                    // var from = [];
                    // from.push(itinerary.legs[i].from.lat);
                    // from.push(itinerary.legs[i].from.lon);
                    // // walkLatLngs.push(from);
                    // var fromCircle = L.circleMarker(from, {radius: 5.5, color: 'black', fillColor: 'rgba(255,255,255, 1)', weight: '2', fillOpacity: '1'});
                    // fromCircle.bindPopup( `<div> ${itinerary.legs[i].mode}, at ${(new Date(itinerary.legs[i].startTime)).toString().slice(16, 21)}</div>` ).on('mouseover', function (e) {
                    //         this.openPopup();
                    //       }).on('mouseout', function (e) {
                    //         this.closePopup();
                    //       });
                    // multiSegments.push(fromCircle);

                    for (let j=0; j < itinerary.legs[i].steps.length && itinerary.legs[i].steps.length !== 0; j++){


                        let direction = itinerary.legs[i].steps[j].relativeDirection ;
                        let streetName = itinerary.legs[i].steps[j].streetName ;
                        let stepDistance = itinerary.legs[i].steps[j].distance*0.00062137;
                        let absoluteDir = itinerary.legs[i].steps[j].absoluteDirection;
                        let bogusName = itinerary.legs[i].steps[j].bogusName;

                        var temp2 = [];
                        temp2.push(itinerary.legs[i].steps[j].lat);
                        temp2.push(itinerary.legs[i].steps[j].lon);
                        
                        var stepCircle = L.circleMarker(temp2, {radius: 5.5, color: 'black', fillColor: 'rgba(200, 200, 200, 1)', weight: '2', fillOpacity: '1'});

                        switch(direction){
                          case "DEPART": stepCircle.bindPopup( `<div> <i class="material-icons" style="font-size:22px; vertical-align:middle;"> straight </i> Start on ${bogusName?"path":streetName} heading ${absoluteDir}  (${(itinerary.legs[i].steps[j].distance*0.00062137).toFixed(2)}miles)</div>` )
                          break;

                          case "HARD_LEFT": stepCircle.bindPopup( `<div> <img src=${require('./images/turnSharpLeft.png')} alt="turnSharpLeft" width="30" height="30" /> HARD LEFT on to ${bogusName?"path":streetName} (${(itinerary.legs[i].steps[j].distance*0.00062137).toFixed(2)}miles)</div>` )
                          break;

                          case "HARD_RIGHT": stepCircle.bindPopup( `<div> <img src=${require('./images/turnSharpRight.png')} alt="turnSharpRight" width="30" height="30" /> HARD RIGHT on to ${bogusName?"path":streetName}   (${(itinerary.legs[i].steps[j].distance*0.00062137).toFixed(2)}miles)</div>` )
                          break;

                          case "LEFT": stepCircle.bindPopup( `<div> <i class="material-icons" style="font-size:22px; vertical-align:middle;"> turn_left </i> LEFT on to ${bogusName?"path":streetName}  (${(itinerary.legs[i].steps[j].distance*0.00062137).toFixed(2)}miles)</div>` )
                          break;

                          case "RIGHT": stepCircle.bindPopup( `<div> <i class="material-icons" style="font-size:22px; vertical-align:middle;"> turn_right </i> RIGHT on to ${bogusName?"path":streetName}   (${(itinerary.legs[i].steps[j].distance*0.00062137).toFixed(2)}miles)</div>` )
                          break;

                          case "SLIGHTLY_LEFT": stepCircle.bindPopup( `<div> <i class="material-icons" style="font-size:22px; vertical-align:middle;"> turn_slight_left </i> SLIGHTLY LEFT on to ${bogusName?"path":streetName}  (${(itinerary.legs[i].steps[j].distance*0.00062137).toFixed(2)}miles)</div>` )
                          break;

                          case "SLIGHTLY_RIGHT": stepCircle.bindPopup( `<div> <i class="material-icons" style="font-size:22px; vertical-align:middle;"> turn_slight_right </i> SLIGHTLY RIGHT on to ${bogusName?"path":streetName} (${(itinerary.legs[i].steps[j].distance*0.00062137).toFixed(2)}miles)</div>` )
                          break;

                          case "CONTINUE": stepCircle.bindPopup( `<div style=""> <i class="material-icons" style="font-size:22px; vertical-align:middle;"> straight </i> Continue on to ${bogusName?"path":streetName}  (${(itinerary.legs[i].steps[j].distance*0.00062137).toFixed(2)}miles)</div>` )
                          break;

                          case "CIRCLE_CLOCKWISE": stepCircle.bindPopup( `<div> <i class="material-icons" style="font-size:22px; vertical-align:middle;"> roundabout_right </i> Take roundabout clockwise to ${itinerary.legs[i].steps[j].exit} exit on ${bogusName?"path":streetName}}  (${(itinerary.legs[i].steps[j].distance*0.00062137).toFixed(2)}miles)</div>` )
                          break;

                          case "CIRCLE_COUNTERCLOCKWISE": stepCircle.bindPopup( `<div> <i class="material-icons" style="font-size:22px; vertical-align:middle;"> roundabout_left </i> Take roundabout counterclockwise to ${itinerary.legs[i].steps[j].exit} exit on ${bogusName?"path":streetName}}  (${(itinerary.legs[i].steps[j].distance*0.00062137).toFixed(2)}miles)</div>` )
                          break;

                          case "UTURN_LEFT": stepCircle.bindPopup( `<div> <i class="material-icons" style="font-size:22px; vertical-align:middle;"> u_turn_left </i> U-TURN LEFT to continue on ${bogusName?"path":streetName}  (${(itinerary.legs[i].steps[j].distance*0.00062137).toFixed(2)}miles)</div>` )
                          break;

                          case "UTURN_RIGHT": stepCircle.bindPopup( `<div> <i class="material-icons" style="font-size:22px; vertical-align:middle;"> u_turn_right </i> U-TURN RIGHT to continue on ${bogusName?"path":streetName}  (${(itinerary.legs[i].steps[j].distance*0.00062137).toFixed(2)}miles)</div>` )
                          break;

                          default: stepCircle.bindPopup( `<div> <i class="material-icons" style="font-size:22px; vertical-align:middle;"> elevator </i> Use Elevator  (${(itinerary.legs[i].steps[j].distance*0.00062137).toFixed(2)}miles)</div>` )
                          // .on('mouseover', function (e) {
                          //   this.openPopup();
                          // }).on('mouseout', function (e) {
                          //   this.closePopup();
                          // });
                          
                        }

                        // var stepCircle = L.circleMarker(temp2, {radius: 5.5, color: 'black', fillColor: 'rgba(200, 200, 200, 1)', weight: '2', fillOpacity: '1'});
                        // stepCircle.bindPopup( `<div> ${itinerary.legs[i].steps[j].relativeDirection}, ${itinerary.legs[i].steps[j].streetName === 'link'? 'path': itinerary.legs[i].steps[j].streetName} (${(itinerary.legs[i].steps[j].distance*0.00062137).toFixed(2)}miles)</div>` ).on('mouseover', function (e) {
                        //     this.openPopup();
                        //   }).on('mouseout', function (e) {
                        //     this.closePopup();
                        //   });

                        stepCircle.on('mouseover', function (e) {
                          this.openPopup();
                        }).on('mouseout', function (e) {
                          this.closePopup();
                        });
                        // stepCircle.on('add', function (e) {
                        //   e.target.openPopup();
                        // });
                        multiSegments.push(stepCircle);
                    }
                    
                }
                
                if(itinerary.legs[i].mode === "BUS"){
                    console.log("bus leg")

                //     var busLatLngs = [];
                    var busLatLngs = polyline.decode(itinerary.legs[i].legGeometry.points);
                    var busPolyline = L.polyline(busLatLngs, {color: 'rgba(0,160,62,1)', weight: '8'}).bringToBack(); //.addTo(map);  rgba(0,255,0,.6)
                    busPolyline.bindTooltip( `<div> <i class="material-icons" style="font-size:26px; vertical-align:middle;"> directions_bus</i> BUS[${itinerary.legs[i].route}] to ${itinerary.legs[i].to.name} (${(itinerary.legs[i].distance*0.00062137).toFixed(2)}miles) </div>`, {className: 'toolTipClass'} )
                      .on('mouseover', function (e) {
                        this.openTooltip();
                      }).on('mousemove', function (e) {
                        this.openTooltip(e.latlng);
                        // console.log(e);
                      }).on('mouseout', function (e) {
                        this.closeTooltip();
                      });

                    multiSegments.push(busPolyline);

                    

                //     for (let j=0; j < itinerary.legs[i].intermediateStops.length && itinerary.legs[i].intermediateStops.length !== 0; j++){
                //         var temp3 = [];
                //         temp3.push(itinerary.legs[i].intermediateStops[j].lat);
                //         temp3.push(itinerary.legs[i].intermediateStops[j].lon);
                //         busLatLngs.push(temp3);
                //     }

                //     var to = [];
                //     to.push(itinerary.legs[i].to.lat);
                //     to.push(itinerary.legs[i].to.lon);
                //     busLatLngs.push(to);
                    
                }

                // var fromCircle = L.circleMarker([itinerary.legs[i].from.lat, itinerary.legs[i].from.lon], {radius: 6, color: 'black', fillColor: 'white', weight: '2', fillOpacity: '1'});
                // multiSegments.push(fromCircle);
            
            }

            // for from and to circles of BUS leg
            for (let i=0; i < itinerary.legs.length && itinerary.legs.length !== 0; i++){
                
                if(itinerary.legs[i].mode === "BUS"){

                  var fromCircle = L.circleMarker([itinerary.legs[i].from.lat, itinerary.legs[i].from.lon], {radius: 5.5, color: 'black', fillColor: 'red', weight: '2', fillOpacity: '1'});
                  fromCircle.bindTooltip( `<div> <i class="material-icons" style="font-size:26px; vertical-align:middle;"> directions_bus</i> BUS[${itinerary.legs[i].route}], ${itinerary.legs[i].from.name} </div>`, {className: 'startStopStickyToolTipClass', autoClose: false, autoPan: false, permanent: true , offset: [90, 0], direction: 'auto'} )
                      .on('add', function (e) {
                          e.target.openTooltip();
                        })
                      .on('click', function (e) {
                          e.target.toggleTooltip();
                        });
                  multiSegments.push(fromCircle);

                    // var toCircle = L.circleMarker([itinerary.legs[i].to.lat, itinerary.legs[i].to.lon], {radius: 5.5, color: 'black', fillColor: 'red', weight: '2', fillOpacity: '1'}).bringToFront();
                    // toCircle.bindPopup( `<div>${itinerary.legs[i].to.name} </div>`, {autoClose: false, autoPan: false} )
                    // .on('add', function (e) {
                    //   e.target.openPopup();
                    // });
                    // multiSegments.push(toCircle);

                }
            }

            for (let i=0; i < itinerary.legs.length && itinerary.legs.length !== 0; i++){
                
              if(itinerary.legs[i].mode === "BUS"){

                  var toCircle = L.circleMarker([itinerary.legs[i].to.lat, itinerary.legs[i].to.lon], {radius: 5.5, color: 'black', fillColor: 'red', weight: '2', fillOpacity: '1'}).bringToFront();
                  toCircle.bindTooltip( `<div>${itinerary.legs[i].to.name} </div>`, {className: 'endStopStickyToolTipClass', autoClose: false, autoPan: false , permanent: true, offset: [40, 0], direction: "auto"} )
                  .on('add', function (e) {
                    e.target.openTooltip();
                  })
                  .on('click', function (e) {
                    e.target.toggleTooltip();
                  });
                  multiSegments.push(toCircle);

                //  multiSegments.push(stops);
              }
          }




            var startCircle = L.circleMarker([itinerary.legs[0].from.lat, itinerary.legs[0].from.lon], {radius: 6, color: 'black', fillColor: 'red', weight: '2', fillOpacity: '1'});
            // startCircle.bindPopup( `<div>Start</div>`).on('mouseover', function (e) {
            //     this.openPopup();
            //   }).on('mouseout', function (e) {
            //     this.closePopup();
            //   });
            multiSegments.push(startCircle);
            
            var endCircle = L.circleMarker([itinerary.legs[itinerary.legs.length - 1].to.lat, itinerary.legs[itinerary.legs.length - 1].to.lon], {radius: 6, color: 'black', fillColor: 'red', weight: '2', fillOpacity: '1'});
            // endCircle.bindPopup( `<div>Destination</div>`).on('mouseover', function (e) {
            //     this.openPopup();
            //   }).on('mouseout', function (e) {
            //     this.closePopup();
            //   });
            multiSegments.push(endCircle);

            const startFlagIcon = L.icon({
                iconUrl: "http://localhost:8080/images/marker-flag-start-shadowed.png",
                iconSize:     [50, 50], // size of the icon
                iconAnchor: [44, 40],
                popupAnchor: [0, -30]
                });
            var startMarker = L.marker([itinerary.legs[0].from.lat, itinerary.legs[0].from.lon], {icon:startFlagIcon});
            startMarker.bindTooltip( `<div>Start</div>`, {className: 'toolTipClass'}).on('mouseover', function (e) {
                this.openTooltip();
              }).on('mouseout', function (e) {
                this.closeTooltip();
              });
            multiSegments.push(startMarker);

            const endFlagIcon = L.icon({
                iconUrl: "http://localhost:8080/images/marker-flag-end-shadowed.png",
                // popupAnchor: [100, 100],
                iconSize:     [50, 50], // size of the icon
                iconAnchor: [44, 40], 
                popupAnchor: [0, -30]
                
                });
            let endMarker = L.marker([itinerary.legs[itinerary.legs.length - 1].to.lat, itinerary.legs[itinerary.legs.length - 1].to.lon], {icon:endFlagIcon});
            endMarker.bindTooltip( `<div>Destination</div>`, {className: 'toolTipClass'}).on('mouseover', function (e) {
                this.openTooltip();
              }).on('mouseout', function (e) {
                this.closeTooltip();
              });
            multiSegments.push(endMarker);
            
            

            var multiSegmentPolyline = L.featureGroup(multiSegments).addTo(map);
            map.fitBounds(multiSegmentPolyline.getBounds());

        }

        if(thumbnailClick !== 0){
            console.log(itinerary);
            // console.log(itineraryJson);
        }
            
        // console.log(`thumbnailClick:${thumbnailClick}, itinerary:${itineraryJson}`);

        // for( let i = 0; i< itineraryJson.length; i++)
        // {
        //     console.log(itineraryJson[i]);
        // }


    //     // const mapid = document.getElementById("map");
        
    //         var map = L.map('map').setView([52.505, -0.08], 13);
    //         const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    //         const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    //         var tile = L.tileLayer(tileUrl, {attribution})
    //         tile.addTo(map);
    //         // var bikesafety = new L.TileLayer(
    //         //     'http://localhost:8080/otp/routers/default/inspector/tile/bike-safety/{z}/{x}/{y}.png',
    //         //     { maxZoom : 22 });
             
    //         //  L.control.layers(null, { "Bike safety": bikesafety }).addTo(map);
          
        }, [thumbnailClick, itinerary]);
    
    const itinerariesData = (curInd, itineraryJson) => {
        console.log("itinerariesData started ...");
        console.log(`cpt ${curInd}`);
        setThumbnailClick(curInd);
        setItinerary(itineraryJson);

        
        //   map.removeLayer(polyline);

        //   var startFlagIcon = L.icon({
        //     iconUrl: "http://localhost:8080/images/marker-flag-start-shadowed.png",
        //     iconSize:     [38, 95], // size of the icon
        //   });
        //   L.marker([itineraryJson.legs[0].from.lat, itineraryJson.legs[0].from.lon], {icon: startFlagIcon}).addTo(map);
        

        
    }

        
  return (
    <>
        {/* <MapContainer center={[51.505, -0.09]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer> */}


        <div>
            <Navbar/>
            <div id="map"> </div>
            {/* <InputForm style={{position: "absolute", bottom: "50%", zIndex: "1000"}}/> */}
            <div style={{position: "absolute", top: "40px", left: "0px", right: "0px", zIndex: "400"}} > <InputForm itinerariesData={itinerariesData}/> </div>
            {/* style={{position: "absolute", top: "20px",  left: "20%", zIndex: "400"}} */}
        </div>
        

        {/* <button className='testBtn' style={{position: "absolute",  top: "20px", right: "20px", padding: "10px", zIndex: "1"}}>Test Click</button> */}
        {/* <div style={{position: "absolute", top: "20px", right: "20px", zIndex: "404"}}><h1 >Click ClickClickClickClickClickClick</h1></div> */}
        {/* <InputForm style={{position: "absolute", top: "10px", right: "20px", zIndex: "404"}}/> */}
    </>
    
  )
}
