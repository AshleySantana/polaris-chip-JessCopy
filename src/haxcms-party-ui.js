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
      confirmed: {type: Boolean, reflect: true}
    };
  }

  constructor() {
    super();
    this.character = [];
    this.delete = false;
    this.confirmed = false; 
  }

  static get styles() {
    return css`
      /* .character{

      }

      .add{

      }

      .delete{

      }

      .submit{

      } */
    `;
  }

  addUser(){
    const user = this.shadowRoot.querySelector("#username").value;
    this.character.push(user);
    this.requestUpdate();
  }

  deleteUser(e) {
    console.log("is it coming here")
    this.delete = true;
    this.requestUpdate();
    if(this.confirmed===true){
      var id = e.target.id;
      var position = this.character.indexOf(id);
      this.character.splice(position, 1);
      this.confirmed = false;
    }else{
      this.delete=false;
      this.requestUpdate();
      return;
    }
  }

  confirmedYes() {
    this.confirmed = true; 
    this.requestUpdate();
  }


  render() {
    return html`
    <div class="user">
      <div class="character"> 
        ${this.character.map(name => html`
          <rpg-character seed="${name}"></rpg-character>
          <button id=${name} class="button" @click="${this.deleteUser}">Delete</button>
          <confirmation-message 
            class="confirmation-message ${this.delete == true ? "delete" : ""}" 
            @confirmationYes="${this.confirmedYes}"></confirmation-message>
          `)}
      </div>
      <div class="add-user">
        <label for="username">Type username</label>
        <input type="text" id="username">
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
