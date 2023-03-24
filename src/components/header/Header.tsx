import React, { FC } from 'react'
import './images/logo.png'
import './header.css'
import { CityInput } from '../cityInput/CityInput'
import useAppStore, { appMetrics, appThemes } from '../../stores/appStore'

export const Header: FC = () => {
    const switchTheme = useAppStore((state) => state.switchTheme)
    const switchMetrics = useAppStore((state) => state.switchMetrics)
    const theme = useAppStore((state) => state.theme)
    const metrics = useAppStore((state) => state.metrics)

    return (
        <header className={'header' + (theme === appThemes.dark ? ' dark' : '')}>
            <div className="container">
                <div className="header__outer">
                    <div className="header__column">
                        <a
                            className="header__image"
                            rel="noreferrer"
                            target={'_blank'}
                            href="https://github.com/lonelyRei"
                        >
                            <img src="./images/logo.png" alt="" />
                        </a>
                    </div>
                    <div className="header__column">
                        <span className="header__togler header__metrics" onClick={switchMetrics}>
                            {metrics === appMetrics.celsius ? '°C' : '°F'}
                        </span>
                        <span className="header__togler" onClick={switchTheme}>
                            <img src="" alt="" className="header__togler-theme-switch" />
                        </span>
                        <CityInput />
                    </div>
                </div>
            </div>
        </header>
    )
}
