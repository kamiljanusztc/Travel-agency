import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({ currentValue, setOptionValue, name }) => (
  <div className={styles.number}>
    <label>
      <input
        type='text'
        placeholder={name}
        value={currentValue}
        onChange={event => setOptionValue(event.currentTarget.value)}
      />
    </label>
  </div>
);

OrderOptionText.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  name: PropTypes.string,
};

export default OrderOptionText;
