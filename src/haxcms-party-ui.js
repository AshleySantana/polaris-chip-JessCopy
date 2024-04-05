import { LitElement, html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import { ConfirmationMessage } from './confirmation-message.js';
import "@lrnwebcomponents/rpg-character/rpg-character.js";

export class HaxcmsPartyUi extends DDD {

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
    this.handleKeyDown = this.KeyDown.bind(this);
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        padding: 10px;
        font-style: var(---ddd-font-primary);
      }

      rpg-character{
        height: 60%;
        width: 60%;
      }

      .user {
        display: flex-wrap;
      }

      .characterContainer {
        display: flex;
        flex-direction: column;
        background-color: var(--ddd-theme-default-keystoneYellow);
        margin: 10px;
        border-right:8px;
        height: 200px;
        width: 200px;
        align-items: center;

      }

      .spacer {
        height: 100px;
      }

      .characterRow{
        display: flex;
        flex-direction: row;
        width: 800px;
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

      .button {
        width: 100%;
      }
    `;
  }


  addUser() {
    const usernameInput = this.shadowRoot.querySelector("#username");
    const user = usernameInput.value.trim(); 
    const isValid = /^[a-z0-9]+$/.test(user); 
    if (isValid && !this.character.includes(user)) {
      this.character.push(user);
      this.requestUpdate();
    }else if(this.character.includes(user)) {
      window.alert(user + " already invited");
    } else {
      window.alert(user + " is an invalid username. Numbers and lowercase letters ONLY");
    }
    usernameInput.value = "";
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

  makeItRain() {
    if(this.character.length >= 1){
      import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
        (module) => {
          setTimeout(() => {
            this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
          }, 0);
        }
      )
      const userSubmited = this.character.toString();
      localStorage.setItem("party", userSubmited);
      console.log(localStorage.getItem("party").split(","));
      window.alert("Success! Invites sent to: " + localStorage.getItem("party").split(","))
    } else {
      window.alert("No users provided");
    }
    ;
  }

 KeyDown(event) {
    // Check if the pressed key is 'Enter' and if it's the input field
    if (event.key === 'Enter' && event.target.id === 'username') {
      this.addUser();
    }
  }

  render() {
    return html`
    <confetti-container id="confetti">
    <h1 class='header'>GET THE PARTY STARTED!</h1>
    <h3>*Usernames: lowercase letters and numbers ONLY*</h3>
      <div class="add-user">
        <input type="text" id="username" placeholder="Type user" @keydown="${this.KeyDown}">
        <button class="add" @click=${this.addUser}>Add</button>
      </div>
      <div class="user-actions">
        <button class="submit" @click="${this.makeItRain}">Click Submit</button>
      </div>
      <div class="user">
          <div class="characterRow">
            ${this.character.map(name => html`
              <div class="characterContainer">
                <rpg-character seed="${name}"></rpg-character>
                <div class=spacer></div>
                <div>${name}</div>
                <button id=${name} class="button" @click="${this.deleteUser}">Delete</button>
              </div>
          </div>
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
        
      </div>
    </confetti-container>
      
    `;
  }

}

customElements.define(HaxcmsPartyUi.tag, HaxcmsPartyUi);
