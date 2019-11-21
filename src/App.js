import React, {useState, useEffect} from "react";
import "./App.css";
import SingleDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

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
    console.log(data.media_type);
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
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${dateString}`)
        .then(response => {
          API_data[dateString] = response.data;
          chooseCard(response.data);
        })
        .catch(err => {
          console.log("ERROR:");
          console.log(err);
        });
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
