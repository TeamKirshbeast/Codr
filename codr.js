function() {
	var Q = Quintus()
		.include("Sprites, Scenes, Input, 2D, Touch, UI")
		.setup()
		.controls()
		.touch();
  	
    Q.Sprite.extend("Player", {
      init: function(p) {
        this.super(p, {
          sheet: "player",
          x: 100,
          y: 90
        });

        this.add('2d, platformerControls');

        this.on("hit.sprite",function(collision) {
          if (collision.obj.isA("Flag")) {
            Q.stageScene("endGame",1, { label: "You Won!" });
              this.destroy();
          }
        });
      }
    });

