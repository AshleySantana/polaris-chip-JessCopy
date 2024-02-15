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
    this.title="Counter";
    this.value=0;
    
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
      width: 1000px;
      display: flex;
      border-radius: 20px;
      font-size: 40px;
    }

    .subtract{
      width: 1000px;
      display: flex;
      padding: 5%;
      font-size: 40px;
    }
    
    `;
  }

  increase(){
    if(this.value < 20) {
      this.value += 1;
    }
  }

  decrease(){
    if(this.value > 0){
      this.value -= 1;
    }
  }

  render() {
    return html`
    <div class="counter-app">
      <h3 class="header">${this.title}</h3>
      <h2 class="value">${this.value}</h2>
      <button class="+" @click="${this.increase}">add</button>
      <button class="-" @click="${this.decrease}">subtract</button>
    </div>
  `;

   
  }

  static get properties() {
    return {
      title: { type: String},
      value: { type: Number} 
    };
  }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);
