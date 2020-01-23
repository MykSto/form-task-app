import React, { useContext } from 'react';
import Context from 'Context';

const SecondStep = () => {
  const {
    label, setLabel,
  } = useContext(Context);

  const onKeyPress = (event) => (event.charCode >= 65 && event.charCode <= 90)
  || (event.charCode >= 97 && event.charCode <= 122);

  const section = {
    display: 'flex',
    flexFlow: 'column',
    textAlign: 'center',
    alignItems: 'center',
  };

  return (
    <section style={section}>
      <p className="border" id="position">.:Second Step:.</p>

      <label>{label.tuitionText}</label>
      <input
        type="text"
        className="form-control"
        onKeyPress={(event) => onKeyPress(event)}
        onChange={(e) => {
          e.persist();
          setLabel((state) => ({ ...state, answer: e.target.value }));
        }}
      />
      <label>YES or NO</label>
    </section>
  );
};

export default SecondStep;
