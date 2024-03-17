import { LitElement, html, css } from 'lit';

export class AlertApp extends LitElement {

  static get tag() {
    return 'alert-app';
  }

  static get properties() {
    return {
        title: { type: String},
        opened: { type: Boolean, reflect: true},
        date: { type: String},
        sticky: { type: Boolean, reflect: true}
    };
  }

  constructor() {
    super();
    this.title="ALERT";
    this.opened=false;
    this.date="07-14-2004";
    this.sticky=false;
  }

  static get styles() {
    return css`
      :host([sticky]){
        top: 0;
        position: sticky;
        z-index: 2;
      }

      .background-container {
        display: flex;
        background-color: yellow;
        width: 1420px;
        height: 100px;
        padding: 5%;
        font-size: 30px;
      }

      .open-btn, .closed-btn {
        font-size: 50x;
        border-radius: 30px;
        width: 100px;
        height: 50px; 
      }
    `;
  }

  toggle() {
    this.opened = !this.opened;
  }

  click() {
    this.toggle();
  }

  render() {
    var color = "red";
    return html`
      <button class="${this.opened ? 'closed-btn' : 'open-btn'}" @click="${this.click}">
        ${this.opened ? 'Close' : 'Open'}
      </button>
      ${this.opened ? html`
        <div class="background-container"> 
          <slot> alert info</slot>
        </div>
      ` : ''}
      <style>
        .background-container {
          background-color: ${color};
        }
      </style>
    `;
  }

}

customElements.define(AlertApp.tag, AlertApp);
