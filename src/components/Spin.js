import React, { Component } from 'react'
import './spinner.css'
export default class Spin extends Component {
  render() {
    return (
      <div className="my-3">
        <div className="windows8">
	<div className="wBall" id="wBall_1">
		<div className="wInnerBall"></div>
	</div>
	<div className="wBall" id="wBall_2">
		<div className="wInnerBall"></div>
	</div>
	<div className="wBall" id="wBall_3">
		<div className="wInnerBall"></div>
	</div>
	<div className="wBall" id="wBall_4">
		<div className="wInnerBall"></div>
	</div>
	<div className="wBall" id="wBall_5">
		<div className="wInnerBall"></div>
	</div>
</div>
      </div>
    )
  }
}
