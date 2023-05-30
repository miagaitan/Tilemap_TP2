export default class TheEnd extends Phaser.Scene {
    constructor() {
      super("TheEnd");
    }

preload() {
    this.load.image("end", "./public/assets/images/end.jpg")
}
create() {
    this.add.image(400,300, "end")
    .setScale(0.5)
    .setInteractive()
    .on("pointerdown", () => this.scene.start("hello-world"));
    }
}