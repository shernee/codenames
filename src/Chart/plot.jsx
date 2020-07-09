import React, { Component } from 'react';
import plot_data from './plot_data.json'

class Plot extends Component {
  AddPlot() {
    return (
      window.Bokeh.embed.embed_item(plot_data, "testid")
    )
  }
  render() { 
    this.AddPlot()
    return (
      <div>
        <div id="testid"></div>
      </div>
    )
  }
}

export default Plot