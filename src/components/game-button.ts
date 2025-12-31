import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("game-button")
export class GameButton extends LitElement {
  @property({ type: String }) label: string = "";

  static styles = [
    css`
      :host {
        display: inline-flex;
      }

      button {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-family: var(--game-font);
        border-radius: 16px;
        border: 4px solid #13380c;
        background: linear-gradient(
          to bottom,
          #86ef78 0%,
          #6bcc4d 50%,
          #41aa28 100%
        );
        color: white;
        font-size: 2.5rem;
        line-height: 1;
        padding-top: 16px;
        padding-left: 32px;
        padding-right: 32px;
        padding-bottom: 4px;
        cursor: pointer;
        transition: all 0.1s ease;
        overflow: hidden;

        /* Thick text border/outline */
        text-shadow:
          -3px -3px 0 #000,
          3px -3px 0 #000,
          -3px 3px 0 #000,
          3px 3px 0 #000,
          0px 4px 0 rgba(0, 0, 0, 0.3);
      }

      /* The Gloss Layer */
      button::after {
        content: "";
        position: absolute;
        top: 2px;
        left: 4px;
        right: 4px;
        height: 45%;
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0.6) 0%,
          rgba(255, 255, 255, 0.1) 100%
        );
        border-radius: 12px 12px 100% 100% / 12px 12px 40% 40%;
        pointer-events: none;
      }

      button:hover {
        filter: brightness(1.1);
        transform: translateY(-2px);
      }

      button:active {
        transform: translateY(2px);
        filter: brightness(0.9);
      }

      /* Ensure text is above the gloss */
      span {
        position: relative;
        z-index: 2;
      }
    `,
  ];

  render() {
    return html` <button @click=${this._onClick}>
      <span>${this.label}</span>
    </button>`;
  }

  private _onClick() {
    this.dispatchEvent(
      new CustomEvent("my-click", {
        detail: { label: this.label },
        bubbles: true,
        composed: true,
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "game-button": GameButton;
  }
}
