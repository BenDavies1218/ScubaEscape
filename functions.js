export const playerCollision = (player, walls) => {
  let collided = false;

  walls.forEach((wall) => {
    // Check for collision
    if (
      player.position.x < wall.position.x + wall.width &&
      player.position.x + player.width > wall.position.x &&
      player.position.y < wall.position.y + wall.height &&
      player.position.y + player.height > wall.position.y
    ) {
      // Collision detected
      collided = true;

      // Calculate the overlap on each side
      let overlapX =
        Math.min(
          player.position.x + player.width,
          wall.position.x + wall.width
        ) - Math.max(player.position.x, wall.position.x);
      let overlapY =
        Math.min(
          player.position.y + player.height,
          wall.position.y + wall.height
        ) - Math.max(player.position.y, wall.position.y);

      // Resolve collision by moving the player out of the wall
      if (overlapX < overlapY) {
        // Horizontal collision
        if (player.position.x < wall.position.x) {
          player.position.x -= overlapX;
        } else {
          player.position.x += overlapX;
        }
      } else {
        // Vertical collision
        if (player.position.y < wall.position.y) {
          player.position.y -= overlapY;
        } else {
          player.position.y += overlapY;
        }
      }
    }
  });

  return collided;
};
