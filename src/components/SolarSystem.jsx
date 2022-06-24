import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="solar-system" data-testid="solar-system">
        <Title className="title" headline="Planetas" />
        { Planets.map((planet, index) => {
          const { name, image } = planet;
          return <PlanetCard key={ index } planetName={ name } planetImage={ image } />;
        })}
      </div>
    );
  }
}

export default SolarSystem;
