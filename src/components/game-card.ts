import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("game-card")
export class gameCard extends LitElement {
  @property({ type: String }) href = "";
  @property({ type: String }) icon = "";
  @property({ type: String }) title = "";
  @property({ type: String }) description = "";
  @property({ type: String }) tag = "";
  @property({ type: String }) image = "";
  @property({ type: String }) alt = "";

  static styles = css`
    .game-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: var(--container-background);
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 16px;
      text-decoration: none;
      color: inherit;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      width: auto;
      height: 100%;
      max-width: 400px;
      padding: 8px;
    }

    // Top border hover effect.
    .game-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .game-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      border-color: rgba(102, 126, 234, 0.3);
    }

    .game-card:hover::before {
      opacity: 1;
    }

    .game-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
      transition: transform 0.3s ease;
    }

    .game-card:hover .game-icon {
      transform: scale(1.1);
    }

    .game-card h2 {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
      color: var(--text-primary);
    }

    .game-card p {
      font-size: 0.9rem;
      color: var(--text-secondary);
      text-align: center;
      margin-bottom: 8px;
    }

    .game-tag {
      font-size: 0.75rem;
      padding: 0.3rem 0.8rem;
      background: var(--brand-blue-light);
      border-radius: 20px;
      color: white;
      font-weight: 500;
    }

    .image-container {
      display: block;
      padding: 4px 4px 4px 0px;
    }

    img {
      width: 100%;
      border-radius: 12px;
    }
  `;

  render() {
    return html`
      <a href="${this.href}" class="game-card">
        ${this.image ? html`<img src=${this.image} alt="Card image" />` : null}
        <h2>${this.title}</h2>
        <p>${this.description}</p>
        <span class="game-tag">${this.tag}</span>
      </a>
    `;
  }
}
