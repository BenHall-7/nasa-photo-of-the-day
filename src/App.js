import React, {useState, useEffect} from "react";
import "./App.css";
import SingleDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import styled from 'styled-components';

import ImageCard from './components/ImageCard';
import VideoCard from './components/VideoCard';
import EmptyCard from './components/EmptyCard';

const key = "0H0iKAUIhI4xkJoFy3n4zpA9jShPiVX2L7EzBAJb";
let API_data = {};

const formatDate = date => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

function App() {
  const today = new Date();
  
  const [date, setDate] = useState(new Date());
  const [card, setCard] = useState(null);

  const chooseCard = data => {
    console.log(data);
    if (data.media_type === "image") {
      setCard(<ImageCard data={data}/>);
    } else if (data.media_type === "video") {
      setCard(<VideoCard data={data}/>);
    } else {
      setCard(<EmptyCard data={data}/>);
    }
  }

  const changeDateState = () => {
    let dateString = formatDate(date);
    
    if (API_data[dateString]) {
      chooseCard(API_data[dateString]);
    } else {
      chooseCard({
        copyright: "David Lindemann",
        date: "2019-11-21",
        explanation: "It's easy to get lost following the intricate looping filaments in this detailed image of supernova remnant Simeis 147. Also cataloged as Sharpless 2-240 it goes by the popular nickname, the Spaghetti Nebula. Seen toward the boundary of the constellations Taurus and Auriga, it covers nearly 3 degrees or 6 full moons on the sky. That's about 150 light-years at the stellar debris cloud's estimated distance of 3,000 light-years. This composite includes image data taken through narrow-band filters where reddish emission from ionized hydrogen atoms and doubly ionized oxygen atoms in faint blue-green hues trace the shocked, glowing gas. The supernova remnant has an estimated age of about 40,000 years, meaning light from the massive stellar explosion first reached Earth 40,000 years ago. But the expanding remnant is not the only aftermath. The cosmic catastrophe also left behind a spinning neutron star or pulsar, all that remains of the original star's core.",
        hdurl: "https://apod.nasa.gov/apod/image/1911/Simeis147_HaOIIIRGB_1280x1243_Lindemann.jpg",
        media_type: "image",
        service_version: "v1",
        title: "Simeis 147: Supernova Remnant",
        url: "https://apod.nasa.gov/apod/image/1911/Simeis147_HaOIIIRGB_Lindemann1024.jpg",
      })
      // axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${dateString}`)
      //   .then(response => {
      //     API_data[dateString] = response.data;
      //     chooseCard(response.data);
      //   })
      //   .catch(err => {
      //     console.log("ERROR:");
      //     console.log(err);
      //   });
    }
  };

  useEffect(changeDateState, [date]);
  
  return (
    <div className="App">  
      <SingleDatePicker
        selected={date}
        onChange={setDate}
        maxDate={today}/>
      {card}
    </div>
  );
}

export default App;
