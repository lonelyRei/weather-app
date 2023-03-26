import { FC } from 'react'
import './App.css'
import './weatherIcons/css/owfont-regular.css'
import { StartPage } from './components/startPage/StartPage'
import { QueryClient, QueryClientProvider } from 'react-query'
import useAppStore, { appThemes } from './stores/appStore'
import { DetailWeather } from './components/detailWeather/DetailWeather'

// ToDo: Доработать механизм выбора темной темы
// Можно менять только у компонента app, а у остальных просто проверять в стилях (css)
const App: FC = () => {
    const theme = useAppStore((state) => state.theme)
    const queryClient = new QueryClient({})
    return (
        <QueryClientProvider client={queryClient}>
            <div className={theme === appThemes.light ? 'app' : 'app-dark'}>
                <div className="app__outer">
                    <div className="app__row">
                        <StartPage />
                    </div>
                    <div className="app__row">
                        <DetailWeather />
                    </div>
                </div>
            </div>
        </QueryClientProvider>
    )
}

export default App
