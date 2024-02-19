import { LitElement, html, css } from 'lit';


/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class CounterApp extends LitElement {

  static get tag() {
    return 'counter-app';
  }

  constructor() {
    super();
    this.title="Basic Counter";
    this.value=0;
    this.name="Cool Counter"
    this.num=0;
    
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

    .cool-counter {
      background-color: purple;
      width: 400px;
      padding: 5%;
      margin: 5%;
      font-size: 30px;
    }

    .increase {
      background: blue;
      width: 100px;
      border-radius: 20px;
      font-size: 40px;
    }

    .decrease{
      background: blue;;
      width: 100px;
      border-radius: 20px;
      font-size: 40px;
    }

    .increase:hover {
      background-color: grey;
      border: 1px solid black;
    }
    
    .decrease:hover {
      background-color: grey;
      border: 1px solid black;
    }
    `;
  }

  add(){
    if(this.value < 20){
      this.value -= 1;
    }
  }

  subtract(){
    if(this.value > 0){
      this.value -= 1;
    }
  }

  increase(){
    if(this.num < 20) {
      this.num += 1;
    }

    if(this.num === 18) {
      this.num.style.color = yellow;
    }
  }

  decrease(){
    if(this.num > 0){
      this.num -= 1;
    }
  }

  render() {
    return html`
    <div class="counter-app">
      <h3 class="header">${this.title}</h3>
      <h2 class="value">${this.value}</h2>
      <button class="add" @click="${this.add}">+</button>
      <button class="subtract" @click="${this.subtract}">-</button>
    </div>

    <div class="cool-counter">
      <h3 class="header">${this.name}</h3>
      <h2 class="value">${this.num}</h2>
      <button class="increase" @click="${this.increase}">+</button>
      <button class="decrease" @click="${this.decrease}">-</button>
    </div>

  `;

   
  }

  static get properties() {
    return {
      title: { type: String},
      value: { type: Number},
      name: { type: String},
      num: { type: Number}  
    };
  }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);
