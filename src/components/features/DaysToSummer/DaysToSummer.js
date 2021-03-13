import React from 'react';
import styles from './HappyHourAd.scss';
// import PropTypes from 'prop-types';
// import { formatTime } from '../../../utils/formatTime';

class DaysToSummer extends React.Component {

  getCuntdownDays() {
    const currentDay = new Date();
    const startSummerDate = new Date(Date.UTC(currentDay.getUTCFullYear(), 6, 21));
    const stopSummerDate = new Date(Date.UTC(currentDay.getUTCFullYear(), 9, 23));
    const daysToSummer = Math.round(startSummerDate.getTime() - currentDay.getTime() / 1000 * 60 * 60 * 24);

    if (currentDay.getTime() > startSummerDate.getTime() && currentDay.getTime() < stopSummerDate.getTime()) {
      return null;
    } else if (currentDay.getTime() < startSummerDate.getTime() || currentDay.getTime() > stopSummerDate.getTime()) {
      return daysToSummer + ' days to summer!';
    } else if (daysToSummer === 1) {
      return '1 day to summer!';
    }
  }


  render() {
    const daysToSummer = this.getCuntdownDays();
    return (
      <div className={styles.component}>
        <h2 className={styles.title}>{daysToSummer}</h2>
      </div>
    );
  }


}

// DaysToSummer.propTypes = {
//   title: PropTypes.string,
// };

export default DaysToSummer;
