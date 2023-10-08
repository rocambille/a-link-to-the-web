class Game {
  constructor() {
    this.username = prompt("Register your name");

    alert(`Let's go ${this.username} ! Ready to play ?`);

    this.showMessage("Help me...", () => {
      this.showMessage("Please, help me...");
    });
  }

  showMessage(
    text,
    next = null,
    parent = document.querySelector(".typewriter")
  ) {
    const p = document.createElement("p");

    p.textContent = text;
    p.style.setProperty("--animation-duration", `${(text.length * 3.5) / 20}s`);

    (parent ?? document.body).appendChild(p);

    p.addEventListener("animationend", () => {
      p.style.animation = "initial";
      p.style.borderRight = "initial";

      if (next != null) {
        setTimeout(next, 1000);
      }
    });
  }
}

const game = new Game();
