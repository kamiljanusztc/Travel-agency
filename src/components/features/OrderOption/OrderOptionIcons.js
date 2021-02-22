import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({ values, required, currentValue, setOptionValue }) => (
  <div className={styles.icon}>
    {required ? '' : (
      <div className={styles.icon} onClick={() => setOptionValue('')}>
        <Icon name={'times-circle'}></Icon>
        none
      </div>
    )}
    {values.map(value => (
      <div className={currentValue === value.id ? styles.iconActive : styles.icon}
        key={value.id}
        onClick={() => setOptionValue(value.id)}
      >
        <Icon name={value.icon} />
        {value.name} ({formatPrice(value.price)})
      </div>

    ))}

    <div></div>
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  required: PropTypes.bool,
};

export default OrderOptionIcons;
