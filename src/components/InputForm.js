// import React, { createContext, useState } from 'react'
// import React, {useRef, useState, useEffect} from "react";
import Itineraries from "./Itineraries";
// import FormState from "../context/inputForm/FormState";
import React, { useState, useEffect } from 'react'
// import Itineraries from './Itineraries';
// import { useCallback } from "react";
// const State = createContext();

import './images/g3.png'

 
let cards = [];
let pushedInd = [0];
let pushedIndex = 0;

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
  const [clickPlanTrip, setClickPlanTrip] = useState(-1);

  
  // useEffect(() => {
  //   console.log("noChange state");
  
    
  // }, [noChange])


  const coord = async (inputAddress) => {

    let arr = inputAddress.split(" ");
    let qstr1 = "";
    for (let i = 0; i<arr.length; i++){
        qstr1 += `${arr[i]}+`;
    }

    let params = {
        q: qstr1.slice(0, qstr1.length-1)
    }
    let url = `https://nominatim.openstreetmap.org/?addressdetails=1&q=${params.q}&format=json&limit=1&countrycodes=IN&viewbox=76.838835,28.404625,77.346301,28.883446&bounded=1`;
    // console.log(url);
    let data = await fetch(url);
    let parsedData = await data.json();
    let addresses = parsedData;

    if(addresses.length !== 0){
        return `${addresses[0].lat}, ${addresses[0].lon}`;
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


    // if(document.getElementById('planTrip').clicked == true){
    //   cards = [];
    //   pushedInd = [0];
    // }

    

    

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
        console.log("waiting..")
        let data = await fetch(url);
        let parsedData = await data.json();
        setPlanJson(parsedData.plan);
        setCorrectAddress(true);
        // addressErrorMsg.push(<div key={5}><Itineraries plan={planJson}></Itineraries></div>);
        console.log(planJson);
        


        // addressErrorMsg.push(<Itineraries key={0} plan={planJson}></Itineraries>);
    }
    else if(fromPlace.length !== 0){
        addressErrorMsg.push(<h4 key={1}>Enter Correct End Address</h4>);
        console.log("put correct toPlace");
        setErrAya(true);
        setErr("Enter Correct End Address");
    }
    else if(toPlace.length !== 0) {
      addressErrorMsg.push(<h4 key={2}>Enter Correct Start Address</h4>);
        console.log("put correct fromPlace");
        setErrAya(true);
        setErr("Enter Correct Start Address");
    }
    else{
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
      <div className="mapo" >
        <div className="my-4" style={{display: "flex", justifyContent: "center"}}>
          <form className="row g-4">

            <div className="col-auto">
              <label htmlFor="start" className="visually-hidden">Start</label>
              <input onChange={(e) => {setStart(e.target.value)}} type="text" className="form-control" id="start" placeholder="Enter source address"/> 
            </div>

            <div className="col-auto">
              <label htmlFor="end" className="visually-hidden">End</label>
              <input onChange={(e) => {setEnd(e.target.value); }} type="text" className="form-control" id="end" placeholder="Enter destination address"/>
            </div>

            <div className="col-auto">
              <label htmlFor="timee" className="visually-hidden">Date</label>
              <input onChange={(e) => {setTime(e.target.value)}} type="time" className="form-control" id="timee" placeholder="Time"/>
            </div>

            <div className="col-auto">
              <label htmlFor="date" className="visually-hidden">Date</label>
              <input onChange={(e) => {setDate(e.target.value)}} type="date" className="form-control" id="date" placeholder="Date"/>
              {/* onChange={(e) => {setDate(e.target.value)}} */}
            </div>
            

            <div className="col-auto">
              <select onChange={(e) => {setMode(e.target.value)}} className="form-select" aria-label="Default select example">
                {/* <option selected>Travel By</option> */}
                
                <option value="WALK">Walk only</option>
                <option value="TRANSIT,WALK">Transit</option>
                {/* <option value="WALK">WALK</option> */}
                {/* <option value="BICYCLE">Bicycle only</option>
                <option value="CAR">Car only</option>
               
                <option value="BUS">Bus only</option>
                <option value="RAIL">Rail only</option> */}
              </select>
            </div>
            <div className="col-auto">
              <button id="planTrip" onClick={() => {tripInput(); }} type="button" className="btn btn-primary mb-3">Plan Trip</button>
              {/* if(clickPlanTrip === 1){ props.itinerariesData(-2, {})} setClickPlanTrip(clickPlanTrip + 1)  */}
              {/* setClicked(1) */}
            </div>
            {/* <div className="col-auto">
              <button onClick={() => {console.log(planJson)}} type="button" className="btn btn-primary mb-3">check planJson</button>
            </div> */}

          </form>
        </div>
        <div style={{position: 'relative', top: "40px"}} >
          {/* {addressErrorMsg} */}
        {/* <Itineraries plan={planJson}></Itineraries> */}
            {/* {addressErrorMsg} */}
          {
            correctAddress ?
            (<Itineraries plan={planJson} itinerariesData={props.itinerariesData} cards={cards} pushedInd={pushedInd} pushedIndex={pushedIndex} clickPlanTrip={clickPlanTrip}></Itineraries>):
            (errAya?(<div className="alert alert-warning alert-dismissible fade show" role="alert" style={{width: "25%", margin: "auto"}}>
            <strong>{err}</strong>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>):
            <div></div>)
          }
          {/* <h4 style={{width: "25%", margin: "auto"}}>{err}</h4> */}
          {console.log(correctAddress)}
        </div>
        
      </div>
      </>
    )
  
});

export default React.memo(InputForm);
// export {State};