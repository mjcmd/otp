import React from 'react'
import './css/itinerary.css'
// import Carousel from 'react-bootstrap/Carousel';
// import {Carousel} from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import greenBackground from '.images/greenBackground.jpg'
// import g2 from './images/g2.png'
// import g3 from './images/g3.png'

export default function Itinerary(props) {

  let itinerary = props.itinerary;

  // let startTime = itinerary.startTime;
  // let endTime = itinerary.endTime;
  let uniq = 1;
  let accItem = [];
  // let interStops = [];
  for(let i = 0; itinerary.legs != null && i < itinerary.legs.length; i++ ){
    let accHead = <tr key={uniq}><th>{itinerary.legs[i].mode} Mode</th><td> &nbsp; &nbsp;{(itinerary.legs[i].distance*0.00062137).toFixed(2)} miles, {(itinerary.legs[i].duration/60).toFixed(2)} min </td></tr>;
    uniq += 1;
    let accBody = [];
    for(let j = 0; j < itinerary.legs[i].steps.length; j++ ){
        let direction = itinerary.legs[i].steps[j].relativeDirection ;
        let streetName = itinerary.legs[i].steps[j].streetName ;
        let stepDistance = itinerary.legs[i].steps[j].distance*0.00062137;
        accBody.push(<tr key={uniq}><td>{direction} on to {streetName}</td><td>{stepDistance.toFixed(2)} miles</td></tr>);
        uniq += 1;
    } 

    let interStops = []; 
    
    if(itinerary.legs[i].mode === "BUS"){
        interStops.push(<tr key={uniq}><th>Boart At:</th><td>{itinerary.legs[i].from.name}</td></tr>)
        uniq += 1;
        
        if(itinerary.legs[i].interStops == null){
          interStops.push(<tr key={uniq}><th>0 Intermediate Stops</th></tr>);
          uniq += 1;
        }
        else{
          interStops.push(<tr key={uniq}><th>{itinerary.legs[i].intermediateStops.length} Intermediate Stops</th></tr>);
          uniq += 1;
        }
        
        if(itinerary.legs[i].interStops != null && itinerary.legs[i].intermediateStops.length !== 0){
          // interStops.push(<tr key={uniq}><th>{itinerary.legs[i].intermediateStops.length} Intermediate Stops</th></tr>);
          // uniq += 1;
  
          for(let j = 0; j < itinerary.legs[i].intermediateStops.length; j++ ){
            let arrivalTime = itinerary.legs[i].intermediateStops[j].arrival ;
            let stopName = itinerary.legs[i].intermediateStops[j].name ;
            interStops.push(<tr key={uniq}><td>{(new Date(arrivalTime)).toString()}</td><td>{stopName}</td></tr>);
            uniq += 1;
          } 
        }
        
        interStops.push(<tr key={uniq}><th>Alight At:</th><td>{itinerary.legs[i].to.name}</td></tr>)
        uniq += 1;
        // alightAt = itinerary.legs[i].to.name;
    }

    accItem.push( 
    <div className="accordion-item" key={uniq}>
    <h2 className="accordion-header" id={`heading${i}`} >
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseHeading${i}`} aria-expanded="true" aria-controls={`collapseHeading${i}`} style={{backgroundColor: "#eee", height: "30px"}}>
            <table>
                <tbody>
                    {accHead}
                </tbody>
            </table>
        </button>
    </h2>

    <div id={`collapseHeading${i}`} className="accordion-collapse collapse hide" aria-labelledby={`heading${i}`} data-bs-parent="#accordionExample">
        <div className="accordion-body">
            <div>
                <table>
                    <tbody>
                    {accBody}
                    </tbody>
                </table>
                {/* {itinerary.legs[i].mode === "BUS"?<div>Board At: {boardAt}</div>: <div></div>} */}
                <table>
                    <tbody>
                    {interStops}
                    </tbody>
                </table>
                {/* {interStops.length !== 0?<div>Alight At: {alightAt}</div>: <div></div>} */}
            </div>
        </div>
    </div>
    </div>);
    uniq += 1 ;
   
  }


  let tripSummary = []; tripSummary.push(<div key={0}><h4>Trip Summary</h4></div>);
  tripSummary.push(<div key={1}> Travel: {(new Date(itinerary.startTime)).toString()} </div>);
  tripSummary.push(<div key={2}>Time: {(itinerary.duration/60).toFixed(2)} min</div>);
  tripSummary.push(<div key={3}>Total Walk: {(itinerary.walkDistance*0.00062137).toFixed(2)} miles</div>);

  if(itinerary.hasOwnProperty("fare")){
    if("fare" in itinerary.fare){
      if("regular" in itinerary.fare.fare){
        tripSummary.push(<div key={4}>Fare: {itinerary.fare.fare.regular.currency.symbol} {itinerary.fare.fare.regular.cents/100}</div>);
      }
    }
  }

 



  // tripSummary.push(<div key={4}>Fare: {itinerary.fare.fare.regular.currency.symbol} {itinerary.fare.fare.regular.cents/100}</div>);
  
  // if(itinerary.hasOwnProperty("fare")){
  //   if("fare" in itinerary.fare){
  //     if("regular" in itinerary.fare.fare){
  //       tripSummary.push(<div key={1}>Travel: {(new Date(itinerary.startTime)).toString()}, <br/> Time: {(itinerary.duration/60).toFixed(2)},  <br/>  Total Walk: {(itinerary.walkDistance*0.00062137).toFixed(2)},  <br/>  Fare: {itinerary.fare.fare.regular.currency.symbol} {itinerary.fare.fare.regular.cents/100}</div>);
  //     }
  //     else {
  //       console.log("no fare")
  //       tripSummary.push(<div key={2}>Travel: {(new Date(itinerary.startTime)).toString()},  <br/> Time: {(itinerary.duration/60).toFixed(2)},  <br/> Total Walk: {(itinerary.walkDistance*0.00062137).toFixed(2)}</div>);
  //     }
  //   }
  // }
  
  
  
  return (
    <>
      <div className="my-0 mb-2" style={{width: "90%", margin: "auto", overflow: 'auto', height: "290px" }}>
            <h3 >Itinerary {props.kth + 1}</h3>
            <div className='my-1' >
                {tripSummary}
            </div>
            <h6>Start Time: {(new Date(itinerary.startTime)).toString().slice(0, 24)}</h6>
            <h6>End Time: {(new Date(itinerary.endTime)).toString().slice(0, 24)}</h6>
            <div className="accordion" id="accordionExample" style={{width: "90%"}}>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  Steps and Directions
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse hide" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className="accordion my-1" id="accordionExample">
                      {accItem}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            
      </div>

      {/* <div>
        <h3>Itinerary {props.kth + 1}</h3>
        <table>
          <tbody>
            { steps }
          </tbody>
        </table>
        <div>
          {tripSummary}
        </div>
      </div> */}

    </>
  )
}

