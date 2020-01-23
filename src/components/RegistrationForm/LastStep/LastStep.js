import React, { useContext } from 'react';
import Context from 'Context';

const LastStep = () => {
  const {
    label,
  } = useContext(Context);

  const section = {
    display: 'flex',
    flexFlow: 'column',
    textAlign: 'center',
    alignItems: 'center',
  };

  return (
    <section style={section}>
      <p className="border" id="position">.:Summary:.</p>
      <p>
        {label.loanAmountText}
        {label.loanAmount}
      </p>
      <p>
        {label.loanTermText}
        {label.loanTerm}
      </p>
      <p>
        {label.loanPayDateText}
        {label.loanPayDates}
      </p>
      <p>
        {label.tuitionText}
        {label.answer}
      </p>
      <p>
        {label.newStepNumberText}
        YOURS:
        {' '}
        {label.mathAnswer}
      </p>
    </section>
  );
};

export default LastStep;
