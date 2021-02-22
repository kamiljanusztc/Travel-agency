import React from 'react';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import DatePicker from 'react-datepicker';

const OrderOptionDate = ({ setOptionValue, currentValue }) => (
  <div className={styles.component}>
    <DatePicker
      selected={currentValue}
      onChange={date => setOptionValue(date)}
    />
  </div>
);

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,

  currentValue: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]),
};

export default OrderOptionDate;
