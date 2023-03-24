import React, { FC, useState } from 'react'
import { useCurrentWeatherStore } from '../../stores/weatherGeneration'
import { useMutation } from 'react-query'
import WeatherAPI from '../../API/weatherAPI'

export const CityInput: FC = () => {
    const [city, setCity] = useState<string>('')

    const setIsLoading = useCurrentWeatherStore((state) => state.setIsLoading)
    const setIsError = useCurrentWeatherStore((state) => state.setIsError)
    const setData = useCurrentWeatherStore((state) => state.setData)

    const fetchingCurrentWeather = useMutation(
        (input: string) => {
            setIsLoading()
            return WeatherAPI.getCurrentWeather(input)
        },
        {
            onError: setIsError,
            onSuccess: setData,
        }
    )

    const HandleSearchWeather = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (city) {
            fetchingCurrentWeather.mutate(city)
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
