import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import "../css/Header.css";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1 className="heading">{title}</h1>
      {location.pathname ==='/' && <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "close" : "Add"}
        onClick={onAdd}
      />}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
