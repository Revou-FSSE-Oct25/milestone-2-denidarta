import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

type ButtonVariant = "primary" | "secondary" | "tertiary";
@customElement("my-button")
export class MyButton extends LitElement {
  @property({ type: String }) label = "Click";
  @property({ type: Boolean }) disabled = false;
  @property({ type: String, reflect: true }) variant: ButtonVariant = "primary";

  static styles = css`
    :host {
      display: inline-block;
      font-family: var(--sans-font, sans-serif);
    }

    button {
      appearance: none;
      -webkit-appearance: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 10px 20px;
      cursor: pointer;
      border-radius: 8px;
      border: 2px solid transparent;
      font-size: 14px;
      font-weight: 600;
      transition: all 0.2s ease-in-out;
      font-family: inherit;
      width: 100%;
      height: 100%;
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.6;
      filter: grayscale(1);
    }

    /* Primary Variant */
    :host([variant="primary"]) button {
      background-color: var(--brand-blue, #1480bf);
      color: var(--text-white, white);
    }

    :host([variant="primary"]) button:hover:not(:disabled) {
      background-color: var(--brand-blue-light, #759cf7);
      transform: translateY(-1px);
    }

    /* Secondary Variant */
    :host([variant="secondary"]) button {
      background-color: var(--brand-yellow, #fbff00);
      color: var(--text-primary, #213547);
      border-color: var(--brand-yellow-dark, #e6ea00);
    }

    :host([variant="secondary"]) button:hover:not(:disabled) {
      background-color: var(--brand-yellow-dark, #e6ea00);
      transform: translateY(-1px);
    }

    /* Tertiary Variant */
    :host([variant="tertiary"]) button {
      background-color: transparent;
      color: var(--brand-blue, #1480bf);
      border-color: var(--brand-blue, #1480bf);
    }

    :host([variant="tertiary"]) button:hover:not(:disabled) {
      background-color: var(--bg-hover-light, #f0f9ff);
      transform: translateY(-1px);
    }

    button:active:not(:disabled) {
      transform: translateY(0);
    }

    button:focus-visible {
      outline: 2px solid var(--brand-blue);
      outline-offset: 2px;
    }
  `;

  render() {
    return html`
      <button ?disabled=${this.disabled} @click=${this._onClick}>
        <slot></slot>
        ${this.label}
      </button>
    `;
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
