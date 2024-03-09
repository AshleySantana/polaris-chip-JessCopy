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
    };
  }

  constructor() {
    super();
    this.title = "ALERT";
    this.opened = false;
    this.date = "07-14-2004";
  }

  static get styles() {
    return css`
      .background-container {
        display: flex;
        background-color: red;
        width: 1420px;
        height: 100px;
        padding: 5%;
        font-size: 30px;
      }

      .opened-btn, .closed-btn {
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
    return html`
      <button class="${this.opened ? 'closed-btn' : 'open-btn'}" @click="${this.click}">
        ${this.opened ? 'Close' : 'Open'}
      </button>
      ${this.opened ? html`
        <div class="background-container"> 
          <slot> alert info</slot>
        </div>
      ` : ''}
    `;
  }

}

customElements.define(AlertApp.tag, AlertApp);
