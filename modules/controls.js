import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";
import { camera } from "./camera.js";
import { scene } from "./scene.js";

const controls = new PointerLockControls(camera, document.body);
const btn = document.querySelector("#btn");
const btn2 = document.querySelector(".styled-button");
const mobileRotation = document.querySelector(".button-container");
const modal = document.querySelector("#modal");
const rotationProps = document.querySelector(".button-container");
const controlsButton = document.querySelector("#controls-container");
const moveForward = document.querySelector("#move-forward");
const moveBackward = document.querySelector("#move-backward");
const screenWidth = window.innerWidth;

let isMobile = screenWidth <= 800;

btn.addEventListener("click", () => {
  modal.style.display = "none";

  if (isMobile) {
    rotationProps.style.display = "block";
    controlsButton.style.display = "block";
  } else {
    rotationProps.style.display = "none";
    controlsButton.style.display = "none";
  }
  document.addEventListener("keydown", (e) => {
    let key = e.which;
    if (key === 83) {
      controls.lock();
    }
  });
});

btn2.addEventListener("click", () => {
  mobileRotation.style.display = "none";
});

// Event listener for mobile touch screen interaction
if (isMobile) {
  camera.rotation.reorder("YXZ"); // Helps manage touch rotation with PointerLockControls

  let touchStartX = 0,
    touchStartY = 0;

  document.addEventListener("touchstart", (event) => {
    if (event.touches.length === 1) {
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
    }
  });

  document.addEventListener("touchmove", (event) => {
    if (event.touches.length === 1) {
      let deltaX = event.touches[0].clientX - touchStartX;
      let deltaY = event.touches[0].clientY - touchStartY;

      camera.rotation.y -= deltaX * 0.002; // Adjust the rotation speed as needed
      camera.rotation.x -= deltaY * 0.002;

      // Clamp the rotation to avoid flipping the camera
      camera.rotation.x = Math.max(
        -Math.PI / 2,
        Math.min(Math.PI / 2, camera.rotation.x)
      );

      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
    }
  });
}

document.addEventListener("keydown", onPositionHandler, false);

// Forward and backward movement button handlers
moveForward.addEventListener("click", () => {
  moveAndCheckBounds(() => controls.moveForward(0.8));
});

moveBackward.addEventListener("click", () => {
  moveAndCheckBounds(() => controls.moveForward(-0.8));
});

function onPositionHandler(e) {
  let key = e.which;

  if (key === 38) {
    moveAndCheckBounds(() => controls.moveForward(0.5));
  } else if (key === 40) {
    moveAndCheckBounds(() => controls.moveForward(-0.5));
  } else if (key === 39) {
    moveAndCheckBounds(() => controls.moveRight(0.8));
  } else if (key === 37) {
    moveAndCheckBounds(() => controls.moveRight(-0.8));
  }
}

function moveAndCheckBounds(moveFunction) {
  let previousPosition = camera.position.clone();
  moveFunction();

  const cameraBB = new THREE.Box3().setFromCenterAndSize(
    camera.position,
    new THREE.Vector3(3, 3, 3)
  );

  const frontWallBB = new THREE.Box3().setFromObject(
    scene.getObjectByName("frontWall")
  );
  const backWallBB = new THREE.Box3().setFromObject(
    scene.getObjectByName("BackWall")
  );
  const leftWallBB = new THREE.Box3().setFromObject(
    scene.getObjectByName("leftWall")
  );
  const rightWallBB = new THREE.Box3().setFromObject(
    scene.getObjectByName("rightWall")
  );
  const ceilingBB = new THREE.Box3().setFromObject(
    scene.getObjectByName("ceiling")
  );

  if (
    cameraBB.intersectsBox(frontWallBB) ||
    cameraBB.intersectsBox(leftWallBB) ||
    cameraBB.intersectsBox(rightWallBB) ||
    cameraBB.intersectsBox(backWallBB) ||
    cameraBB.intersectsBox(ceilingBB)
  ) {
    camera.position.copy(previousPosition);
  }
}

export { controls };
