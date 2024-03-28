import { LitElement, html, css } from 'lit';
import { ConfirmationMessage } from './confirmation-message.js';
import "@lrnwebcomponents/rpg-character/rpg-character.js";

export class HaxcmsPartyUi extends LitElement {

  static get tag() {
    return 'haxcms-party-ui';
  }

  static get properties() {
    return {
      delete: {type: Boolean, reflect: true},
      character: {type: Array},
    };
  }

  constructor() {
    super();
    this.character = [];
    this.delete = false;
  }

  static get styles() {
    return css`
    .delete{
      display: none;
    }
      
    `;
  }

  addUser(){
    const user = this.shadowRoot.querySelector("#username").value;
    this.character.push(user);
    this.requestUpdate();
  }

  deleteUser() {
    this.character.indexOf()
  }


  render() {
    return html`
    <div class="user">
      <div class="character"> 
        ${this.character.map(name => html`
          <rpg-character seed="${name}"></rpg-character>
          `)}
      </div>
      <div class="add-user">
        <label for="username">Type username</label>
        <input type="text" id="username">
        <button class="add" @click=${this.addUser}>Add</button>
      </div>
      <div class="user-actions">
        <button class="button">Delete</button>
        <button class="submit">Submit</button>
      </div>
      <confirmation-message class="confrimation-message ${this.delete == true ? "delete" : ""}"></confirmation-message>
    </div>
    `;
  }

}

customElements.define(HaxcmsPartyUi.tag, HaxcmsPartyUi);
