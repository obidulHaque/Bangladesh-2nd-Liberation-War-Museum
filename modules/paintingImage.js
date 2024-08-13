import * as THREE from "three";
import GUI from "lil-gui";

const gui = new GUI();

const createPiantingImage = (scene, renderer) => {
  /// painting image map

  const imageCrate = (imageName, size, position, rotation, guiFolderName) => {
    const paintiingImage = new THREE.TextureLoader().load(imageName);
    paintiingImage.minFilter = THREE.LinearMipMapLinearFilter;
    paintiingImage.magFilter = THREE.LinearFilter;
    paintiingImage.generateMipmaps = true;
    paintiingImage.anisotropy = renderer.capabilities.getMaxAnisotropy();
    const imageMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(...size),
      new THREE.MeshBasicMaterial({
        map: paintiingImage,
        side: THREE.DoubleSide,
        // color: new THREE.Color(0.4, 0.4, 0.4),
      })
    );
    imageMesh.castShadow = true;
    imageMesh.receiveShadow = true;
    imageMesh.position.set(...position);
    imageMesh.rotation.set(...rotation);
    const folder = gui.addFolder(guiFolderName);
    folder.add(imageMesh.position, "x");
    folder.add(imageMesh.position, "y");
    folder.add(imageMesh.position, "z");
    scene.add(imageMesh);
  };

  imageCrate("/shohid/abu sayed.jpg", [19, 8], [17, 14, 53], [0, 0, 0]);
  imageCrate(
    "/shohid/IMG_20240813_211222.jpg",
    [19, 8],
    [-17, 14, 53],
    [0, 0, 0],
    "mugdho"
  );
  imageCrate(
    "/Lawyes/IMG_20240813_151204.jpg",
    [19, 8],
    [-17, 14, -99],
    [0, 0, 0],
    "lawyer"
  );
  imageCrate(
    "/teachers/IMG_20240813_211125.jpg",
    [19, 8],
    [17, 14, -99],
    [0, 0, 0],
    "asif"
  );
  imageCrate(
    "/protesters/IMG_20240813_151132.jpg",
    [17, 8],
    [-39.45, 14, 0],
    [0, Math.PI / 2, 0],
    "a"
  );
  imageCrate(
    "/protesters/IMG_20240813_151059.jpg",
    [19, 8],
    [-39.45, 14, -40],
    [0, Math.PI / 2, 0],
    "b"
  );
  imageCrate(
    "/protesters/IMG_20240813_211741.jpg",
    [17, 8],
    [-39.45, 14, -80],
    [0, Math.PI / 2, 0],
    "c"
  );
  imageCrate(
    "/shohid/IMG_20240813_211541.jpg",
    [19, 8],
    [39.45, 14, -40],
    [0, -Math.PI / 2, 0],
    "d"
  );
};

export { createPiantingImage };
