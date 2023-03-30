import { FC } from 'react'
import { Carousel } from 'antd'
import useAppStore from '../../stores/appStore'
import { RecentlyWatchedCard } from './recentlyWatchedCard/RecentlyWatchedCard'
import './recentlyWatched.css'
import { settings } from './arrows'

export const RecentlyWatched: FC = () => {
    const recentlyWatchedCities = useAppStore((state) => state.recentlyWatchedCities)

    return (
        <div className="recently-watched">
            <div className="container">
                <div className="recently-watched__outer">
                    <h3 className="recently-watched__title">Недавно просмотренные</h3>
                    <Carousel arrows dots {...settings}>
                        {recentlyWatchedCities.map((element) => {
                            return <RecentlyWatchedCard data={element} key={element.dt} />
                        })}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
