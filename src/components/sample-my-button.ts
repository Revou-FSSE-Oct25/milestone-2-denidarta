import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-button')
export class MyButton extends LitElement {
  @property({ type: String }) label = 'Click';

  static styles = /*css*/ css`
    button {
      padding: 8px 12px;
      cursor: pointer;
      background-color: black;
      color: white;
      border-radius: 8px;
    }
  `;

  render() {
    return html`
      <button @click=${this._onClick}>
        ${this.label}
      </button>
    `;
  }

  private _onClick() {
    this.dispatchEvent(
      new CustomEvent('my-click', {
        detail: { label: this.label },
        bubbles: true,
        composed: true
      })
    );
  }
}