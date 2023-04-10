import "./Chartbar.css";

const Chartbar = (props) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chartbar">
      <div className="chartbar_inner">
        <div className="chartbar_fill" style={{ height: barFillHeight }}>
          {/* <div className='chartbar_fill' style={{height : barFillHeight, "backgound-color": "red"}}> */}
        </div>
      </div>
      <div className="chartbar_label">{props.label}</div>
    </div>
  );
};

export default Chartbar;
