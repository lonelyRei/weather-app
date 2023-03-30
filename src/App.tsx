import { FC, useEffect } from 'react'
import './App.css'
import './weatherIcons/css/owfont-regular.css'
import { StartPage } from './components/startPage/StartPage'
import useAppStore, { appThemes } from './stores/appStore'
import { DetailWeather } from './components/detailWeather/DetailWeather'
import { RecentlyWatched } from './components/recentlyWatched/RecentlyWatched'
import { useFetchingCurrentWeather, useFetchingFiveDaysWeather } from './hooks/weatherFetching'
import { Footer } from './components/footer/Footer'

const App: FC = () => {
    const theme = useAppStore((state) => state.theme)

    const recentlyWatchedCities = useAppStore((state) => state.recentlyWatchedCities)

    const fetchCurrentWeather = useFetchingCurrentWeather()
    const fetchFiveDaysWeather = useFetchingFiveDaysWeather()

    // При монтировании компонента загружаем погоду о последнем просмотренном городе
    useEffect(() => {
        // Если список просмотренных не пустой
        if (recentlyWatchedCities.length > 0) {
            fetchCurrentWeather.mutate(recentlyWatchedCities[0].name)
            fetchFiveDaysWeather.mutate(recentlyWatchedCities[0].name)
        }
    }, [])

    return (
        <div className={theme === appThemes.light ? 'app' : 'app-dark'}>
            <div className="app__outer">
                <div className="app__row">
                    <StartPage />
                </div>
                <div className="app__row">
                    <DetailWeather />
                    <RecentlyWatched />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default App
