import React, { useContext } from 'react';
import Context from 'Context';

const ThirdStep = () => {
  const {
    label, setLabel,
  } = useContext(Context);

  let answer = '';

  if (label.answer.toUpperCase() === 'YES') {
    answer = (
      <section>
        <p>How much in american dollars?</p>
        <input
          type="text"
          value={label.upfrontAmount}
          onChange={(e) => {
            const re = /^[0-9\b]+$/;

            e.persist();
            if (e.target.value === '' || re.test(e.target.value)) {
              setLabel((label) => ({ ...label, upfrontAmount: e.target.value }));
            }
          }}
        />
      </section>
    );
  } else if (label.answer !== 'YES') {
    return (
      <p>
If :::
        {label.answer.toUpperCase()}
:::
        {' '}
GO TO THE NEXT STEP !
      </p>
    );
  }

  let warning = '';

  if (label.upfrontAmount.length === 0) {
    warning = (
      <p>Please enter an amount</p>
    );
  } else if (label.upfrontAmount.length <= 3) {
    warning = (
      <p style={{ color: 'red' }}>try again</p>
    );
  } else if (label.upfrontAmount.length === 4) {
    alert('Should be 4 digit number');
  }

  return (
    <section>
      <p>Third Step</p>
      {answer}
      {warning}
    </section>
  );
};

export default ThirdStep;