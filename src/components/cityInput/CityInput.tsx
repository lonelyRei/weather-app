import React, { FC, useState } from 'react'
import { useFetchingCurrentWeather, useFetchingFiveDaysWeather } from '../../hooks/weatherFetching'
import './cityInput.css'

export const CityInput: FC = () => {
    const [city, setCity] = useState<string>('')

    const fetchCurrentWeather = useFetchingCurrentWeather()
    const fetchFiveDaysWeather = useFetchingFiveDaysWeather()

    const HandleSearchWeather = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (city) {
            fetchCurrentWeather.mutate(city)
            fetchFiveDaysWeather.mutate(city)
        }
        setCity('')
    }
    return (
        <div className="input-area">
            <input
                placeholder="Введите город..."
                className="city__input"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button className="city__btn" onClick={HandleSearchWeather}>
                Узнать погоду
            </button>
        </div>
    )
}
