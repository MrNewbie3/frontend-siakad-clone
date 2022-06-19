import React, { Component } from "react";
class Main extends React.Component {
  state = {};
  render(props) {
    return (
      <div className="App ">
        <div className="text">
          <h1 className="text-2xl font-normal text- mt-6 ">Dashboard</h1>
          <p className="text-xs">Terakhir diperbarui: 2022-06-14 06:36:58</p>
        </div>
      </div>
    );
  }
}

export default Main;
