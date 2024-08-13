import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import GUI from "lil-gui";

const gui = new GUI();

const createText = (scene) => {
  const textCrate = (textString, position, rotation, guiFolderName) => {
    const loader = new FontLoader();
    loader.load(
      "node_modules/three/examples/fonts/droid/droid_sans_mono_regular.typeface.json",
      function (font) {
        const textGeometry = new TextGeometry(textString, {
          font: font,
          size: 1.1,
          height: 1,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.03,
          bevelSize: 0.03,
          bevelOffset: 0,
          bevelSegments: 5,
        });

        const textMaterial = new THREE.MeshBasicMaterial({
          color: "#D04848",
        });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);

        textMesh.position.set(...position);
        textMesh.rotation.set(...rotation);

        const folder = gui.addFolder(guiFolderName);
        folder.add(textMesh.position, "x");
        folder.add(textMesh.position, "y");
        folder.add(textMesh.position, "z");

        scene.add(textMesh);
      }
    );
  };

  textCrate(
    "Bir Abu Sayed", // The text string
    [25, 18.5, 54.5], // Position [x, y, z]
    [0, Math.PI, 0], // Rotation [x, y, z]
    "abu"
  );
  textCrate(
    "Bir Mir Mugdho", // The text string
    [-9.5, 18.5, 54.5], // Position [x, y, z]
    [0, Math.PI, 0], // Rotation [x, y, z]
    "joy"
  );
  textCrate(
    "Our Honorable Lawyers", // The text string
    [-26.7, 18.5, -100.5], // Position [x, y, z]
    // Rotation [x, y, z]
    "lawyer"
  );
  textCrate(
    "Dr Asif Nazrul", // The text string
    [10, 18.5, -100.5], // Position [x, y, z]
    // Rotation [x, y, z]
    "asif"
  );
};

export { createText };
