import { LitElement, html, css } from 'lit';

export class ConfirmationMessage extends LitElement {

  static get tag() {
    return 'confirmation-message';
  }

  constructor() {
    super();
  }

  static get styles() {
    return css`
      .confirmation-message {
        display: flex;
        background-color: #ac8dce;
        width: 300px; 
      }

    `;
  }

  yes() { 
    this.dispatchEvent(new CustomEvent('confirmationYes'));
  }

  no() {
    this.dispatchEvent(new CustomEvent('confirmationNo'));
  }


  render() {
    return html`
    <div class="confirmation-message">
    <button @click="${this.no}">X</button>
      <div class="message-wrapper">
        <!-- change so that instead of "user" it says actual username-->
        <p>Are you sure you want to delete user?</p>
        <button @click="${this.yes}">Yes</button>
        <button @click="${this.no}">No</button>
      </div>
    </div>
    `;
  }
}

customElements.define(ConfirmationMessage.tag, ConfirmationMessage);
