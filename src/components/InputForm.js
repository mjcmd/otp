// import React, { createContext, useState } from 'react'
// import React, {useRef, useState, useEffect} from "react";
import Itineraries from "./Itineraries";
// import FormState from "../context/inputForm/FormState";
import React, { useState, useEffect } from 'react'
// import Itineraries from './Itineraries';
// import { useCallback } from "react";
// const State = createContext();

import './images/g3.png'
import Spinner from "./Spinner";

 
let cards = [];
let pushedInd = [0];
let pushedIndex = 0;


const apiKey = "AIzaSyAc3i0GAN-Vzw7ZPK4FMR4RBXyKs7KTWow";
const mapApiJs = "https://maps.googleapis.com/maps/api/js"
function loadAsyncScript(src){
  return new Promise(resolve => {
    const script = document.createElement("script");
    Object.assign(script, {
      type: "text/javascript",
      async: true, 
      src
    })
    script.addEventListener("load", () => resolve(script));
    document.head.appendChild(script);
  })
}

const InputForm = React.memo((props) => {

 
  

  // const [noChange, setNoChange] = useState("constant");

  const [planJson, setPlanJson] = useState(null);

  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [mode, setMode] = useState("WALK");

  const [correctAddress, setCorrectAddress] = useState(false);
  const [errAya, setErrAya] = useState(false);
  const [clickPlanTrip, setClickPlanTrip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [startCaption, setStartCaption] = useState("");
  const [endCaption, setEndCaption] = useState("");


  const initMapScript = () => {
    if(window.google){
      return Promise.resolve();
    }
    const src = `${mapApiJs}?key=${apiKey}&libraries=places`;
    return loadAsyncScript(src);
  }

  let autocomplete1, autocomplete2;
  function initAutocomplete() {
    autocomplete1 = new window.google.maps.places.Autocomplete(
      document.getElementById('autocomplete1'),
      {
        types: ['establishment'], 
        componentRestrictions: {'country': ['US']},
        fields: ['geometry', 'name']
      }
    );
    autocomplete1.addListener('place_changed', onPlaceChanged1);

    autocomplete2 = new window.google.maps.places.Autocomplete(
      document.getElementById('autocomplete2'),
      {
        types: ['establishment'], 
        componentRestrictions: {'country': ['US']},
        fields: ['geometry', 'name']
      }
    );
    autocomplete2.addListener('place_changed', onPlaceChanged2);
    
  }
  function onPlaceChanged1() {
    var place = autocomplete1.getPlace();

    if(!place.geometry) {
      // User did not select a prediction; reset the input field
      document.getElementById('autocomplete1').placeholder = 'Enter a place';
    }
    else{
      // Display details about the valid place
      // document.getElementById('details').innerHTML = place.name;
      setStart(place.name);
      setStartCaption(document.getElementById('autocomplete1').value);
      console.log("complete Addr", document.getElementById('autocomplete1').value);

      console.log("place:", place)

      // document.getElementById('details').innerHTML = start;      

    }
  }
  function onPlaceChanged2() {
    var place = autocomplete2.getPlace();

    if(!place.geometry) {
      // User did not select a prediction; reset the input field
      document.getElementById('autocomplete2').placeholder = 'Enter a place';
    }
    else{
      // Display details about the valid place
      // document.getElementById('details').innerHTML = place.name;
      setEnd(place.name);
      setEndCaption(document.getElementById('autocomplete2').value);
      console.log("End selected", end)
      // document.getElementById('details').innerHTML = start;      

    }
  }
  useEffect(() => {
    console.log(`clickPlanTrip state:${clickPlanTrip}`);
    if(clickPlanTrip > 1 && props.map != undefined){
      props.map.eachLayer(function (layer){
        props.map.removeLayer(layer);
      });

      const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

      const tiles = props.L.tileLayer(tileUrl, {attribution});
      tiles.addTo(props.map);
    }
  
  

    initMapScript().then(() => {
      initAutocomplete();
      // console.log("map loaded", window.google)
    }) 


    
    // let autocomplete;
    // function initAutocomplete() {
    //   autocomplete = new window.google.maps.places.Autocomplete(
    //     document.getElementById('autocomplete'),
    //     {
    //       types: ['establishment'], 
    //       componentRestrictions: {'country': ['IN']},
    //       fields: ['geometry', 'name']
    //     }
    //   );
    //   autocomplete.addListener('place_changed', onPlaceChanged);
    // }
  
    // function onPlaceChanged() {
    //   var place = autocomplete.getPlace();
  
    //   if(!place.geometry) {
    //     // User did not select a prediction; reset the input field
    //     document.getElementById('autocomplete').placeholder = 'Enter a place';
    //   }
    //   else{
    //     // Display details about the valid place
    //     document.getElementById('details').innerHTML = place.name;
    //   }
    // }

  }, [clickPlanTrip])


  const coord = async (inputAddress) => {

    let arr = inputAddress.split(" ");
    let qstr1 = "";
    for (let i = 0; i<arr.length; i++){
        qstr1 += `${arr[i]}+`;
    }

    let params = {
        q: qstr1.slice(0, qstr1.length-1)
    }

    // for google api
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${params.q}&key=AIzaSyAc3i0GAN-Vzw7ZPK4FMR4RBXyKs7KTWow`

    // for nomitanim api
    // let url = `https://nominatim.openstreetmap.org/?addressdetails=1&q=${params.q}&format=json&limit=1&countrycodes=US&viewbox=-94.0432,28.8551,-88.7584,33.0195&bounded=1`;

    // for shreveport only -93.947845,32.332691,-93.679715,32.58994
    
    // for delhi     let url = `https://nominatim.openstreetmap.org/?addressdetails=1&q=${params.q}&format=json&limit=1&countrycodes=IN&viewbox=76.838835,28.404625,77.346301,28.883446&bounded=1`;

    
    // console.log(url);
    let data = await fetch(url);
    let parsedData = await data.json();
    let addresses = parsedData;

    // if(addresses.length !== 0){
    if(addresses.status === 'OK'){

      return `${addresses.results[0].geometry.location.lat}, ${addresses.results[0].geometry.location.lng}`
        // return `${addresses[0].lat}, ${addresses[0].lon}`;
    }
    else {
        return '';
    }
     
    // setLatLon(`${addresses[0].lat}, ${addresses[0].lon}`);
    // console.log(latLon);
  };

  let addressErrorMsg = [];
  // let err = "";
  const [err, setErr] = useState("");
  // let correctAddress = false;

 
  const tripInput = async (e) => {

    setClickPlanTrip(clickPlanTrip + 1);
    // if(document.getElementById('planTrip').clicked == true){
    //   cards = [];
    //   pushedInd = [0];
    // }

    
    console.log(`loading: ${loading}`)
    

    setCorrectAddress(false);
    console.log("tripInput Func begins...");
    let inp = {
        start: start,
        end: end,
        time: time,
        date: date,
        mode: mode
    };

    // geocoding from NOMINATIM API
    // let x = await coord(inp.start, inp.end);

    // let start = inp.start;
    // let end = inp.end;
    
    setLoading(true);
    let fromPlace =  await coord(inp.start);  // "28.7495,77.1184" //
    // for DTU lat long: "28.7495,77.1184"
    
    let toPlace =  await coord(inp.end);  //"28.6304,77.2177"  //
    // for Connaught Place lat long: "28.6304,77.2177"
    

    if( fromPlace.length !== 0 && toPlace.length !== 0){

        cards = [];
        pushedInd = [0];

        // document.getElementsByClassName("tripPlan").style.bo = "hidden";

        console.log("you got correct addresses");
        
        // correctAddress = true;
        // console.log(correctAddress);
        let url = `http://localhost:8080/otp/routers/default/plan?mode=${inp.mode}&fromPlace=${fromPlace}&toPlace=${toPlace}&date=${inp.date}&time=${inp.time}&showIntermediateStops=true&arriveBy=false&wheelchair=false&locale=en&debugItineraryFilter=false`; 
        console.log(url);
        console.log(`loading: ${loading}`);
        
        console.log(`loading: ${loading}`)
        console.log("waiting..");
        let data = await fetch(url);
        let parsedData = await data.json();
        setPlanJson(parsedData.plan);
        setLoading(false);
        console.log(`loading: ${loading}`)
        setCorrectAddress(true);
        // addressErrorMsg.push(<div key={5}><Itineraries plan={planJson}></Itineraries></div>);
        console.log(planJson);
        


        // addressErrorMsg.push(<Itineraries key={0} plan={planJson}></Itineraries>);
    }
    else if(fromPlace.length !== 0){
        setLoading(false);
        addressErrorMsg.push(<h4 key={1}>Enter Correct End Address</h4>);
        console.log("put correct toPlace");
        setErrAya(true);
        setErr("Enter Correct End Address");
    }
    else if(toPlace.length !== 0) {
        setLoading(false);
        addressErrorMsg.push(<h4 key={2}>Enter Correct Start Address</h4>);
        console.log("put correct fromPlace");
        setErrAya(true);
        setErr("Enter Correct Start Address");
    }
    else{
        setLoading(false);
        addressErrorMsg.push(<h4 key={3}>Enter Correct Addresses</h4>);
        console.log("put correct addresses");
        setErrAya(true);
        setErr("Enter Correct Addresses");
    }
    // console.log(`${fromPlace} ${toPlace}`)


    // #################### geocoding finished

    
    // let url = `http://localhost:8080/otp/routers/default/plan?mode=${inp.mode}&fromPlace=${fromPlace}&toPlace=${toPlace}&date=${inp.date}&time=${inp.time}&numItineraries=5`; 
    // console.log(url);
    // console.log("waiting..")
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // setPlanJson(parsedData.plan);
    // console.log(planJson);
  }

 

    return (
      <>
      {/* {loading && <div className="text-center"><Spinner/> </div>} */}
      <div className="mapo" style={{height: "4rem", marginTop: "0px"}} >
        <div className="my-4" style={{display: "flex", justifyContent: "center"}}>

          <form className="row g-4" style={{height: "4rem"}}>

            <div className="col-auto" style={{height: "68%"}}>
              <label htmlFor="autocomplete1" className="visually-hidden">Start</label>
              <input  type="text" className="form-control" id="autocomplete1" placeholder="Enter source address"/> 
              <div style={{width: "200px", fontSize: "13px"}}>{startCaption}</div>

              {/* <input onChange={(e) => {setStart(e.target.value)}} type="text" className="form-control" id="start" placeholder="Enter source address"/>  */}
            </div>

            <div className="col-auto" style={{height: "68%"}}>
              <label htmlFor="autocomplete2" className="visually-hidden">End</label>
              <input  type="text" className="form-control" id="autocomplete2" placeholder="Enter Destination address"/> 
              <div style={{width: "200px", fontSize: "13px"}}>{endCaption}</div>
              {/* <input onChange={(e) => {setEnd(e.target.value); }} type="text" className="form-control" id="end" placeholder="Enter destination address"/> */}
            </div>

            <div className="col-auto" style={{height: "40px"}}>
              <label htmlFor="timee" className="visually-hidden">Date</label>
              <input onChange={(e) => {setTime(e.target.value)}} type="time" className="form-control" id="timee" placeholder="Time"/>
            </div>

            <div className="col-auto" style={{height: "40px"}}>
              <label htmlFor="date" className="visually-hidden">Date</label>
              <input onChange={(e) => {setDate(e.target.value)}} type="date" className="form-control" id="date" placeholder="Date"/>
              {/* onChange={(e) => {setDate(e.target.value)}} */}
            </div>
            

            <div className="col-auto" style={{height: "40px"}}>
              <select onChange={(e) => {setMode(e.target.value)}} className="form-select" aria-label="Default select example">
                {/* <option selected>Travel By</option> */}
                
                <option value="WALK">Walk only</option>
                <option value="TRANSIT,WALK">Transit</option>
                {/* <option value="WALK">WALK</option> */}
                <option value="CAR">Car only</option>
                <option value="BICYCLE">Bicycle only</option>
                {/* 
                
               
                <option value="BUS">Bus only</option>
                <option value="RAIL">Rail only</option> */}
              </select>
            </div>
            <div className="col-auto" style={{height: "40px"}}>
              <button id="planTrip" onClick={() => {tripInput(); }} type="button" className="btn btn-primary mb-3">Plan Trip</button>
              {/* if(clickPlanTrip === 1){ props.itinerariesData(-2, {})} setClickPlanTrip(clickPlanTrip + 1)  */}
              {/* setClicked(1) */}
            </div>
            {/* <div className="col-auto">
              <button onClick={() => {console.log(planJson)}} type="button" className="btn btn-primary mb-3">check planJson</button>
            </div> */}

          </form>
        </div>

        {/* style={{position: 'relative', top: "40px"}} */}
        {/* <div style={{position: 'relative', left: "1%", bottom: "1%", border: "3px solid black", width: "20%"}}  > */}
          
          {/* {addressErrorMsg} */}
        {/* <Itineraries plan={planJson}></Itineraries> */}
            {/* {addressErrorMsg} */}
         

          {/* <h4 style={{width: "25%", margin: "auto"}}>{err}</h4> */}
          {console.log(correctAddress)}
        {/* </div> */}
        
      </div>
      {
            loading? <Spinner/> : <div>
              {
                correctAddress ?
                (<Itineraries plan={planJson} itinerariesData={props.itinerariesData} cards={cards} pushedInd={pushedInd} pushedIndex={pushedIndex} clickPlanTrip={clickPlanTrip}></Itineraries>):
                (errAya?(<div className="alert alert-warning alert-dismissible fade show" role="alert" style={{width: "25%", margin: "auto"}}>
                <strong>{err}</strong>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>):
                <div></div>)
              }
            </div>
          }
      </>
    )
  
});

export default React.memo(InputForm);
// export {State};