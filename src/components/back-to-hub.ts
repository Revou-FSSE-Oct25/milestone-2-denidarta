import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("back-link")
export class BackToHub extends LitElement {
  static styles = css`
    a {
      text-decoration: none;
      color: var(--text-white) !important;
      font-weight: bold;
      margin-bottom: 1rem;
      font-size: 16px;
      font-weight: 500;
    }
    a:hover {
      color: var(--brand-yellow) !important;
    }
  `;

  render() {
    return html` <div>
      <a href="/">← Back to Hub</a>
    </div>`;
  }
}
