import React from 'react';
import './home.css';
import video from '../../assets/video.mp4';
import PlaceIcon from '@material-ui/icons/Place';
import FilterIcon from '@material-ui/icons/Filter';

const home = () => {
  return (
    <section className="home">
      <div className="overlay">
      </div>


      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">

          <span className="smallText">
            Our Packages
          </span>

          <h1 className="homeTitle">
            Search your next Destination
          </h1>

        </div>


        <div className="cardDiv gird">
          <div className="destinationInput">
            <label htmlFor="city"> Search your destination: </label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here..' />
              <PlaceIcon className="icon" />

            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date"> Select your date: </label>
            <div className="input flex">
              <input type="date" />

            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">LKR 50,000.00</h3>
            </div>

            <div className="input flex">
              <input type="range" max="50000" min="1000" />

            </div>
          </div>

          <div className="searchOptions flex">
            <FilterIcon className="icon"/>
            <span>MORE FILTERS</span>
          </div>

        </div>
      </div>

    </section>
  )
}

export default home;