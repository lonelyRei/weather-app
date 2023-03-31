import { ICoordinatesResponse } from './types'

// Класс для работы с API для получения координат
class CoordinatesAPI {
    // Токен
    private static API_key: string = 'ccde496e5fb091eb4b671f71fdce685f'

    // Метод получения координат населенного пункта по его названию
    public static async getCoordinatesOfCity(city: string): Promise<ICoordinatesResponse> {
        const response = await fetch(
            `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${this.API_key}`
        )
        return (await response.json())[0]
    }
}

export default CoordinatesAPI
