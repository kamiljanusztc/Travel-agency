import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';

const newValueSet = (currentValue, id, checked) => {
  if (checked) {
    return [
      ...currentValue,
      id, // jesli checkbox zostal zaznaczony to dodajemy id tej wartosci opcji do tablicy
    ];
  } else {
    return currentValue.filter(value => value != id); // tworzymy nowa tablice za pomoca metody filter
  }
};

const OrderOptionCheckboxes = ({ values, currentValue, setOptionValue }) => (
  <div className={styles.checkboxes}>
    {values.map(value => (
      <label key={value.id}>
        <input type='checkbox'
          value={value.id}
          checked={currentValue.includes(value.id)}
          onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}
        />
        {value.name}
        ({formatPrice(value.price)})
      </label>
    ))}
  </div>
);

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.array,
  setOptionValue: PropTypes.func,
};

export default OrderOptionCheckboxes;
