import React, { useContext } from 'react';
import StepButton from 'components/StepButton/StepButton';
import Context from '../../../Context';

const Application = (props) => {
  const { label } = useContext(Context);


  return (
    <section>
      <p>First steps</p>
      <p>
        {label.loanAmount.text}
        <input type="text" value={label.smth} onChange={props.amount} />
      </p>
      <StepButton />
    </section>
  );
};

export default Application;
