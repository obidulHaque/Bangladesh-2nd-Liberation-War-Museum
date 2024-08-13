import { scene } from "./modules/scene.js";
import { camera } from "./modules/camera.js";
import { renderer } from "./modules/renderer.js";
import { controls } from "./modules/controls.js";
import { createObjects } from "./modules/objects.js";
import { createPaintingFram } from "./modules/paintingFram.js";
import { createPiantingImage } from "./modules/paintingImage.js";
import { hide } from "./modules/hide.js";
import { animation } from "./modules/gsap.js";
import { createText } from "./modules/text.js";
// Add camera to scene
scene.add(camera);

createObjects(scene);
createPaintingFram(scene);
createPiantingImage(scene, renderer);
hide();
animation();
createText(scene);

const animate = () => {
  requestAnimationFrame(animate);
  // controls2.update();

  renderer.render(scene, camera);
};
animate();

// Window Resize Handler
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
