import React, { useContext } from 'react';
import Context from 'Context';

const SecondStep = () => {
  const {
    label, setLabel,
  } = useContext(Context);

  const onKeyPress = (event) => (event.charCode >= 65 && event.charCode <= 90)
  || (event.charCode >= 97 && event.charCode <= 122);

  return (
    <section>
      <p>Second Step</p>

      <label>{label.tuitionText}</label>
      <input
        type="text"
        className="form-control"
        onKeyPress={(event) => onKeyPress(event)}
        onChange={(e) => {
          // const re = /^[a-zA-Z]+$/;

          e.persist();
          // if (e.target.value.match(re) === '' || re.test(e.target.value)) {
          setLabel((state) => ({ ...state, answer: e.target.value }));
          // }
        }}
      />
      <label>YES or NO</label>
      <p>Nothing but YES will redirect to the next step *^*</p>
    </section>
  );
};

export default SecondStep;
