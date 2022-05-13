//spinner functional component
const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};
// assigning default props for Spinner component

Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
