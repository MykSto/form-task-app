import React from "react";
import "../Body/Body.css";
import image from "../Content/picture.jpg";
import ButtonInput from '../RegistrationForm/Form'

const Body = props => {
  const styling = {
    background: "#FBF2F0",
    backgroundColor: "#FBF2F0"
  };

  return (
    <main style={styling} className='container-fluid'>
      <section>
        <p>Vartojimo paskola</p>
        <p>Paskolos, kurios padeda</p>
        <article>
          Vartojimo paskola pravers, jei planuojate atnaujinti namus, remontuoti
          automobilį, įsigyti naujų baldų, buitinės technikos, ar kitą brangesnį
          daiktą.
        </article>
        <ButtonInput/>
      </section>
      <figure>
        <img src={image} alt="" />
      </figure>
    </main>
  );
};

export default Body;
