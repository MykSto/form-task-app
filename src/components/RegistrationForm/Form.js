import React, { useContext } from 'react';
import FirstStep from 'components/RegistrationForm/FirstStep/FirstStep';
import SecondStep from 'components/RegistrationForm/SecondStep/SecondStep';
import ThirdStep from 'components/RegistrationForm/ThridStep/ThirdStep';
import FourthStep from 'components/RegistrationForm/FourthStep/FourthStep';
import LastStep from 'components/RegistrationForm/LastStep/LastStep';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'components/RegistrationForm/Form.css';
import Context from 'Context';

const Form = () => {
  const {
    setStepStage, stepStage,
  } = useContext(Context);

  return (
    <form style={{ paddingTop: '10%' }}>
      {stepStage === 1 && (<FirstStep />)}
      {stepStage === 2 && (<SecondStep />)}
      {stepStage === 3 && (<ThirdStep />)}
      {stepStage === 4 && (<FourthStep />)}
      {stepStage === 5 && (<LastStep />)}
      <section id="buttons">
        {stepStage !== 0 && stepStage !== 5 && <button className="btn-class-nav" type="button" onClick={() => setStepStage(stepStage - 1)}>Previous</button>}
        {stepStage !== 5 && stepStage !== 0 && <button className="btn-class-nav" type="button" onClick={() => setStepStage(stepStage + 1)}>Next</button>}
        {stepStage === 5 && <button className="btncls" type="button" onClick={() => setStepStage(0)}>Submit</button>}
      </section>
    </form>
  );
};

export default Form;
