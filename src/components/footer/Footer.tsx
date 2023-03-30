import React, { FC } from 'react'
import './footer.css'

export const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__outer">
                    <div className="footer__column">
                        <a
                            className="footer__image"
                            rel="noreferrer"
                            target={'_blank'}
                            href="https://github.com/lonelyRei"
                        >
                            <img src="../header/images/logo.png" alt="" />
                        </a>
                    </div>
                    <div className="footer__column">
                        <div className="footer__links">
                            <a
                                rel="noreferrer"
                                id="vk-image"
                                target={'_blank'}
                                href="https://vk.com/empty_rei"
                                className="footer__links-item"
                            >
                                <img src="" alt="" />
                            </a>
                            <a
                                rel="noreferrer"
                                id="tg-image"
                                target={'_blank'}
                                href="https://t.me/PortyAf"
                                className="footer__links-item"
                            >
                                <img src="" alt="" />
                            </a>
                            <a
                                rel="noreferrer"
                                id="github-image"
                                target={'_blank'}
                                href="https://github.com/lonelyRei"
                                className="footer__links-item"
                            >
                                <img src="" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
