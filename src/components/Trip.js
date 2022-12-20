import TripData from "./TripData";
import "./TripStyles.css";
import TripImg1 from "../assets/trip (1).jpg";
import TripImg2 from "../assets/trip (2).jpg";
import TripImg3 from "../assets/trip (3).jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trip</h1>
      <p>There is always a motive behind everything happens in this world. </p>
      <div className="tripCard">
        <TripData
          image={TripImg1}
          heading="Trip in Kalam"
          text=" 13 kilometer Away from Mankial Valley and a pair of km from serai
        village one of many lovely pastures of chukail Meadows / Banda Mankial
        Valley are Scenic in winter and summer time stuffed with flower in mid
        june and july and snow lined in January Get pleasure from have an ideal
        day"
        />

        <TripData
          image={TripImg2}
          heading="Trip in Kumrat"
          text=" 13 kilometer Away from Mankial Valley and a pair of km from serai
        village one of many lovely pastures of chukail Meadows / Banda Mankial
        Valley are Scenic in winter and summer time stuffed with flower in mid
        june and july and snow lined in January Get pleasure from have an ideal
        day"
        />

        <TripData
          image={TripImg3}
          heading="Trip in Gabbin Jabba"
          text=" 13 kilometer Away from Mankial Valley and a pair of km from serai
        village one of many lovely pastures of chukail Meadows / Banda Mankial
        Valley are Scenic in winter and summer time stuffed with flower in mid
        june and july and snow lined in January Get pleasure from have an ideal
        day"
        />
      </div>
    </div>
  );
}

export default Trip;
