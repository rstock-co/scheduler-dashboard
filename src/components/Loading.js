import React, { Component } from "react";
import classnames from "classnames";

class Loading extends Component {
  state = {
    loading: false,
  };

  render() {
    const dashboardClasses = classnames("dashboard");

    if (this.state.loading) {
      return <Loading />;
    }

    return <main className={dashboardClasses} />;
  }
}

export default Loading;
