import React, { Component, Fragment } from "react";
import classes from "./UserInput.css";
import Aux from "../hoc/Auxiliary";

class UserInput extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[UserInput.js] getDerivedStateFromProps");
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[UserInput.js] shouldComponentUpdate");
    // Instead of checking all props properties like below if its changed or not and should update should only happen
    // when any of below props is changed then we can use PureComponents It has the same check in-built
    if (nextProps.toggleUserOutput !== this.props.toggleUserOutput) {
      return true;
    }
    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[UserInput.js] getSnapshotBeforeUpdate");
    return { updatedMessage: "Snapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[UserInput.js] componentDidUpdate");
    console.log(snapshot);
  }

  render() {
    const btnStyle = {
      padding: "5px",
      marginRight: "10px",
      cursor: "pointer",
      backgroundColor: "#8bc34a",
    };

    btnStyle.backgroundColor = "pink";

    return (
      // Fragment is similar to custom Aux jsx what we have made & serves the same  purpose
      <Aux>
        {/* <Fragment> */}
        <div className={classes.UserInput}>
          <button
            onClick={() => {
              // btnStyle.backgroundColor = "pink";
              this.props.toggleUserOutput();
              console.log(btnStyle.backgroundColor);
            }}
            style={btnStyle}
          >
            Toggle UserOutput
          </button>
        </div>
        {/* </Fragment> */}
      </Aux>
    );
  }
}

export default UserInput;

// import React from "react";
// import "./UserInput.css";

// let UserInput = (props) => {
//   let btnStyle = {
//     padding: "5px",
//     marginRight: "10px",
//     cursor: "pointer",
//     backgroundColor: "#8bc34a",
//   };

//   const toggleUserOutput = () => {
//     console.log(this);
//     btnStyle.backgroundColor = "#8bc34a";
//     // btnStyle = {
//     //   padding: "15px",
//     //   marginRight: "10px",
//     //   cursor: "pointer",
//     //   backgroundColor: "#8bc34a",
//     // };
//     // props.toggleUserOutput();
//   };

//   return (
//     <div className="UserInput">
//       <button onClick={toggleUserOutput} style={btnStyle}>
//         Toggle UserOutput
//       </button>
//     </div>
//   );
// };
