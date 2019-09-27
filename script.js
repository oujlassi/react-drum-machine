
"use strict";

var urls = {
  Q: ["https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", "Heater-1"],
  W: ["https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", "Heater-2"],
  E: ["https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", "Heater-3"],
  A: ["https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", "Heater-4"],
  S: ["https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", "Clap"],
  D: ["https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", "Open-HH"],
  Z: ["https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", "Kick-n'-Hat"],
  X: ["https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", "Kick"],
  C: ["https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", "Closed-HH"]
};

class DrumButton extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
      return React.createElement("button", {
  id: this.props.id,
  className: "drum-pad",
  onClick: this.props.onClick
}, this.props.innerText, React.createElement("audio", {
  id: this.props.innerText,
  className: "clip",
  src: this.props.src,
  type: "audio/mp3"
}));
  }
}
/***********************************************************/
class DrumMachine extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        descrText: "press key ... ", currentButton: "Q"
      };
      this.handleClick = this.handleClick.bind(this);
      this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    play(id){
      document.getElementById(id).load();
      document.getElementById(id).play();
    }
    handleClick(event) {
      let e = event.target.innerText;
      this.setState({
        descrText: urls[e][1], currentButton: e
      });
      this.play(e);
    }
    handleKeyDown(event){
      let e = String.fromCharCode(event.keyCode).toUpperCase();
      this.setState({
        descrText: urls[e][1], currentButton: e
      });
      this.play(e);
    }


    render() {
      let buttons = Object.keys(urls).map(e => < DrumButton key={e} id={urls[e][1]} src={urls[e][0]}
                                                            innerText={e}  onClick={this.handleClick} />);
        return React.createElement("div", {
  id: "drum-machine",
  onKeyDown: this.handleKeyDown
}, React.createElement("div", {
  id: "buttons"
}, buttons), React.createElement("div", {
  id: "display"
}, this.state.descrText));
      }
    }


/**********************************************************/
ReactDOM.render(React.createElement(DrumMachine, null), document.getElementById('root'));
