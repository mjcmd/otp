// import React, {useContext} from 'react'
import { useEffect, useState, useRef} from 'react';
import React from 'react';
// import Itinerary from './Itinerary'
import Itinerary1 from './Itinerary1';
// import './css/itinerary1.css'
// import Resp from './Resp'
import Resp1 from './Resp1';
// import { State } from './InputForm';
// import { Carousel } from 'bootstrap';
// import FormState from '../context/inputForm/FormState'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./css/slide.css"
// import SampleNextArrow from './SampleNextArrow';
// import SamplePrevArrow from './SamplePrevArrow';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


// cards.push(rows[0]);
  // pushedInd.push(0);
  console.log("before fc render..")

const Itineraries = React.memo( (props) => { 

  let cards = props.cards;
  console.log(`Itin: ${cards}`)
  let pushedInd = props.pushedInd;
  let pushedIndex = props.pushedIndex;


  // let cards = [];   cards.push(rows[0])
  // let pushedInd = [0];
  

  console.log("Itineraries render..")
  

  // console.log(props.plan);
  const [test, setTest] = useState(1);
  const [cl, setCl] = useState(1);

  
  // var cl = 1;

  const [noChange, setNoChange] = useState(1)


  useEffect(() => {
    console.log("useEffect...");

    
  }, [noChange]);
  // const cl = useRef(1)

  

    let list1 = [];
    let tnails = [];
    let rows = [];

    
    const thumbnails = () => {
      return tnails;
    };
 

    if(!props){
      // rows.push(<div key={0}><h1>No Props Passed Available</h1></div>);
      console.log("no props")
    }
    else if(!props.plan){  
      // rows.push(<div key={0}>No plan</div>);
      console.log("no plan")
    } 
    else if(!props.plan.itineraries.length){
      rows.push(
        <div key={0} style={{height: "100%"}}>
        <div className="card h-75" style={{borderRadius: "15px", margin: "auto", marginTop: "3.5rem",  width: "91%"}}>
          {/* <img src="..." className="card-img-top" alt="..."/> */}
          <div className="card-body">
            <h5 className="card-title">No Itineraries Available</h5>
          </div>
        </div>
      </div>)
      console.log("no itineraries")
    }
    else{
        for (let i=0; i<props.plan.itineraries.length; i++){
          rows.push(<div key={i} style={{borderRadius: '25px'}} > <Itinerary1 kth={i} itinerary={props.plan.itineraries[i]}/></div>)
          // <div style={{backgroundColor: "white", width: "2px", margin: "2px"}}></div>
          // console.log(props.plan.itineraries[i]);
        }

        for(let i = 0; i<props.plan.itineraries.length; i++){
          tnails.push(<div key={i} style={{paddingLeft: "3px", paddingTop: "7px"}}>{i+1} Itinerary</div>)
        }

        // let list2 = [];
        // for(let i = 0; i<props.plan.itineraries.length; i++){
        // list2.push(<li key={i} onClick={() => {fun(i)}}>Itinerary</li>);
        // }
        // list1.push(<ol key={0} type="1">{list2}</ol>);
    }
               

    // if(props.clickPlanTrip >= 1){
    //   // console.log(`cpt ${props.clickPlanTrip}`);
    //   props.itinerariesData(-2, {});
    // }

  if(cl === 1){ cards.push(rows[0]); }

  // cards.push(rows[0]);
  // let pushedIndex = 0;

  const onClickThumbEvent = (curInd, curItem) => {

    
    
    // setTest(test + 1);

    // document.getElementsByClassName("carousel carousel-slider").style.visibility = "visible";

    

    console.log("onClickThumbEvent...");
    console.log(curInd);
    
    // if(curInd !== pushedIndex){
      cards.push(rows[curInd]);
      cards.shift();
      // pushedIndex = curInd;
    // }props.itinerariesData
    
    props.itinerariesData(curInd, props.plan.itineraries[curInd]);

    setCl(cl + 1)
    // let i = 0;
    // for(; i < pushedInd.length; i++){
    //   if(curInd === pushedInd[i])
    //     break;
    // }

    // if(i === pushedInd.length){

    //   let j = 1;
    //   while(j<pushedInd.length && curInd > pushedInd[j]) {
    //     j++;
    //   }
      // for( ; j<pushedInd.length; j++){
      //   if(curInd >= pushedInd[j]) continue;
      //   else break;
      // }
      
    //   cards.splice(j, 0, rows[curInd]);   //insert
    //   pushedInd.splice(j, 0, curInd);

    //   console.log(`curInd: ${curInd} j: ${j}, pushedInd: ${pushedInd}, cards : ${cards}`);
    
      // setCl((cl) => cards.length);
    //   console.log(`cardl: ${cl}`)
    // }


    // return cards.length ;
      // cards.push(rows[curInd]);
      // cards.push(<div key={curInd} style={{borderRadius: '25px'}} > <Itinerary1 kth={curInd} itinerary={props.plan.itineraries[curInd]}/></div>);

    // console.log(curItem.key); //important
    // console.log(curItem.props); //important
    // console.log(`current Index: ${curInd} and current Item: ${(curItem)}`)
    // console.log("Welcome in test function");
  }


  

    // let tnails2 = [];
    // tnails2.push(tnails[0]);

    // if(cards.length === 1){
    //   document.getElementsByClassName("carousel-root").className += " mystyle1";
    //   console.log("mystyle1");
    // }
    // if(cards.length === 2){
    //   document.getElementsByClassName("carousel-root").className += " mystyle2";
    // }
    // if(cards.length > 2){
    //   document.getElementsByClassName("carousel-root").className += " mystyle3";
    // }
  
    console.log(`outercl: ${cl}`);

  // document.getElementsByClassName("carousel carousel-slider").style.visibility = "hidden";
  
  return (
    
    
    <>
    {/* {cl} */}
    {/* cl === 1? 100: (cl === 2? 50: 33.3)  */}
    {/* `${cl === 1? 20: (cl === 2? 40: 60)}%` */}
      {/* <div style={{width: `${cl === 1? 20: (cl === 2? 40: 60)}%`, margin: "auto", padding: "auto"}}>  */}
      <Carousel axis={'horizontal'} infiniteLoop={false} centerMode = {true} centerSlidePercentage={100} onClickThumb={onClickThumbEvent} showThumbs={true} showArrows={true} renderThumbs={thumbnails} showIndicators={false} showStatus={true} thumbWidth={88} >
      {/* cl === 1? 100: (cl === 2? 50: 33.3) */}
        {cards}
      </Carousel>

   {/* {cl == 1 ? 
        <Carousel axis={'horizontal'} centerMode = {false} centerSlidePercentage={100} onClickThumb={onClickThumbEvent} showThumbs={true} showArrows={true} renderThumbs={thumbnails} showIndicators={false} showStatus={true} thumbWidth={88} >{cards}</Carousel>
     : cl == 2 ? 
     <Carousel axis={'horizontal'} centerMode = {false} centerSlidePercentage={50} onClickThumb={onClickThumbEvent} showThumbs={true} showArrows={true} renderThumbs={thumbnails} showIndicators={false} showStatus={true} thumbWidth={88} > {cards}</Carousel>
   : <Carousel axis={'horizontal'} centerMode = {false} centerSlidePercentage={33.3} onClickThumb={onClickThumbEvent} showThumbs={true} showArrows={true} renderThumbs={thumbnails} showIndicators={false} showStatus={true} thumbWidth={88} > {cards}</Carousel>    
   } */}
   {/* cl === 1? 100: (cl === 2? 50: 33.3) */}
          
          
      

      {/* </div> */}

      {/* <div style={{width: `${cards.length === 1? 20: (cards.length === 2? 40: 60)}%`, margin: "auto", padding: "auto"}}>
      {cards.length === 1 ? <Carousel axis={'horizontal'} centerMode centerSlidePercentage={100} onClickThumb={onClickThumbEvent} showThumbs={true} showArrows={true} renderThumbs={thumbnails} showIndicators={false} showStatus={true} thumbWidth={88} >{cards}</Carousel>
                         : cards.length === 2 ? <Carousel axis={'horizontal'} centerMode centerSlidePercentage={50} onClickThumb={onClickThumbEvent} showThumbs={true} showArrows={true} renderThumbs={thumbnails} showIndicators={false} showStatus={true} thumbWidth={88} >{cards}</Carousel>
                                            : <Carousel axis={'horizontal'} centerMode centerSlidePercentage={33.3} onClickThumb={onClickThumbEvent} showThumbs={true} showArrows={true} renderThumbs={thumbnails} showIndicators={false} showStatus={true} thumbWidth={88} >{cards}</Carousel>}
      
      </div> */}
      
      {/* {list1} */}
    
    {/* <div style={{height: "400px", width: "40%", margin: "auto", borderRadius: '25px'} }>  */}
    
    {/* , position: "relative", left: "500px" */}
      {/* <h2> Single Item</h2> */}
      {
        // props.plan?<Slider {...settings} >{rows}</Slider>:<div></div>
      }
    {/* </div> */}
    </>
  )
});

export default React.memo(Itineraries);