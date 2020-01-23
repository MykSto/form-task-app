import React, { useContext } from 'react';
import data from 'data';
import Context from 'Context';

const FirstStep = () => {
  const {
    label, setLabel,
  } = useContext(Context);

  const selectHandler = (event) => {
    event.persist();
    setLabel((prevState) => ({
      ...prevState,
      loanPayDates: event.target.value,
    }));
  };

  return (
    <section>
      <p>First steps</p>
      <label>
        {label.loanAmountText}
        <input
          type="text"
          className="form-control"
          value={label.loanAmount}
          onChange={(e) => {
            const re = /^[0-9\b]+$/;

            e.persist();
            if (e.target.value === '' || re.test(e.target.value)) {
              setLabel((label) => ({ ...label, loanAmount: e.target.value }));
            }
          }}
        />
      </label>
      <p>
        {label.loanTermText}
        <input
          type="text"
          className="form-control"
          value={label.loanTerm}
          onChange={(e) => {
            const re = /^[0-9\b]+$/;

            e.persist();
            if (e.target.value === '' || re.test(e.target.value)) {
              setLabel((label) => ({ ...label, loanTerm: e.target.value }));
            }
          }}
        />
      </p>
      {label.loanPayDateText}
      <select
        className="form-control"
        value={label.loanPayDates}
        onChange={selectHandler}
      >
        {data.loanPayDate.map((loan) => (
          <option value={loan} key={loan}>{loan}</option>
        ))}
      </select>
    </section>
  );
};

export default FirstStep;
