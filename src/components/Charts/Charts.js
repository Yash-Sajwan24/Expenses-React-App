import "./Charts.css";
import Chartbar from "./Chartbar";

const Charts = (props) => {
    const DataPointArray = props.dataPoints.map((val) => val.value);
    const totalMax = Math.max(...DataPointArray);
    console.log(totalMax);

  return (
    <div className="charts">
      {props.dataPoints.map((dataPoints) => (
        <Chartbar
          key={dataPoints.label}
          label={dataPoints.label}
          value={dataPoints.value}
          maxValue={totalMax}
        />
      ))}
    </div>
  );
};

export default Charts;
