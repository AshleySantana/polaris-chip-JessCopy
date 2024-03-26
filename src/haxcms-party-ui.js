import { LitElement, html, css } from 'lit';
import { ConfirmationMessage } from './confirmation-message.js';

export class HaxcmsPartyUi extends LitElement {

  static get tag() {
    return 'haxcms-party-ui';
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

  render() {
    return html`
    <div class="user">
      <div class="add-user">
        <label for="username">Type username</label>
        <input type="text" id="username"><br><br>
        <button class="add">Add</button>
      </div>
      <div class="user-actions">
        <button class="delete">Delete</button>
        <button class="submit">Submit</button>
      </div>

      <confirmation-message></confirmation-message>
    </div>

    

    
    `;
  }

}

customElements.define(HaxcmsPartyUi.tag, HaxcmsPartyUi);
