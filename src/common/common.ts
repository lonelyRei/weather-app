// Функция для перевода из градусов Фаренгейта в градусы Цельсия
export const getCelsius = (degrees: number) => {
    return Math.round(degrees - 273.15)
}

// Функция для получения корректного давления (мм. рт. ст.)
export const getCorrectPressure = (pressure: number) => {
    return Math.round(pressure / 1.333)
}
