export default class GameOver extends Phaser.Scene {
    constructor() {
      super("GameOver");
    }

preload() {
    this.load.image("Gameover", "./public/assets/images/gameover.jpg")
}
create() {
    this.add.image(400,300, "Gameover")
    .setScale(0.5)
    .setInteractive()
    .on("pointerdown", () => this.scene.start("hello-world"));
    }
}