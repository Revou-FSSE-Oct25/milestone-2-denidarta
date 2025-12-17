import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello World!</h1>
    <div class="card">
      <button id="counter" type="button">count is 0</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

// Basic interactivity
const setupCounter = (element: HTMLButtonElement) => {
    let counter = 0
    const setCounter = (count: number) => {
        counter = count
        element.innerHTML = `count is ${counter}`
    }
    element.addEventListener('click', () => setCounter(counter + 1))
    setCounter(0)
}

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
