import * as THREE from 'three';
//import { s } from 'vite/dist/node/types.d-jgA8ss1A';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled=true;

document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 5, 5, 5 );
const material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
cube.castShadow=true;
scene.add( cube );

camera.position.z = 10;
camera.position.y =5;
camera.position.x=-2;
function light(scene){
    const spotLight = new THREE.SpotLight(0xFFFFFF,200,30);
    spotLight.position.set(-5,6,3);
    spotLight.castShadow=true;


    scene.add(spotLight);

    const spotLightHelper = new THREE.SpotLightHelper(spotLight);
    scene.add(spotLightHelper);
}
light(scene);

function floor(scene) {
    // <!--GEOMETRIA PLANO-->
    const geometryPlane = new THREE.PlaneGeometry( 26,26);
    const materialPlane = new THREE.MeshLambertMaterial( { color: 0x004488 } );
    var plane = new THREE.Mesh(geometryPlane, materialPlane);
    plane.receiveShadow=true;
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.y = -1;
    scene.add(plane);
}
floor(scene);
camera.lookAt(scene.position);
renderer.render( scene, camera );