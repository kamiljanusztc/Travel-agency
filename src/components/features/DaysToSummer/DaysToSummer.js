import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {

  getCuntdownDays() {
    const currentDay = new Date();
    const startSummerDate = new Date(Date.UTC(currentDay.getUTCFullYear(), 5, 21));
    const stopSummerDate = new Date(Date.UTC(currentDay.getUTCFullYear(), 8, 23));

    if (currentDay.getTime() > stopSummerDate.getTime()) {
      startSummerDate.setFullYear(startSummerDate.getFullYear() + 1);
    }

    const daysToSummer = Math.round((startSummerDate.getTime() - currentDay.getTime()) / (1000 * 60 * 60 * 24));

    if (currentDay.getTime() > startSummerDate.getTime() && currentDay.getTime() < stopSummerDate.getTime()) {
      return null;
    } else if (daysToSummer === 1) {
      return '1 day to summer!';
    } else if (currentDay.getTime() < startSummerDate.getTime() || currentDay.getTime() > stopSummerDate.getTime()) {
      return daysToSummer + ' days to summer!';
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

export default DaysToSummer;
