import Card from "./Card";

import sedansIcon from "./../images/icon-sedans.svg";
import suvsIcon from "./../images/icon-suvs.svg";
import luxuryIcon from "./../images/icon-luxury.svg";

const Cards = () => {
  return (
    <div className="cards">
      <Card
        icon={sedansIcon}
        BG={"hsl(31, 77%, 52%)"}
        title={"SEDANS"}
        description={
          "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
        }
      />
      <Card
        icon={suvsIcon}
        BG={"hsl(184, 100%, 22%)"}
        title={"SUVS"}
        description={
          "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
        }
      />
      <Card
        icon={luxuryIcon}
        BG={"hsl(179, 100%, 13%)"}
        title={"LUXURY"}
        description={
          "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
        }
      />
    </div>
  );
};

export default Cards;
