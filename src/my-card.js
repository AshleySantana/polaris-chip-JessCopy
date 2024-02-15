import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Koala";
    this.link = '#';
    this.fancy = false;
    
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
      
      .crd {
  width: 500px;
}

.crd-wrapper {
  background-color: purple;
  width: 800px;
  display: flex;
  padding: 5%;
  margin: 5%;
}

.crd-wrapper.changeColor {
  background-color: blue;
}

.header {
  text-align: left;
  font-size: 60px;
  color: white;
}

.about-koala {
  padding: 5%;
  font-size: 35px;
  color: white;
}

.koala-image {
  display: flex;
  height: 250px;
  padding: 5%;
}

.btn {
    display: none;
    margin: 0% 50%;
    font-size: 20px;
    border-radius: 10%;
    text-align: left;
    width: 260px;
    height: 50px
}

@media screen and (min-width:500) and(max-width: 800) {
  .btn {
    display: block;
  }
}
  
 @media screen and (max-width: 500) {
   .card {
     transform: scale(0.5);
  }
    
   .header {
     transform: scale(0.5);
  }
    
   .koala-image {
     transform: scale(0.5);
   }
    
   .about-koala {
     transform: scale(0.5);
   }
    
   .btn {
     transform: scale(0.5);
   }
}

.duplicate {
     font-size: 40x;
     border-radius: 20px;
     width: 100px;
     height: 50px;    
}

.changename {
  font-size: 40x;
  border-radius: 20px;
  width: 150px;
  height: 50px
}

.changeimage {
  font-size: 40x;
  border-radius: 20px;
  width: 150px;
  height: 50px   
}

.changebg {
  font-size: 40x;
  border-radius: 20px;
  width: 150px;
  height: 50px   
}

.deletecard {
  font-size: 40x;
  border-radius: 20px;
  width: 150px;
  height: 50px  
}

:host([fancy]) {
display: block;
  background-color: pink;
  border: 2px solid fuchsia;
  box-shadow: 10px 5px 5px red;
}
    `;
  }

  render() {
    return html`
  <div id="koala-card">
      <div class="crd-wrapper">
        <h3 class="header">${this.title}</h3>
        <div class="about-koala">
          <p>The image shows a koala in a tree. I named it Fredrick. (I know, very cool!)</p>
          <div img class="koala">
            <!-- <img class="koala-image" src=https://www.wwf.org.uk/sites/default/files/styles/max_650x650/public/2022-05/_WW236934.jpg?itok=JlG-1l9V  alt=koala> -->
          <meme-maker image-url="https://cdn2.thecatapi.com/images/9j5.jpg"></meme-maker>
          </div>
          <div class="btn-wrapper">
                <a href="https://hax.psu.edu">
                <button class="btn">DETAILS</button>
                </a>
              </div>
            </div>
          </div>
        </div>
   </div>
   <div class="controls">
    <button class="duplicate">Clone</button>
    <button class="changename">Change Name</button>
    <button class="changeimage">Change Image</button>
    <button class="changebg">Change background</button>
    <button class="deletecard">Delete Card</button>
  </div>
  <details ?open="${this.fancy}">
  <summary>Description</summary>
  <div>
    <slot>${this.description}</slot>
  </div>
</details>`;

   
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
      fancy: { type: Boolean, reflect: true }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
