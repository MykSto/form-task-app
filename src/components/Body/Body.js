import React, { useState } from 'react';
import './Body.css';
import image from 'assets/picture.jpg';
import Form from 'components/RegistrationForm/Form';
import Context from '../../Context';

const Body = () => {
  const { Provider } = Context;

  const [personalInfo, setPersonalInfo] = useState({
    userInput: { name: 'Name', surname: 'Surname', pk: 'Personal Code' },
    additionalInfo: {
      education: ['Primary Education', 'Secondary Education', 'Higher Education'],
      currentPosition: ['Employer', 'Freelancer', 'Student'],
      jobIndustry: ['Information Technology', 'Architecture', 'Lawyer', 'Charity'],
      workingPerdio: ['Less than 1 year', '1', '2', '3', 'More than 4 years'],
    },
    personalInfo: {
      contractType: ['Fixed', 'Express', 'Other'],
      maritalStatus: ['Single', 'Married', 'Complicated'],
    },
    contactInfo: { phone: '' },
    loanPayDate: ['3', '7', '12', '17', '22', '27'],
  });

  const [label, setLabel] = useState({
    loanAmount:
    { text: 'Loan Amount', amountInput: 1 },
    loanTerm: 'Loan Term',
    liability: 'Incom and liabilities',
    smth: '',
  });

  const styling = {
    background: '#FBF2F0',
    backgroundColor: '#FBF2F0',
  };

  // conditional rendering

  return (
    <Provider
      value={{
        personalInfo,
        label,
      }}
    >
      <main style={styling} className="container-fluid">
        <section>
          <p>Vartojimo paskola</p>
          <p>Paskolos, kurios padeda</p>
          <article>
            Vartojimo paskola pravers, jei planuojate atnaujinti namus, remontuoti
            automobilį, įsigyti naujų baldų, buitinės technikos, ar kitą brangesnį
            daiktą.
          </article>
          <Form />
        </section>
        <figure>
          <img src={image} alt="" />
        </figure>
      </main>
    </Provider>
  );
};

export default Body;
