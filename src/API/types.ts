// Интерфейс ответа от сервера на запрос определения координат по названию города
export interface ICoordinatesResponse {
    // Название населенного пункта
    name: string

    // Широта
    lat: number

    // Долгота
    lon: number

    // Страна
    country: string

    // Штат
    state: string
}

// Интерфейс поля main структуры, предстваляющей собой ответ от сервера на запрос текущей погоды
interface ICurrentWeatherMainResponse {
    // Температура
    temp: number

    // Температура по ощущениям
    feels_like: number

    // Давление
    pressure: number

    // Максимальная температура
    temp_max: number

    // Минимальная температура
    temp_min: number
}

// Интерфейс поля sys структуры, предстваляющей собой ответ от сервера на запрос текущей погоды
interface ICurrentWeatherSysResponse {
    // Страна
    country: string

    // Время восхода
    sunrise: number

    // Время заката
    sunset: number
}

// Интерфейс поля weather структуры, предстваляющей собой ответ от сервера на запрос текущей погоды
interface ICurrentWeatherWeatherResponse {
    // Описание погоды (более подробное)
    description: string

    // Погода (облачно, солнечно)
    main: string

    // Изображение, характеризующее погоду
    icon: string

    // Идентификатор для добавления картинки
    id: number
}

// Интерфейс ответа от сервера на запрос текущей погоды
export interface ICurrentWeatherResponse {
    // Время в миллисекундах
    dt: number
    // Главная информация о погоде
    main: ICurrentWeatherMainResponse

    // sys
    sys: ICurrentWeatherSysResponse

    // Ветер
    wind: { speed: number }

    // Список погодных условий
    weather: ICurrentWeatherWeatherResponse[]

    // Название населенного пункта
    name: string
}

// Элемент списка прогноза погоды на пять дней
export interface IFiveDaysListElement {
    // Время в милисеккундах
    dt: number

    // Время в формате, привычном для человека
    dt_txt: string

    // Главная информация о погое
    main: ICurrentWeatherMainResponse

    // Информация о ветре
    wind: {
        // Скорость ветра
        speed: number
    }

    // Информация о погоде (описание, изображение и краткая информация)
    weather: ICurrentWeatherWeatherResponse[]
}

// Интерфейс ответа от сервера на запрос прогноза погоды на пять дней
export interface IFiveDaysResponse {
    // Город
    city: {
        // Восход в миллисекундах
        sunrise: number

        // Закат в миллисекундах
        sunset: number

        // Страна
        country: string
    }

    // Список элементов прогноза с расстоянием в 3 часа между друг другом
    list: IFiveDaysListElement[]
}
