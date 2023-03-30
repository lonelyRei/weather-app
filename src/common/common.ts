// Функция для перевода из градусов Фаренгейта в градусы Цельсия

export const getCelsius = (degrees: number) => {
    return Math.round(degrees - 273.15)
}

// Функция для получения корректного давления (мм. рт. ст.)
export const getCorrectPressure = (pressure: number) => {
    return Math.round(pressure / 1.333)
}

// Функция для получения даты в формате RU
export const getRuDate = (date: string) => {
    return date.split(' ')[0].split('-').slice(1, 3).reverse().join('.')
}

// Функция для получения времени в формате RU
export const getRuTime = (time: string) => {
    return time.split(' ')[1].split(':').slice(0, 2).join(':')
}

// Функция для получения дня недели по миллисекундам
export const getWeekdayByMilliseconds = (country: string, date: number) => {
    return new Date(date * 1000).toLocaleString(country, { weekday: 'long' })
}
