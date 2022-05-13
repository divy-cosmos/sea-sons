import "./SeasonDisplay.css";

//optional configuration object

const seasonConfig = {
  summer: {
    text: "Let's hit the beach !!!",
    iconName: "sun",
  },
  winter: {
    text: "brrrrr ! It's chilly ",
    iconName: "snowflake",
  },
};

//optional helper function to carry out the logic
const getSeason = (lat, month) => {
  // console.log(lat,month);
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

// Season Display functional component ...... Components are put at the bottom according to convention.

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());

  //   const text = season === 'winter' ? `Brrr, it's chilly !!!` : `Let's hit the beach !!!`;
  //   const icon = season==='winter' ? 'snowflake': 'sun';
  //    const {text,iconName} =
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      {/* <h1>{season === "winter" ? "Brrr, it's chilly !!!" : "Let's hit the beach !!!"}</h1> */}
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right  massive ${iconName} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
