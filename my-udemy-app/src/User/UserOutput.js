import React from "react";
import classes from "./UserOutput.module.css";
import PropTypes from "prop-types";

const UserOutput = (props) => {
  return (
    <div className={classes.UserOutput}>
      <div>
        <p>Hello {props.name}! How are you doing?</p>
        <input type="text" onChange={props.onNameChange} ref={(elemRef) => { this.inputElementRef = elemRef }} />
      </div>
      <p className={classes.deleteBtn} onClick={props.delete}>
        X
      </p>
    </div>
  );
};

UserOutput.propTypes = {
  name: PropTypes.string,
  onNameChange: PropTypes.func,
  delete: PropTypes.func,
}

export default UserOutput;
