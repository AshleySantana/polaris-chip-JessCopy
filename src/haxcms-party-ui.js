import { LitElement, html, css } from 'lit';
import { ConfirmationMessage } from './confirmation-message.js';
import "@lrnwebcomponents/rpg-character/rpg-character.js";



export class HaxcmsPartyUi extends LitElement {

  static get tag() {
    return 'haxcms-party-ui';
  }

  static get properties() {
    return {
      character: { type: Array },
      deleteUserPending: { type: Boolean },
      userToDelete: { type: String }
    };
  }

  constructor() {
    super();
    this.character = [];
    this.deleteUserPending = false;
    this.userToDelete = '';
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        padding: 10px;
      }

      .user {
        background-color: white;
        display: flex-wrap;
      }

      .character {
        /* shows background color for each user only if "display" is not present */
        background-color: #3467de;
        width: 170px;
        padding: 4px;
        display: flex;
      }

      .add-user {
        display: flex;
        font-size: 50px;
        border-radius: 20px;
        width: 150px;
        height: 50px;
        padding: 5px;
      }
      
      .add {
        padding: 2%;
      }
    `;
  }


  addUser() {
    const user = this.shadowRoot.querySelector("#username").value;
    this.character.push(user);
    this.requestUpdate();
  }

  deleteUser(e) {
    const id = e.target.id;
    this.userToDelete = id;
    this.deleteUserPending = true;
  }

  confirmedYes() {
    const position = this.character.indexOf(this.userToDelete);
    if (position !== -1) {
      this.character.splice(position, 1);
      this.userToDelete = '';
      this.deleteUserPending = false;
      this.requestUpdate();
    }
  }

  confirmedNo() {
    this.userToDelete = '';
    this.deleteUserPending = false;
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="user">
        <div class="character"> 
          ${this.character.map(name => html`
            <rpg-character seed="${name}"></rpg-character>
            <button id=${name} class="button" @click="${this.deleteUser}">Delete</button>
            ${this.deleteUserPending && name === this.userToDelete ?
              html`
              <confirmation-message 
                class="confirmation-message" 
                @confirmationYes="${this.confirmedYes}" 
                @confirmationNo="${this.confirmedNo}" 
              ></confirmation-message>`
              : ''
            }
          `)}
        </div>
        <div class="add-user">
          <input type="text" id="username" placeholder="Type user">
          <button class="add" @click=${this.addUser}>Add</button>
        </div>
        <div class="user-actions">
          <button class="submit">Submit</button>
        </div>
      </div>
    `;
  }

}

customElements.define(HaxcmsPartyUi.tag, HaxcmsPartyUi);
