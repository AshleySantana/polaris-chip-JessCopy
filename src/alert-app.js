import { LitElement, html, css } from 'lit';

export class AlertApp extends LitElement {

  static get tag() {
    return 'alert-app';
  }

  static get properties() {
    return {
        title: { type: String},
        fancy: { type: Boolean, reflect: true},
        opened: {type: Boolean, reflect: true},
        date: {type: String},
        description: {type: String}
      
    };
  }

  constructor() {
    super();
    this.title="ALERT";
    this.opened = false;
    this.date="07-14-2004"
  }

  static get styles() {
    return css`

    .background-container-closed {
      background-color: red;
      width: 1420px;
      height: 100px;
      padding: 5%;
      font-size: 30px;
    }

    .background-container-open {
      background-color: yellow;
      width: 1420px;
      height: 100px;
      padding: 5%;
      font-size: 30px;
    }

    `;
  }

  openView(){
    return html`
    <div class="background-container-open">
      <summary>Description</summary>
      <div>
        <slot>${this.description}</slot>
      </div>
    </div>
    
    `;
  }

  closedView(){
    return html`
    <div class="background-container-closed">
      <h3 class="header">${this.title}</h3>
    </div>
    `;
  }



  render() {
    return (this.opened) ? this.openView() : this.closedView(); 
  }

  
}

globalThis.customElements.define(AlertApp.tag, AlertApp);
