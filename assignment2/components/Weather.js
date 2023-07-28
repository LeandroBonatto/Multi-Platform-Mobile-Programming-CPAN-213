import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setWeatherData } from './reducers';

const Weather = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weatherData);
  const [loading, setLoading] = useState(false);

  const handleFetchWeather = () => {
    setLoading(true);
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY')
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        dispatch(setWeatherData(data));
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  useEffect(() => {
    handleFetchWeather();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          {weatherData ? (
            <>
              <Text>{weatherData.name}</Text>
              <Text>{weatherData.weather[0].main}</Text>
              <Text>{weatherData.weather[0].description}</Text>
              <Text>{weatherData.main.temp}</Text>
            </>
          ) : (
            <Text>No weather data available</Text>
          )}
        </>
      )}
      <Button title="Fetch Weather" onPress={handleFetchWeather} />
    </View>
  );
};

export default Weather;

