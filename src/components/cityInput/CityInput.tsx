import React, { FC, useState } from 'react'
import { useCurrentWeatherStore } from '../../stores/currentWeatherStore'
import { useMutation } from 'react-query'
import WeatherAPI from '../../API/weatherAPI'
import useFiveDaysWeatherStore from '../../stores/fiveDaysWeatherStore'

export const CityInput: FC = () => {
    const [city, setCity] = useState<string>('')

    const setCurrentIsLoading = useCurrentWeatherStore((state) => state.setIsLoading)
    const setCurrentIsError = useCurrentWeatherStore((state) => state.setIsError)
    const setCurrentData = useCurrentWeatherStore((state) => state.setData)

    const setFiveDaysIsLoading = useFiveDaysWeatherStore((state) => state.setIsLoading)
    const setFiveDaysIsError = useFiveDaysWeatherStore((state) => state.setIsError)
    const setFiveDaysData = useFiveDaysWeatherStore((state) => state.setData)

    const fetchCurrentWeather = useMutation(
        (city: string) => {
            setCurrentIsLoading()
            return WeatherAPI.getCurrentWeather(city)
        },
        {
            onError: setCurrentIsError,
            onSuccess: setCurrentData,
        }
    )

    const fetchFiveDaysWeather = useMutation(
        (city: string) => {
            setFiveDaysIsLoading()
            return WeatherAPI.getFiveDaysWeather(city)
        },
        {
            onError: setFiveDaysIsError,
            onSuccess: setFiveDaysData,
        }
    )

    const HandleSearchWeather = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (city) {
            fetchCurrentWeather.mutate(city)
            fetchFiveDaysWeather.mutate(city)
        }
        setCity('')
    }
    return (
        <div>
            <input
                placeholder="Введите город..."
                className="header__input"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button className="header__btn" onClick={HandleSearchWeather}>
                Узнать погоду
            </button>
        </div>
    )
}
