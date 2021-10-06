import React from 'react';

import styles from './CityForecast.module.scss';
import LocationIcon from '../../assets/images/location-icon.png';
import WindIcon from '../../assets/images/wind-icon.png';
import HumidityIcon from '../../assets/images/hum-icon.png';

import CurrentDate from '../../components/CurrentDate/CurrentDate';
import TemperatureUniteToggle from './TemperatureUniteToggle/TemperatureUniteToggle';

function CityForecast({ cityForecast, cityInfo }) {
  const weather = cityForecast.current;
  const symbolPhrase = weather.symbolPhrase[0].toUpperCase() + weather.symbolPhrase.slice(1);

  return (
    <div className={styles.cityForecast}>
      <div className={styles.content}>
        <CurrentDate weatherImg={weather.symbol} />
        <div className={styles.cityTemperature}>
          <span className={styles.temperatureDegrees}>{weather.temperature}</span>
          <TemperatureUniteToggle />
        </div>
        <span className={styles.temperatureDescription}>{symbolPhrase}</span>
        <div className={styles.cityLocation}>
          <img src={LocationIcon} alt="location icon" />
          <span>{`${cityInfo.adminArea}, ${cityInfo.country}`}</span>
        </div>
        <div className={styles.addedInfo}>
          <div className={styles.addedInfoType}>
            <div className={styles.addedInfoTypeName}>
              <img src={WindIcon} alt="wind icon" />
              <span className={styles.addedInfoType}>Wind</span>
            </div>
            <div className={styles.addedInfoTypeName}>
              <img src={HumidityIcon} alt="wind icon" />
              <span className={styles.addedInfoType}>Hum</span>
            </div>
          </div>
          <span className={styles.verticalLine}></span>
          <div className={styles.addedInfoValue}>
            <span className={styles.addedInfoValue}>{weather.windSpeed} km/h</span>
            <span className={styles.addedInfoValue}>{weather.relHumidity} %</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CityForecast;
