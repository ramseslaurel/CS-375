import * as THREE from 'three';
import './style.css'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

//scene 
const scene = new THREE.Scene();
//scene.background = new THREE.Color('#000000')


//moon texture and space background
const textureLoader = new THREE.TextureLoader()
const moonTexture = textureLoader.load("moon.jpg")
const spaceTexture = textureLoader.load("space.jpg")

scene.background = spaceTexture


//Create sphere

const geometry = new THREE.SphereGeometry(3,64,64)
const material = new THREE.MeshStandardMaterial({
    map: moonTexture,
    //color: "#00ff83",
    roughness: 0.4,

    
}

)
const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)

// sizes
const sizes = {
    width:window.innerWidth,
    height: window.innerHeight,
}


//light
const light = new THREE.PointLight(0xffffff, 300, 100)
light.position.set(0,10,10)
scene.add(light)

//camera
const camera = new THREE.PerspectiveCamera(45,sizes.width /sizes.height)
camera.position.z = 15
scene.add(camera)


//renderer

const canvas = document.querySelector(".webgl")
const renderer = new THREE.WebGLRenderer({canvas})

renderer.setSize(sizes.width,sizes.height)
renderer.setPixelRatio(2)
renderer.render(scene,camera)


//controls
const controls = new OrbitControls(camera,canvas)
controls.enableDamping = true
controls.autoRotate = true
controls.autoRotateSpeed = 5




//resize

window.addEventListener("resize",() => {
    //update sizes

    
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    //update camera

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width,sizes.height)
})

const loop = () => {

    controls.update()
    renderer.render(scene,camera)
    window.requestAnimationFrame(loop)
}
loop()