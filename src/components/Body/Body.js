import React, { useState } from 'react';
import './Body.css';
import Form from 'components/RegistrationForm/Form';
import data from 'data';
import Context from 'Context';

const Body = () => {
  const { Provider } = Context;

  const [personalInfo, setPersonalInfo] = useState({
    name: 'Name',
    surname: 'Surname',
    pk: 'Personal Code',
    phone: '',
  });

  const [label, setLabel] = useState({
    loanAmountText: 'Loan Amount: ',
    loanTermText: 'Loan Term: ',
    liability: 'Income and liabilities',
    loanAmount: 0,
    loanPayDates: 0,
    loanTerm: 0,
    formText: 'Loan request form',
    loanPayDateText: 'Loan pay date: ',
    upfrontAnswer: '',
    upfrontAmount: '',
    mathRound: 'Solve to finish the form',
    mathRoundProblem: ' 9 - 3 / 1/3 + 1 = ',
    mathAnswer: 0,
    newStepNumberText: 'Correct answer to the math is: ',
    ThirdStep: 'Third Step',
    tuitionText: 'Have you been asked to pay upfornt for a tuition? ',
  });

  const [stepStage, setStepStage] = useState(0);

  const styling = {
    background: '#FBF2F0',
    backgroundColor: '#FBF2F0',
  };

  return (
    <Provider
      value={{
        label,
        setLabel,
        stepStage,
        setStepStage,
        personalInfo,
        setPersonalInfo,
        data,
      }}
    >
      <main style={styling} className="container-fluid">
        <section>
          <p>Free Credit Form</p>
          <p>Credit, that will save your life.</p>
          <article>
            Credit is like a vannila sky, whether your dreams is a pleasant comply,
            {' '}
            <br />
or flying clouds with tears dry - this could be a place for a try.
            <br />
            <br />
Click 'Apply' button below, take your time to invest
            {' '}
            <br />
the form - and today will be the day.
            <br />
            <br />
It is a beta version, more content is coming!
          </article>
          <br />
          <button type="button" onClick={() => setStepStage(1)}>Apply</button>
          <Form />
        </section>
      </main>
    </Provider>
  );
};

export default Body;
