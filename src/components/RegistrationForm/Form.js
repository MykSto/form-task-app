import React, { useState, useContext } from 'react';
import Application from 'components/RegistrationForm/FirstStep/Application';
import PersonalInfo from 'components/RegistrationForm/SecondStep/PersonalInfo';
import Submit from 'components/RegistrationForm/ThridStep/Submit';
import Context from '../../Context';

const Form = () => {
  const [stepStage, setStepStage] = useState({
    stepStageOne: null,
    stepStageTwo: null,
    stepStageThree: null,
    text: 'Vartojimo paskolos paraiška',
    showText: false,
  });

  const { label, setLabel } = useContext(Context);

  const setStageHandler = () => {
    setStepStage((stepStage) => ({
      ...stepStage,
      stepStageOne: 1,
      showText: true,
    }));
  };

  let header = '';

  if (stepStage.showText) {
    header = (
      <p>{stepStage.text}</p>
    );
  }

  const inputChangedHandler = (event) => {
    setLabel({
      smth: event.target.value,
    });
  };

  return (
    <form target="/form">
      <input type="button" value="Request" onClick={setStageHandler} />
      {header}
      {stepStage.stepStageOne === 1 && (<Application onChange={inputChangedHandler} />)}
      <p>{label.smth}</p>
      {stepStage.stepStageOne === 2 && (<PersonalInfo />)}
      {stepStage.stepStageOne === 3 && (<Submit />)}
    </form>
  );
};

export default Form;
