import React from "react";
import Assignment2 from "./Assignment2/Assignment2";
import withClass from "./../hoc/withClass";
import classes from "./Assignments.css";

const Assignments = () => {
  return (
    <div>
      <Assignment2 wrapperClassName={classes.assignmentContainer} />
    </div>
  );
};

export default withClass(Assignments, classes.assignmentContainer);
