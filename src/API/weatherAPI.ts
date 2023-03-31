import CoordinatesAPI from './coordinatesAPI'
import { ICoordinatesResponse, ICurrentWeatherResponse, IFiveDaysResponse } from './types'

// Класс для работы с API для получения данных о погоде
class WeatherAPI {
    // Токен
    private static API_key: string = 'ccde496e5fb091eb4b671f71fdce685f'

    // Метод для получения данных о текущей погоде в городе, который передается первым параметром
    public static async getCurrentWeather(city: string): Promise<ICurrentWeatherResponse> {
        const coordinatesData: ICoordinatesResponse = await CoordinatesAPI.getCoordinatesOfCity(city)
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${coordinatesData.lat}&lon=${coordinatesData.lon}&appid=${this.API_key}&lang=ru`
        )
        return response.json()
    }

    // Метод для получения прогноза погоды на 96 часов
    public static async getFiveDaysWeather(city: string): Promise<IFiveDaysResponse> {
        const coordinatesData: ICoordinatesResponse = await CoordinatesAPI.getCoordinatesOfCity(city)
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinatesData.lat}&lon=${coordinatesData.lon}&appid=${this.API_key}&lang=ru`
        )

        return response.json()
    }
}

export default WeatherAPI
