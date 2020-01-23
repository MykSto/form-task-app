import React, { useContext } from 'react';
import Context from 'Context';

const LastStep = () => {
  const {
    label,
  } = useContext(Context);

  return (
    <section>
      <p>Summary</p>
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
        {label.mathAnswer}
      </p>
    </section>
  );
};

export default LastStep;
