import { LitElement, html, css } from 'lit';

export class ConfirmationMessage extends LitElement {

  static get tag() {
    return 'confirmation-message';
  }

  static get properties() {
    return {
    };
  }

  constructor() {
    super();
  }

  static get styles() {
    return css`
      
    `;
  }

  yes() { 
    this.dispatchEvent(new CustomEvent('confirmationYes'));
  }


  render() {
    return html`
    <div class="confirmation-message">
      <button class="exit-message">X</button>
      <div class="message-wrapper">
        <p>Are you sure you want to delete user?</p>
        <button @click="${this.yes}">Yes</button>
        <button>No</button>
      </div>
    </div>
    `;
  }
}

customElements.define(ConfirmationMessage.tag, ConfirmationMessage);
