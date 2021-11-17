import React, { Component } from "react";
import classes from "./App.css";
import UserInput from "./User/UserInput";
import UserOutput from "./User/UserOutput";
import Assignments from "./Assignments/Assignments";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps");
    return state;
  }

  // Lifecycle hooks
  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  componentWillUnmount() {
    console.log("[App.js] componentWillUnmount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[App.js] getSnapshotBeforeUpdate");
    return { updatedMessage: "Snapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[App.js] componentDidUpdate");
    console.log(snapshot);
  }

  state = {
    username: "kuma",
    toggleUserOutput: true,
    dataList: [
      { id: "1111", name: "Abhi" },
      { id: "2222", name: "Suraj" },
      { id: "3333", name: "Anuj" },
    ],
  };

  toggleUserOutputHandler = () => {
    this.setState({
      ...this.state,
      toggleUserOutput: !this.state.toggleUserOutput,
    });
  };

  nameChangeHandler = (event, data) => {
    const oldDataIndex = this.state.dataList.findIndex((d) => d.id === data.id);
    const updatedDataList = [...this.state.dataList];
    updatedDataList[oldDataIndex] = {
      ...updatedDataList[oldDataIndex],
      name: event.target.value,
    };
    this.setState({ ...this.state, dataList: updatedDataList });
  };

  deleteUserOutputHandler = (index) => {
    const updatedDataList = [...this.state.dataList];
    updatedDataList.splice(index, 1);
    this.setState({ ...this.state, dataList: updatedDataList });
  };

  render() {
    let showUserOutput = null;
    const testDynamicStyle = {
      backgroundColor: "#8bc34a",
    };

    if (this.state.toggleUserOutput) {
      showUserOutput = (
        <div>
          {this.state.dataList.map((value, key) => (
            <UserOutput
              name={value.name}
              key={value.id}
              onNameChange={(event) => this.nameChangeHandler(event, value)}
              delete={() => this.deleteUserOutputHandler(key)}
            />
          ))}
        </div>
      );
      testDynamicStyle.backgroundColor = "pink";
    }

    return (
      <div className={classes.App}>
        <div className={classes.assignmentContainer}>
          <h2 style={testDynamicStyle}>Assignment 1</h2>
          <UserInput toggleUserOutput={this.toggleUserOutputHandler} />
          {showUserOutput}
        </div>
        <div>
          <Assignments />
        </div>
      </div>
    );
  }
}

export default App;

// onUsernameChangeHandler = (event) => {
//   this.setState({ ...this.state, username: event.target.value });
// };

/* <UserInput
onUsernameChange={this.onUsernameChangeHandler}
toggleUserOutput={this.toggleUserOutputHandler}
/> */

/* {
this.state.toggleUserOutput ? (
  <div>
    <UserOutput username={this.state.username} />
    <UserOutput />
  </div>
) : null
} */
