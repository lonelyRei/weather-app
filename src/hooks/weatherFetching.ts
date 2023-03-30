import { useMutation } from 'react-query'
import WeatherAPI from '../API/weatherAPI'
import { useCurrentWeatherStore } from '../stores/currentWeatherStore'
import useAppStore from '../stores/appStore'
import useFiveDaysWeatherStore from '../stores/fiveDaysWeatherStore'

// Хук для осуществления запроса на получение текущей погоды.
// Обновляет CurrentWeatherStore в зависимости от результата запроса и добавляет город в недавно просмотренные
export const useFetchingCurrentWeather = () => {
    const { setData, setIsError, setIsLoading } = useCurrentWeatherStore((state) => state)

    const { addRecentlyWatchedCity } = useAppStore((state) => state)

    return useMutation(
        (city: string) => {
            setIsLoading()
            return WeatherAPI.getCurrentWeather(city)
        },
        {
            onSuccess: (data) => {
                setData(data)
                addRecentlyWatchedCity({
                    name: data.name,
                    dt: data.dt,
                    degrees: data.main.temp,
                    id: data.weather[0].id,
                    description: data.weather[0].description,
                })
            },
            onError: setIsError,
        }
    )
}

// Хук для осуществления запроса на получение погоды на пять.
// Обновляет FiveDaysWeatherStore в зависимости от результата запроса
export const useFetchingFiveDaysWeather = () => {
    const { setData, setIsError, setIsLoading } = useFiveDaysWeatherStore((state) => state)
    return useMutation(
        (city: string) => {
            setIsLoading()
            return WeatherAPI.getFiveDaysWeather(city)
        },
        {
            onError: setIsError,
            onSuccess: setData,
        }
    )
}
