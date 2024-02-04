import { LitElement, html, css } from 'lit';

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
    this.title = "My card";
    this.link = '#';
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
      
      span {
        background-color: blue;
        color: black;
        font-size: 24px;
        padding: 16px;
        margin: 8px;
      }

      span:hover {
        background-color: grey;
        border: 1px solid black;
      }
    `;
  }

  render() {
    return html`<a href="$(this.link)"></a></a><span>${this.title}</span></a>`;
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
