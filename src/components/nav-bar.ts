import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import logoSrc from "../assets/revofun-logo.webp";

@customElement("nav-bar")
export class NavBar extends LitElement {
  @property({ type: String }) logo = logoSrc;

  static styles = [
    css`
      :host {
        display: block;
      }

      p {
        margin: 0;
      }
      .nav-container {
        background-color: black;
        width: 100vw;
        height: 100px;
        max-width: 1600px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0;
      }

      ul {
        display: flex;
        flex-direction: row;
        gap: 8px;
        list-style: none;
      }

      li {
        font-family: var(--sans-font);
        user-select: none;
      }

      nav {
        display: flex;
        flex-direction: row;
        gap: 8px;
        align-items: center;
      }

      .button-container {
        display: flex;
        flex-direction: row;
        gap: 8px;
        margin-right: 16px;
      }

      ul {
        margin-right: 4px;
      }

      ul li {
        font-weight: 400;
        color: white;
        font-size: 1.2rem;
      }

      img {
        width: 300px;
        object-fit: cover;
        object-position: center;
      }
    `,
  ];

  render() {
    return html` <div class="nav-container">
      <img src=${this.logo} alt="revofun-logo" />
      <nav>
        <ul>
          <li>Games</li>
          <li>Career</li>
          <li>About Us</li>
        </ul>
        <div class="button-container">
          <game-button label="Login"></game-button>
          <my-button label="Create Account" variant="secondary"></my-button>
        </div>
      </nav>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "nav-bar": NavBar;
  }
}
