import { LitElement, html, css } from 'lit';


/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class CounterApp extends LitElement {

  static get tag() {
    return 'counter-app';
  }

  static get properties() {
    return {
      title: { type: String},
      value: { type: Number, reflect:true},
      min: {type: Number},
      max: {type: Number},
    };
  }

  constructor() {
    super();
    this.title="Basic Counter";
    this.value=0;
    this.min=0;
    this.max=10;
    
  }

  static get styles() {
    return css`

    .counter-app {
      background-color: purple;
      width: 400px;
      padding: 5%;
      margin: 5%;
      font-size: 30px;
    }

    .add {
      background: blue;
      width: 100px;
      border-radius: 20px;
      font-size: 40px;
    }

    .subtract{
      background: blue;;
      width: 100px;
      border-radius: 20px;
      font-size: 40px;
    }

    .add:hover {
      background-color: grey;
      border: 1px solid black;
    }
    
    .subtract:hover {
      background-color: grey;
      border: 1px solid black;
    }

    `;
  }

  add(){
    if(this.value < this.max){
      this.value += 1;
    }
  }

  subtract(){
    if(this.value > this.min){
      this.value -= 1;
    }
  }

  makeItRain() {
    import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
      (module) => {
        setTimeout(() => {
          this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
        }, 0);
      }
    );
  }
 
  updated(changedProperties) {
    if(changedProperties.has(value)) {
      if(this.value == 21) {
        this.makeItRain();
      }
    }
  }
  

  render() {
    var color = "black";
    if(this.value === this.min) color = "green";
    if(this.value === 18) color = "yellow";
    if(this.value === 21) color = "blue";
    if(this.value === this.max) color = "red";

    return html`
    <div class="counter-app">
      <h3 class="header">${this.title}</h3>
      <h2 class="value" style="color: ${color}">${this.value}</h2>
      <button class="add" @click="${this.add}" ?disabled="${this.max===this.value}">+</button>
      <button class="subtract" @click="${this.subtract}" ?disabled="${this.min===this.value}">-</button>
    </div>

  `;
  }

  
}

globalThis.customElements.define(CounterApp.tag, CounterApp);
