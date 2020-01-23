import React, { useContext } from 'react';
import Context from 'Context';

const FourthStep = () => {
  const {
    label, setLabel, setStepStage,
  } = useContext(Context);

  if (label.mathAnswer === '1') {
    setStepStage(4);
  } else if (label.mathAnswer > '1') {
    setStepStage(4);
    setLabel((label) => ({
      ...label,
      mathAnswer: '',
    }));
  }

  return (
    <section>
      <p>Fourth Step</p>
      <label>Your answer will decide whether you go the last step!</label>
      <input
        type="text"
        className="form-control"
        value={label.mathAnswer}
        onChange={(e) => {
          const re = /^[0-9\b]+$/;

          e.persist();
          if (e.target.value === '' || re.test(e.target.value)) {
            setLabel((label) => ({ ...label, mathAnswer: e.target.value }));
          }
        }}
      />
      {label.mathRoundProblem}
      {label.mathAnswer}
    </section>
  );
};

export default FourthStep;
