import * as THREE from "three";

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Tone mapping to improve brightness and contrast
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.5; // Adjust for better brightness and contrast

// Shadow map enabled for better lighting and realism
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Optional: improves shadow quality

// Output encoding for better color representation
renderer.outputEncoding = THREE.sRGBEncoding;

// Optionally, set pixel ratio for higher resolution on high-DPI displays
renderer.setPixelRatio(window.devicePixelRatio);

export { renderer };
