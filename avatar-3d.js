const stage = document.querySelector("#figurine");
const canvas = document.querySelector("#avatar-3d");
const modelUrl = "assets/avatar.glb";

async function modelExists() {
  try {
    const response = await fetch(modelUrl, { method: "HEAD", cache: "no-store" });
    return response.ok;
  } catch {
    return false;
  }
}

async function startAvatar() {
  if (!(await modelExists())) return;

  const THREE = await import("three");
  const { GLTFLoader } = await import("three/addons/loaders/GLTFLoader.js");

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(26, 1, 0.01, 100);
  camera.position.set(0, 0.18, 4.6);

  scene.add(new THREE.HemisphereLight(0xffffff, 0x6d8eb7, 2.4));
  const key = new THREE.DirectionalLight(0xffffff, 3.1);
  key.position.set(-2.5, 3.5, 4);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x9fc8ff, 2);
  rim.position.set(3, 1.5, -2);
  scene.add(rim);

  const loader = new GLTFLoader();
  const gltf = await loader.loadAsync(modelUrl);
  const avatar = gltf.scene;
  scene.add(avatar);

  const box = new THREE.Box3().setFromObject(avatar);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  avatar.position.sub(center);
  avatar.position.y -= size.y * 0.03;
  const scale = 2.8 / Math.max(size.x, size.y, size.z);
  avatar.scale.setScalar(scale);

  let headBone = null;
  avatar.traverse((node) => {
    const name = node.name.toLowerCase();
    if (!headBone && node.isBone && (name.includes("head") || name.includes("neck"))) {
      headBone = node;
    }
  });

  const turnNode = headBone || avatar;
  const baseQuaternion = turnNode.quaternion.clone();
  const targetQuaternion = baseQuaternion.clone();
  const euler = new THREE.Euler(0, 0, 0, "YXZ");
  let targetX = 0;
  let targetY = 0;

  function updateTarget(event) {
    const rect = stage.getBoundingClientRect();
    targetY = THREE.MathUtils.clamp(((event.clientX - rect.left) / rect.width - 0.5) * 0.85, -0.42, 0.42);
    targetX = THREE.MathUtils.clamp(-((event.clientY - rect.top) / rect.height - 0.5) * 0.38, -0.18, 0.18);
  }

  function resize() {
    const { width, height } = stage.getBoundingClientRect();
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  function animate() {
    euler.set(targetX, targetY, 0);
    targetQuaternion.copy(baseQuaternion).multiply(new THREE.Quaternion().setFromEuler(euler));
    turnNode.quaternion.slerp(targetQuaternion, 0.075);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  addEventListener("pointermove", updateTarget, { passive: true });
  addEventListener("resize", resize);
  resize();
  stage.classList.add("has-3d");
  animate();
}

startAvatar().catch((error) => {
  console.error("3D avatar could not be loaded:", error);
});
