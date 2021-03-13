import "bootstrap/dist/css/bootstrap.min.css";
import "./DateWidget.scss";
import Datetime from "react-datetime";

const DateWidget: React.FC = () => {
  return (
    <div>
      <Datetime />
    </div>
  );
};

export default DateWidget;
