import { Link } from "react-router-dom";

function HomeBoss(){
    return (
        <>
            <div className="pageWidgetHome ">
                <h2>Boss</h2>
                <div className="contFunctional">
                    <div className="contFlex ">
                        <div className="widget flex-grow-grande">
                            <div className="opacityBackGroungWidget">
                                <span>Aggiungi utenti</span>
                            </div>
                            <img src="/foto-widget-servizi.png" alt="foto-novita" />
                        </div>
                    </div>
                    <div className="contFlex">
                        <Link as={Link} to="/boss/gestisci-campionati">
                            <div className="widget flex-grow-grande">
                                <div className="opacityBackGroungWidget">
                                    <span>Gestisci campionati</span>
                                </div>
                                <img src="/foto-widget-servizi.png" alt="foto-novita" />
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HomeBoss;