import React from 'react';

// 1. Définir une interface pour les props
interface GreetingProps {
  name: string;
}

// 2. Utiliser React.FC avec les props typées
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Bonjour, {name} !</div>;
};

export default Greeting;
