import React from 'react'
// import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import './css/itinerary.css'
import './css/itinerary1.css'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';

// Icons for relative directions
import StraightIcon from '@mui/icons-material/Straight';  //for depart and continue
import TurnSlightLeftIcon from '@mui/icons-material/TurnSlightLeft';
import TurnSlightRightIcon from '@mui/icons-material/TurnSlightRight';
import TurnLeftIcon from '@mui/icons-material/TurnLeft';
import TurnRightIcon from '@mui/icons-material/TurnRight';
import UTurnLeftIcon from '@mui/icons-material/UTurnLeft';
import UTurnRightIcon from '@mui/icons-material/UTurnRight';
import SouthWestIcon from '@mui/icons-material/SouthWest';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import RoundaboutLeftIcon from '@mui/icons-material/RoundaboutLeft';
import RoundaboutRightIcon from '@mui/icons-material/RoundaboutRight';
import ElevatorIcon from '@mui/icons-material/Elevator';




export default function Itinerary1(props) {

    let itinerary = props.itinerary;


    // const nextModeIcon = (index) => {
    //   let nm = itinerary.legs[index].mode;
    //   switch(nm){
    //     case "WALK": return <DirectionsWalkIcon/>;
    //     case "BUS": return <DirectionsBusIcon/>;
    //     case "CAR": return <DirectionsCarIcon/>;
    //       // break;
    //     case "BICYCLE": return <DirectionsBikeIcon/>;
    //       // break;
    //     default: return <DirectionsTransitIcon/> ;// for rail
    //   }
    // }


    const indicator = (relDir) => {

      switch(relDir){
        case "DEPART": return <StraightIcon sx={{fontSize: "26px", color: "black"}}/>;
        case "CONTINUE": return <StraightIcon sx={{fontSize: "26px", color: "black"}}/>;
        case "SLIGHTLY_LEFT": return <TurnSlightLeftIcon sx={{fontSize: "26px", color: "black"}}/>;
        case "SLIGHTLY_RIGHT": return <TurnSlightRightIcon sx={{fontSize: "26px", color: "black"}}/>;
        case "LEFT": return <TurnLeftIcon sx={{fontSize: "26px", color: "black"}}/>;
        case "RIGHT": return <TurnRightIcon sx={{fontSize: "26px", color: "black"}}/>;
        case "HARD_LEFT": return <SouthWestIcon sx={{fontSize: "26px", color: "black"}}/>;
        case "HARD_RIGHT": return <SouthEastIcon sx={{fontSize: "26px", color: "black"}}/>;
        case "UTURN_LEFT": return <UTurnLeftIcon sx={{fontSize: "26px", color: "black"}}/>;
        case "UTURN_RIGHT": return <UTurnRightIcon sx={{fontSize: "26px", color: "black"}}/>;
        case "CIRCLE_CLOCKWISE": return <RoundaboutRightIcon sx={{fontSize: "26px", color: "black"}}/>;
        case "CIRCLE_COUNTERCLOCKWISE": return <RoundaboutLeftIcon sx={{fontSize: "26px", color: "black"}}/>;
        default: return <ElevatorIcon sx={{fontSize: "26px", color: "black"}}/>;
      }
    }
    

    let uniq = 1;
    let steps = [];
    // let interStops = [];
    for(let i = 0; itinerary.legs != null && i < itinerary.legs.length; i++ ){
      let ithLegDuration = (parseInt((new Date(itinerary.legs[i].endTime)).toString().slice(16, 18)) - parseInt((new Date(itinerary.legs[i].startTime)).toString().slice(16, 18)))*60 + (parseInt((new Date(itinerary.legs[i].endTime)).toString().slice(19, 21)) - parseInt((new Date(itinerary.legs[i].startTime)).toString().slice(19, 21)))
      
      
                                                                                                                                                                                                                              // {  (itinerary.duration/60).toFixed(0) <= 59?  ` ${itineraryDurationMin}mins` : `${Math.floor(ithLegDuration/60).toString().slice(".")[0]}hrs ${Math.floor(ithLegDuration%60).toString()}min`  } 
      // steps.push(<tr key={uniq}><th style={{padding: "0px"}}>{itinerary.legs[i].mode}, {(itinerary.legs[i].distance*0.00062137).toFixed(2)}miles, {(itinerary.legs[i].duration/60).toFixed(0)}min </th></tr>);
      steps.push(<tr key={uniq} style={{borderBottom: "3px solid blue"}}><td colSpan={3} style={{padding: "2px 2px 2px 10px"}}><b>{itinerary.legs[i].mode}</b>, {(itinerary.legs[i].distance*0.00062137).toFixed(2)}miles, {ithLegDuration <= 59? `${ithLegDuration}min`: `${Math.floor(ithLegDuration/60).toString().slice(".")[0]}hrs ${Math.floor(ithLegDuration%60).toString()}min`}</td></tr>);
      uniq += 1;
      // <tr style={{borderBottom: "3px solid blue"}}><td><b>Walk</b> 34.5min</td><td></td><td></td></tr>
      
      if(itinerary.legs[i].mode === "WALK"){
        // if(i === itinerary.legs.length - 1){
          steps.push(<tr key={uniq} ><td colSpan={3} style={{paddingTop: "8px", width: "180px", backgroundColor: "#bbded6"}}><div style={{fontSize: "11px"}}> <div style={{marginBottom: "3px"}}>{ <DirectionsWalkIcon sx={{fontSize: 20}}/> } {<ArrowRightAltIcon sx={{fontSize: 20}}/>} {itinerary.legs[i].to.name}</div> <div style={{fontWeight: "600"}} ><AccessTimeIcon sx={{fontSize: "18px", paddingBottom: "3px"}}/> {(new Date(itinerary.legs[i].startTime)).toString().slice(16, 21)}  - {(new Date(itinerary.legs[i].endTime)).toString().slice(16, 21)}</div> </div></td></tr>);
        // }
        // else{
          // steps.push(<tr key={uniq} ><td colSpan={3} style={{paddingTop: "8px", width: "180px", backgroundColor: "#bbded6"}}><div style={{fontSize: "11px"}}>{<DirectionsWalkIcon sx={{fontSize: 20}}/>}{<ArrowRightAltIcon sx={{fontSize: 20}}/>} {itinerary.legs[i].to.name} <br/> Time: {(new Date(itinerary.legs[i].startTime)).toString().slice(16, 21)}  - {(new Date(itinerary.legs[i].endTime)).toString().slice(16, 21)} &nbsp; {(itinerary.legs[i].duration/60).toFixed(0)}min</div></td></tr>);
        // }
        uniq += 1;

        // let colors = [ "#2E8B57", "#0bda51", "598baf", "fe5bac", "#808000","ffd300", "#8A2BE2", "#ff6347", "#90EE90", "#D2B48C"];
        for(let j = 0; j < itinerary.legs[i].steps.length; j++ ){
            let direction = itinerary.legs[i].steps[j].relativeDirection ;
            let streetName = itinerary.legs[i].steps[j].streetName ;
            let stepDistance = itinerary.legs[i].steps[j].distance*0.00062137;
            let absoluteDir = itinerary.legs[i].steps[j].absoluteDirection;
            let bogusName = itinerary.legs[i].steps[j].bogusName;

            // let startDotIcon = (<div style={{width: "10px", paddingLeft: "0px"}}> <div style={{borderRadius: "50%", height: "14px", width: "14px", backgroundColor: `rgba(2${j%10}, 1${j%10}4, 2${j%10}5, 1)`, margin: "auto", marginBottom: "0px", paddingBottom: "0px", border: "2px solid rgb(102, 102, 102)"}}></div>  <br/> <MoreVertIcon sx={{fontSize: "14px", marginTop: "-3px"}}/> <br/><MoreVertIcon sx={{fontSize: "14px", marginTop: "-3px"}}/></div>);
            // let midDotIcon = (<div style={{width: "10px", paddingLeft: "0px"}}><MoreVertIcon sx={{fontSize: "14px"}}/> <br/><MoreVertIcon sx={{fontSize: "14px", marginTop: "-3px"}}/> <br/> <div style={{borderRadius: "50%", height: "14px", width: "14px", backgroundColor: `${colors[(j)%10]}`, margin: "auto", marginBottom: "0px", paddingBottom: "0px", border: "2px solid rgb(102, 102, 102)"}}></div>  <br/> <MoreVertIcon sx={{fontSize: "14px", marginTop: "-3px"}}/> <br/><MoreVertIcon sx={{fontSize: "14px", marginTop: "-3px"}}/></div>);
            // let endDotIcon = (<div style={{width: "10px", paddingLeft: "0px"}}><MoreVertIcon sx={{fontSize: "14px"}}/> <br/><MoreVertIcon sx={{fontSize: "14px", marginTop: "-3px"}}/> <br/> <div style={{borderRadius: "50%", height: "14px", width: "14px", backgroundColor: `rgba(${j%3}2, ${j%3}64, 2${j%10}3, 1)`, margin: "auto", marginBottom: "0px", paddingBottom: "0px", border: "2px solid rgb(102, 102, 102)"}}></div> </div>);

            if(direction === "DEPART"){
              steps.push(<tr key={uniq} style={{backgroundColor: "#bbded6", lineHeight: "1.3"}}><td>{indicator(direction)}</td><td width={"250px"} style={{ fontSize:"11px", padding: "5px" }}>Start on {bogusName?"path":streetName} heading {absoluteDir}</td><td style={{paddingLeft: "2px", paddingRight: "5px"}}>{stepDistance.toFixed(2)} miles</td></tr>);
            }
            else if(direction === "UTURN_LEFT" || direction === "UTURN_RIGHT"){
              steps.push(<tr key={uniq} style={{backgroundColor: "#bbded6"}}><td>{indicator(direction)}</td><td width={"250px"} style={{ fontSize:"11px", padding: "5px" }}>{direction} to continue on {bogusName?"path":streetName}</td><td style={{paddingLeft: "2px", paddingRight: "5px"}}>{stepDistance.toFixed(2)} miles</td></tr>);
            }
            else if(direction === "CIRCLE_CLOCKWISE" || direction === "CIRCLE_COUNTERCLOCKWISE"){
              if(direction === "CIRCLE_CLOCKWISE"){
                steps.push(<tr key={uniq} style={{backgroundColor: "#bbded6"}}><td>{indicator(direction)}</td><td width={"250px"} style={{ fontSize:"11px", padding: "5px" }}>Take roundabout clockwise to {itinerary.legs[i].steps[j].exit} exit on {bogusName?"path":streetName}</td><td style={{paddingLeft: "2px", paddingRight: "5px"}}>{stepDistance.toFixed(2)} miles</td></tr>);
              }
              else{
                steps.push(<tr key={uniq} style={{backgroundColor: "#bbded6"}}><td>{indicator(direction)}</td><td width={"250px"} style={{ fontSize:"11px", padding: "5px" }}>Take roundabout counterclockwise to {itinerary.legs[i].steps[j].exit} exit on {bogusName?"path":streetName}</td><td style={{paddingLeft: "2px", paddingRight: "5px"}}>{stepDistance.toFixed(2)} miles</td></tr>);
              }
            }
            else if(direction === "ELEVATOR"){
              steps.push(<tr key={uniq} style={{backgroundColor: "#bbded6", lineHeight: "1.3"}}><td>{indicator(direction)}</td><td width={"250px"} style={{ fontSize:"11px", padding: "5px" }}>Use Elevator</td><td style={{paddingLeft: "2px", paddingRight: "5px"}}>{stepDistance.toFixed(2)} miles</td></tr>);
            }
            else{
              steps.push(<tr key={uniq} style={{backgroundColor: "#bbded6"}}><td>{indicator(direction)}</td><td width={"250px"} style={{ fontSize:"11px", padding: "5px" }}>{direction} on to {bogusName?"path":streetName}</td><td style={{paddingLeft: "2px", paddingRight: "5px"}}>{stepDistance.toFixed(2)} miles</td></tr>);
            }
            uniq += 1;

            // if(j === 0){
            //   steps.push(<tr key={uniq} style={{backgroundColor: "#bbded6"}}><td style={{lineHeight: ".2", paddingRight: "38px", width: "59px", paddingTop: "15px"}}>{startDotIcon}</td><td width={"250px"} fontSize="8px" >start on {streetName} heading {absoluteDir}</td><td style={{paddingRight: "5px"}}>{stepDistance.toFixed(2)} miles</td></tr>);
            //   // borderBottom: "solid 1px gray"
            // }
            // else if(j === itinerary.legs[i].steps.length - 1){
            //   steps.push(<tr key={uniq} style={{backgroundColor: "#bbded6"}}><td style={{lineHeight: ".2", paddingRight: "38px", width: "59px", paddingBottom: "15px"}}>{endDotIcon}</td><td width={"250px"}>{direction} on to {streetName}</td><td style={{paddingRight: "5px"}}>{stepDistance.toFixed(2)} miles</td></tr>);
            // }
            // else {
            //   steps.push(<tr key={uniq} style={{backgroundColor: "#bbded6"}}><td style={{lineHeight: ".2", paddingRight: "38px", width: "59px"}}>{midDotIcon}</td><td width={"250px"}>{direction} on to {bogusName?"path":streetName}</td><td style={{paddingLeft: "2px", paddingRight: "5px"}}>{stepDistance.toFixed(2)} miles</td></tr>);
            // }
            // uniq += 1;
        } 
      }
      else if( itinerary.legs[i].mode === "BUS"){
        // if(i === itinerary.legs.length - 1){
          steps.push(<tr key={uniq} style={{backgroundColor: "#fff1ac"}}><td colSpan={3} style={{paddingTop: "8px", width: "180px"}}><div style={{fontSize: "11px"}}> <div >{<span style={{fontWeight: "700"}}> <DirectionsBusIcon sx={{fontSize: 20}}/>[{itinerary.legs[i].route}]</span>} {<ArrowRightAltIcon sx={{fontSize: 20}}/>} {itinerary.legs[i].to.name}</div> <div style={{fontWeight: "600"}} ><AccessTimeIcon sx={{fontSize: "18px", paddingBottom: "3px"}}/> {(new Date(itinerary.legs[i].startTime)).toString().slice(16, 21)}  - {(new Date(itinerary.legs[i].endTime)).toString().slice(16, 21)}</div> </div> </td></tr>);
        
          // steps.push(<tr key={uniq} ><td colSpan={3} style={{paddingTop: "8px", width: "180px", backgroundColor: "#bbded6"}}><div style={{fontSize: "11px"}}> <div style={{marginBottom: "3px"}}>{<DirectionsWalkIcon sx={{fontSize: 20}}/>} {<ArrowRightAltIcon sx={{fontSize: 20}}/>} {itinerary.legs[i].to.name}</div> <div style={{fontWeight: "600"}} ><AccessTimeIcon sx={{fontSize: "18px", paddingBottom: "3px"}}/> {(new Date(itinerary.legs[i].startTime)).toString().slice(16, 21)}  - {(new Date(itinerary.legs[i].endTime)).toString().slice(16, 21)}</div> </div></td></tr>);
          // }
        // else{
        //   steps.push(<tr key={uniq} style={{backgroundColor: "#fff1ac"}}><td colSpan={3} style={{paddingTop: "8px", width: "180px"}}><div style={{fontSize: "10px"}}>{<DirectionsBusIcon sx={{fontSize: 20}}/>}{<ArrowRightAltIcon sx={{fontSize: 20}}/>}{nextModeIcon(i+1)} Time: {(new Date(itinerary.legs[i].startTime)).toString().slice(16, 21)}  - {(new Date(itinerary.legs[i].endTime)).toString().slice(16, 21)} &nbsp; {(itinerary.legs[i].duration/60).toFixed(0)}min</div></td></tr>);
        // }
        // steps.push(<tr key={uniq} ><td colSpan={3} style={{paddingTop: "8px", width: "180px"}}><div style={{fontSize: "10px"}}>{<DirectionsTransitIcon sx={{fontSize: 20}}/>}{<ArrowRightAltIcon sx={{fontSize: 20}}/>}{<DirectionsTransitIcon sx={{fontSize: 20}}/>} Time: {(new Date(itinerary.legs[i].startTime)).toString().slice(16, 21)}  - {(new Date(itinerary.legs[i].endTime)).toString().slice(16, 21)} </div></td></tr>);
        uniq += 1;

        // steps.push(<tr key={uniq} style={{borderBottom: "solid 1px gray"}}><td colSpan={3}> <span style={{fontWeight: "600"}}>Board At:</span>  {itinerary.legs[i].from.name}</td></tr>)
        // uniq += 1;

        // if(itinerary.legs[i].intermediateStops == null){
        //   steps.push(<tr key={uniq} style={{borderBottom: "solid 1px gray"}}><td colSpan={3} style={{fontWeight: "600"}}>0 Intermediate Stops</td></tr>);
        //   uniq += 1;
        // }
        // else{
        //   steps.push(<tr key={uniq} style={{borderBottom: "solid 1px gray"}}><td colSpan={3} style={{fontWeight: "600"}}>{itinerary.legs[i].intermediateStops.length} Intermediate Stops</td></tr>);
        //   uniq += 1;
        // }
        let startDotIcon = (<div style={{width: "10px", paddingLeft: "0px"}}> <div style={{borderRadius: "50%", height: "14px", width: "14px", backgroundColor: "#ffb549", margin: "auto", marginBottom: "0px", paddingBottom: "0px", border: "2px solid rgb(102, 102, 102)"}}></div>  <br/> <MoreVertIcon sx={{fontSize: "14px", marginTop: "-3px"}}/> <br/><MoreVertIcon sx={{fontSize: "14px", marginTop: "-3px"}}/></div>);
        // let midDotIcon = (<div style={{width: "10px", paddingLeft: "0px"}}><MoreVertIcon sx={{fontSize: "14px"}}/> <br/><MoreVertIcon sx={{fontSize: "14px", marginTop: "-3px"}}/> <br/> <div style={{borderRadius: "50%", height: "14px", width: "14px", backgroundColor: "#ffb549", margin: "auto", marginBottom: "0px", paddingBottom: "0px", border: "2px solid rgb(102, 102, 102)"}}></div>  <br/> <MoreVertIcon sx={{fontSize: "14px", marginTop: "-3px"}}/> <br/><MoreVertIcon sx={{fontSize: "14px", marginTop: "-3px"}}/></div>);
        let endDotIcon = (<div style={{width: "10px", paddingLeft: "0px"}}><MoreVertIcon sx={{fontSize: "14px"}}/> <br/><MoreVertIcon sx={{fontSize: "14px", marginTop: "-3px"}}/> <br/> <div style={{borderRadius: "50%", height: "14px", width: "14px", backgroundColor: "#abb549", margin: "auto", marginBottom: "0px", paddingBottom: "0px", border: "2px solid rgb(102, 102, 102)"}}></div> </div>);
        let onlyDots = (<div style={{width: "10px", paddingLeft: "0px"}}><MoreVertIcon sx={{fontSize: "14px", marginTop: "-15px"}}/> <br/><MoreVertIcon sx={{fontSize: "14px", marginTop: "-3px"}}/><br/><MoreVertIcon sx={{fontSize: "14px", marginTop: "-3px"}}/><br/><MoreVertIcon sx={{fontSize: "14px", marginTop: "-3px"}}/> </div>);

        steps.push(<tr key={uniq} style={{backgroundColor: "#fff1ac"}}><td style={{lineHeight: ".2", paddingRight: "38px", width: "59px", paddingTop: "15px"}}>{startDotIcon}</td><td width="10px" colSpan={2} style={{paddingRight: "5px"}}>Board At: {itinerary.legs[i].from.name}</td></tr>);
        uniq += 1;

        let fare = ""
        if(itinerary.hasOwnProperty("fare")){
            if("fare" in itinerary.fare){
              if("regular" in itinerary.fare.fare){
                fare =`${itinerary.fare.fare.regular.currency.symbol} ${itinerary.fare.fare.regular.cents/100}`;
              }
            }
        }
        steps.push(<tr key={uniq} style={{backgroundColor: "#fff1ac"}}><td style={{lineHeight: ".2", paddingRight: "38px", width: "59px", paddingTop: "10px"}}>{onlyDots}</td><td width="10px" colSpan={2} style={{paddingRight: "5px"}}> <div >{(itinerary.legs[i].distance*0.00062137).toFixed(2)} miles &nbsp;&nbsp; {fare}</div> </td></tr>);
        uniq += 1;

        // if(itinerary.legs[i].intermediateStops != null && itinerary.legs[i].intermediateStops.length !== 0){
        //   for(let j = 0; j < itinerary.legs[i].intermediateStops.length; j++ ){
        //     let arrivalTime = itinerary.legs[i].intermediateStops[j].arrival ;
        //     let stopName = itinerary.legs[i].intermediateStops[j].name ;
        //     steps.push(<tr key={uniq} style={{borderBottom: "solid 1px gray", backgroundColor: "#fff1ac"}}><td style={{lineHeight: ".2", paddingRight: "38px", width: "59px"}}>{midDotIcon}</td><td width="10px" colSpan={2} style={{paddingRight: "5px"}}>{stopName},<br/><AccessTimeIcon sx={{fontSize: "18px", marginTop: "-4px"}}/>{(new Date(arrivalTime)).toString().slice(16, 21)}</td></tr>);
        //     uniq += 1;
        //   } 
        // }
        
        steps.push(<tr key={uniq} style={{backgroundColor: "#fff1ac"}}><td style={{lineHeight: ".2", paddingRight: "38px", width: "59px", paddingBottom: "15px", marginTop: "-50px"}}>{endDotIcon}</td><td width="10px" colSpan={2} style={{paddingRight: "5px"}}>Alight At: {itinerary.legs[i].to.name}</td></tr>);
        {/* <div><AccessTimeIcon sx={{fontSize: "18px", marginTop: "-4px"}}/>{(new Date(itinerary.legs[i].to.arrival)).toString().slice(16, 21)}</div> */}
        uniq += 1;
        //     steps.push(<tr key={uniq} style={{borderBottom: "solid 1px gray"}}><td colSpan={3} ><span style={{fontWeight: "600"}}>Alight At:</span>  {itinerary.legs[i].to.name}</td></tr>)
        // uniq += 1;
        // alightAt = itinerary.legs[i].to.name;
      }
      else if( itinerary.legs[i].mode === "CAR"){
        
      }
      else if( itinerary.legs[i].mode === "BICYCLE"){
        
      }
      else{ // for RAIL MODE

      }
      // if(itinerary.legs[i].mode === "BUS"){
          
      // }
    } // End of Outer for loop(for all legs)
    
    // itinerary.legs[i].mode
    let legSummaryIcons = [];
    for(let i = 0; itinerary.legs != null && i < itinerary.legs.length; i++){

        if(i === itinerary.legs.length - 1){
          if(itinerary.legs[i].mode === "WALK") legSummaryIcons.push(<span key={i}><DirectionsWalkIcon/></span>);
          else if(itinerary.legs[i].mode === "BUS") legSummaryIcons.push(<span key={i}><DirectionsBusIcon/></span>);
          else if(itinerary.legs[i].mode === "BICYCLE") legSummaryIcons.push(<span key={i}><DirectionsBikeIcon/></span>); 
          else if(itinerary.legs[i].mode === "CAR") legSummaryIcons.push(<span key={i}><DirectionsCarIcon/></span>);
          else legSummaryIcons.push(<span key={i}><DirectionsTransitIcon/></span>);
          break;
        }
        if(itinerary.legs[i].mode === "WALK") legSummaryIcons.push(<span key={i}><DirectionsWalkIcon/>---</span>);
        else if(itinerary.legs[i].mode === "BUS") legSummaryIcons.push(<span key={i}><DirectionsBusIcon/>---</span>);
        else if(itinerary.legs[i].mode === "BICYCLE") legSummaryIcons.push(<span key={i}><DirectionsBikeIcon/>---</span>); 
        else if(itinerary.legs[i].mode === "CAR") legSummaryIcons.push(<span key={i}><DirectionsCarIcon/>---</span>);
        else legSummaryIcons.push(<span key={i}><DirectionsTransitIcon/>---</span>);

        // switch(itinerary.legs[i].mode){
        //   case "WALK": legSummaryIcons.push(<span key={i}><DirectionsWalkIcon/>---</span>); 
        //     break;
        //   case "BUS": legSummaryIcons.push(<span key={i}><DirectionsBusIcon/>---</span>); 
        //     break;
        //   case "BICYCLE": legSummaryIcons.push(<span key={i}><DirectionsBikeIcon/>---</span>); 
        //     break;
        //   case "CAR": legSummaryIcons.push(<span key={i}><DirectionsCarIcon/>---</span>); 
        //     break;
        //   defualt: legSummaryIcons.push(<span key={i}><DirectionsTransitIcon/>---</span>);
        // };
    }
    let tripSummary = []; 
    let itineraryDurationMin = (parseInt((new Date(itinerary.endTime)).toString().slice(16, 18)) - parseInt((new Date(itinerary.startTime)).toString().slice(16, 18)))*60 + (parseInt((new Date(itinerary.endTime)).toString().slice(19, 21)) - parseInt((new Date(itinerary.startTime)).toString().slice(19, 21))); 
    // console.log(`${typeof itineraryDurationMin}`)
    let summa = <div key={0} style={{  borderRadius: "10px", fontSize: "14px", textAlign: "left", height: "110px", backgroundColor: "#EAFFD0", paddingLeft: '7px', paddingTop: "2px"}}>
    <div style={{fontWeight: "bold", color: "rgba(139,194,76,1)"}}>Summary</div>
      <div className='d-flex justify-content-between'>  <div style={{width: "111px", display: "inline"}}><AccessTimeIcon sx={{fontSize: "22px", paddingBottom: "3px"}}/>  {(new Date(itinerary.startTime)).toString().slice(16, 21)} - {(new Date(itinerary.endTime)).toString().slice(16, 21)}</div>  <div style={{paddingRight: "0px", width: "80px", display: "inline"}}>{  (itinerary.duration/60).toFixed(0) <= 59?  ` ${itineraryDurationMin}mins` : `${Math.floor(itineraryDurationMin/60).toString().slice(".")[0]}hrs ${Math.floor(itineraryDurationMin%60).toString()}min` } </div></div> 
    
        
      {/* itinerary.duration/60).toFixed(0) <= 59? (itinerary.duration/60).toFixed(2):`${((itinerary.duration/60)/60).toFixed(0)}hrs ${((itinerary.duration/60)%60).toFixed(2)}`  */}
        <div className="scroll1" style={{overflow: "auto", width: "inherit", height:"60px"}}>{legSummaryIcons}</div>
        

        {/* Total Walk: {(itinerary.walkDistance*0.00062137).toFixed(2)} miles <br /> */}
        {/* {fare} */}
      
    </div>
    tripSummary.push(summa);
  
    
  
   
  return (
    <>
        <div style={{height: "100%"}}>
            <div className="card h-75" style={{borderRadius: "15px", margin: "auto", marginTop: ".7rem",  width: "270px"}}>
            <div className="card-body">
                <div className="summary">
                    <h5 className="card-title">Itinerary {props.kth + 1}</h5>
                    <div>{tripSummary}</div>
                </div>
                <div className="steps" style={{marginTop: "5px"}}>
                    <div className='scroll' style={{height: "230px", overflow: "auto", borderRadius: "10px"}}>
                        <table style={{ backgroundColor:"rgba(245,240,246,1)", textAlign: "left"}}>
                          <tbody>
                            {steps}
                          </tbody>
                        </table>
                        {/* <table>
                          <tbody>
                            {interStops}
                          </tbody> 
                        </table>    */}
                    </div>
                </div>
            </div>
            </div>
        </div>
        {/* <MoreVertIcon/> */}
        
    </>
  )
}
