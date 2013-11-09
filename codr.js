Q.Sprite.extend("DraggableObject", {
  init: function() {
    this.on("drag");
  },

  drag: function(touch) {
    this.p.x = touch.origX + touch.dx;
    this.p.y = touch.origY + touch.dy;
  }
});