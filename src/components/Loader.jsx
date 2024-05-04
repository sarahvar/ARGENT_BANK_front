import React from "react";
import styled, { keyframes } from "styled-components";

// Définition des keyframes pour les animations
const eat = keyframes`
  0% {
    clip-path: polygon(100% 74%, 44% 48%, 100% 21%);
  }
  25% {
    clip-path: polygon(100% 60%, 44% 48%, 100% 40%);
  }
  50% {
    clip-path: polygon(100% 50%, 44% 48%, 100% 50%);
  }
  75% {
    clip-path: polygon(100% 59%, 44% 48%, 100% 35%);
  }
  100% {
    clip-path: polygon(100% 74%, 44% 48%, 100% 21%);
  }
`;

const food = keyframes`
  0% {
    transform: translateX(250px) scale(1); /* Initial position (plus à droite) et taille normale */
  }
  50% {
    transform: translateX(30px) scale(0.5); /* Déplacer vers la gauche et réduire la taille */
  }
  100% {
    transform: translateX(-50px) scale(0); /* Déplacer vers la gauche et réduire la taille à zéro */
  }
`;

// Styled components pour le Pacman, la bouche et la nourriture
const Pacman = styled.div`
  width: 200px; /* Taille du Pacman */
  height: 200px; /* Taille du Pacman */
  border-radius: 50%;
  background: rgba(0, 188, 120, 1); /* Couleur du Pacman */
  position: relative;
  margin-top: 20px;
  left: 50px; /* Déplacement vers la gauche */
`;

const PacmanMouth = styled.div`
  background: #12002b;
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: polygon(100% 74%, 44% 48%, 100% 21%);
  animation: ${eat} 0.7s infinite;
`;

const PacmanEye = styled.div`
  position: absolute;
  width: 30px; /* Taille de l'œil */
  height: 30px; /* Taille de l'œil */
  background: #333333;
  border-radius: 50%;
  top: 50px; /* Position de l'œil */
  right: 75px; /* Position de l'œil */
`;

const Food = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  background: gold; /* Couleur de la nourriture (jaune) */
  border-radius: 50%;
  top: 40%;
  left: 180px; /* Position horizontale initiale (plus à gauche) */
  animation: ${food} 2s linear infinite;
`;

// Composant fonctionnel pour le loader Pacman
function PacmanLoader() {
  const handleFoodAnimation = () => {
    console.log("Food reached Pacman's mouth!"); // Action lorsque la nourriture atteint la bouche
  };

  return (
    <Pacman>
      <PacmanMouth />
      <PacmanEye />
      <Food onAnimationEnd={handleFoodAnimation} />
    </Pacman>
  );
}

// Page principale
export default function Loader() {
  return (
    <div>
      <PacmanLoader />
    </div>
  );
}
