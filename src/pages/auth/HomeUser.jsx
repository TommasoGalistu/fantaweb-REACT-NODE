import { useNavigate } from "react-router-dom";

function HomeUser(){
    const navigate = useNavigate();
    return (
        <>
            <div className="pageWidgetHome">
                <h2>Nome lega</h2>
                <div className="contFlex">
                    <div className="widget flex-grow-grande active">
                        <div className="opacityBackGroungWidget">
                            <span>Novità</span>
                        </div>
                        <div className="notifyWIdget active">
                            <span>1</span>
                        </div>

                        <img src="/foto-widget-novita.png" alt="foto-novita" />
                    </div>
                    <div className="contWidgetDuble">
                        <div className="widget">
                            <div className="opacityBackGroungWidget">
                                <span>Squadra</span>
                            </div>
                           <img src="/foto-widget-squadra.png" alt="foto-novita" />
                        </div>
                        <div className="widget">
                            <div className="opacityBackGroungWidget">
                                <span>Competizioni</span>
                            </div>
                            <img src="/foto-widget-competizioni.png" alt="foto-novita" />
                        </div>

                    </div>
                </div>
                <div className="contFlex">
                    <div className="widget flex-grow-grande">
                        <div className="opacityBackGroungWidget">
                            <span>Stato</span>
                        </div>
                        <img src="/foto-widget-stato.png" alt="foto-novita" />
                    </div>
                    <div className="widget">
                        <div className="opacityBackGroungWidget">
                            <span>Notizie</span>
                        </div>
                        <img src="/foto-widget-notizie.png" alt="foto-novita" />
                    </div>

                    
                </div>
                <div className="contFlex last-flex">
                    <div className="widget flex-grow-grande">
                        <div className="opacityBackGroungWidget">
                            <span>Servizi</span>
                        </div>
                        <img src="/foto-widget-servizi.png" alt="foto-novita" />
                    </div>
                </div>
                <div className="contFlex last-flex" onClick={() => navigate('/privato/tool-asta')}>
                    <div className="widget flex-grow-grande">
                        <div className="opacityBackGroungWidget">
                            <span>Asta</span>
                        </div>
                        <img src="/foto-widget-servizi.png" alt="foto-novita" />
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default HomeUser;