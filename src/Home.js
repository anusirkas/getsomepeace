import React, { useEffect } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./style.css";

const Home = () => {
  useEffect(() => {
    const camera = new THREE.PerspectiveCamera(
      10,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 13;

    const scene = new THREE.Scene();
    let bird;
    let mixer;

    const loader = new GLTFLoader();
    loader.load("/bird_animations_alex.glb", (gltf) => {
        bird = gltf.scene;
        bird.scale.set(0.5, 0.5, 0.5);
        scene.add(bird);

        mixer = new THREE.AnimationMixer(bird);
        mixer.clipAction(gltf.animations[0]).play();
        modelMove();
      },
      (xhr) => {
        console.log(`Loading model: ${(xhr.loaded / xhr.total) * 100}% loaded`);
      },
      (error) => {
        console.error("Error loading the model:", error);
      }
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("container3D").appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(500, 500, 500);
    scene.add(topLight);

    const reRender3D = () => {
      requestAnimationFrame(reRender3D);
      renderer.render(scene, camera);
      if (mixer) mixer.update(0.02);
    };
    reRender3D();

    const modelMove = () => {
      const sections = document.querySelectorAll(".section");
      let currentSection;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3) {
          currentSection = section.id;
        }
      });

      let arrPositionModel = [
        { id: "banner", position: { x: 0, y: -1, z: 0 }, rotation: { x: 0, y: 1.5, z: 0 } },
        { id: "intro", position: { x: 1.5, y: -1, z: -5 }, rotation: { x: 0.5, y: -0.5, z: 0 } },
        { id: "description", position: { x: -1, y: -1, z: -5 }, rotation: { x: 0, y: 0.5, z: 0 } },
        { id: "contact", position: { x: 0.8, y: -1, z: 0 }, rotation: { x: 0.3, y: -0.5, z: 0 } }
      ];

      let position_active = arrPositionModel.findIndex(val => val.id === currentSection);
      if (position_active >= 0) {
        let new_coordinates = arrPositionModel[position_active];

        gsap.to(bird.position, {
          x: new_coordinates.position.x,
          y: new_coordinates.position.y,
          z: new_coordinates.position.z,
          duration: 3,
          ease: "power1.out"
        });

        gsap.to(bird.rotation, {
          x: new_coordinates.rotation.x,
          y: new_coordinates.rotation.y,
          z: new_coordinates.rotation.z,
          duration: 3,
          ease: "power1.out"
        });
      }
    };

    window.addEventListener("scroll", () => {
      if (bird) modelMove();
    });

    window.addEventListener("resize", () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

  }, []);

  return (
    <>
      <div className="section" id="banner">
        <div className="content-fit">
            <div className="title" data-before="and rest in our cottages">GET SOME PEACE</div>
        </div>
        <img 
          src="forest.png" 
          className="decorate" 
          alt="" 
          style={{ width: "60vw", top: "300px", bottom: "0", right: "0" }} 
        />
        <img 
          src="leaf.png" 
          className="decorate" 
          alt="" 
          style={{ width: "40vw", top: "800px", bottom: "0", left: "0", zIndex: "101" }} 
        />
      </div>

      <div className="section" id="intro">
        <div className="content-fit">
          <div className="number">01</div>
            <div className="des">
              <div className="title">Get Some Peace</div>
              <p>
                In today’s fast-paced world, we often find ourselves juggling endless responsibilities—work, family, health, and everything in between. 
                The constant hustle leaves little room for true relaxation.  
                <br /><br />
                What if there was a place where you could truly unwind? A peaceful escape, nestled in nature, yet just a short distance from the city. 
                Imagine waking up to the sound of rustling leaves, flowing rivers, and birds singing—the simple joys of nature all around you.  
                <br /><br />
                That’s why we created Get Some Peace — a sanctuary designed for those who seek tranquility, reflection, and a break from the noise of everyday life.
              </p>
          </div>
        </div>
        <img 
          src="purpleflowers.png" 
          className="decorate" 
          alt="" 
          style={{ width: "30vw", top: "500px", bottom: "0", left: "10vw", zIndex: "101" }} 
        />
      </div>

      <div className="section" id="description">
        <div className="content-fit">
          <div className="number">02</div>
          <div className="des">
              <div className="title">Cottages</div>
              <p>
                Our cozy, thoughtfully designed cottages offer everything you need for a restful getaway.  
                Each space includes a comfortable double bed, a fully equipped mini-kitchen, a private shower and toilet, a bookshelf, board games, and a cozy seating area.  
                <br /><br />
                While we do offer Wi-Fi, we encourage you to unplug — immerse yourself in a book, take a mindful walk along scenic forest trails, or simply listen to the calming sounds of nature.  
                <br /><br />
                Feeling adventurous? Spot the Ice Bird by the river and record your sightings in our guestbook!  
                <br /><br />
                Are you ready to slow down, recharge, and reconnect with yourself? Book your stay today and experience the beauty of a digital detox in nature.
              </p>
          </div>
          <a href="/cottages" className="book-button">Book Your Stay</a>
        </div>
        <img 
          src="modernhouse.png" 
          className="decorate" 
          alt="" 
          style={{ width: "50vw", bottom: "0", right: "0" }} 
        />
      </div>

      <div className="section" id="contact">
        <div className="content-fit">
          <div className="number">03</div>
            <div className="des">
              <div className="title">CONTACT</div>
                <table>
                  <tr><td>Email</td><td>test@gmail.com</td></tr>
                  <tr><td>Phone</td><td>+00 000 000 000</td></tr>
                  <tr><td>Website</td><td>www.website.com</td></tr>
                  <tr><td>Instagram</td><td>@instagram</td></tr>
                </table>
                <div className="sign">See You Soon!</div>
            </div>
        </div>
      </div>

      <div id="container3D"></div>
    </>
  );
};

export default Home;
