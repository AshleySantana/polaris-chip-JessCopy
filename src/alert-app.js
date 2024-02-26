import { LitElement, html, css } from 'lit';


/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class AlertApp extends LitElement {

  static get tag() {
    return 'alert-app';
  }

  static get properties() {
    return {
        fancy: { type: Boolean, reflect: true }
      
    };
  }

  constructor() {
    super();
    this.fancy=false;
  }

  static get styles() {
    return css`
    .alert-app {
      background-color: red;
      width: 400px;
      height: 100px;
      padding: 5%;
      margin: 5%;
      font-size: 30px;
    }
    `;
  }

  

  render() {
    

    return html`
    <div class="alert-app">
    </div>

  `;
  }

  
}

globalThis.customElements.define(AlertApp.tag, AlertApp);
