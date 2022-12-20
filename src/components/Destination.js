import SwatImg1 from "../assets/swat1.jpg";
import SwatImg2 from "../assets/swat2.jpg";
import SwatImg3 from "../assets/swat3.jpg";
import SwatImg4 from "../assets/swat4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours Give You The Opportunity to see a lot, within a time frame.</p>
      <DestinationData
        className="first-des"
        heading="Gabbin Jabba, Swat"
        text="Gabin Jabba means the “Honey Marshes” and is located 59km (37miles) from Mingora in Swat. At the elevation of 2582m (8471ft), Gabin Jabba can be reached at approx. 1 h 46 min of travel from Mingora city and in around 5 hrs at a distance of 389 km (241 miles) from Islamabad in Pakistan."
        img1={SwatImg1}
        img2={SwatImg2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Kalam Valley, Swat"
        text="Kalam is a charming valley is located in upper Swat at a distance of 96km (59 miles) from Mingora and 326 km (202 miles) from Islamabad in Pakistan. The Kalam valley’s town and hill station are situated at an elevation of about 2,000m (6,600 ft), yet its other tourist attractions raise up to approximately 6,096m (20,000 ft) in high."
        img1={SwatImg3}
        img2={SwatImg4}
      />
    </div>
  );
};

export default Destination;
