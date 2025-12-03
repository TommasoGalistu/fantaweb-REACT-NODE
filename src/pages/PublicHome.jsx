import { Link } from "react-router-dom";

function PublicHome(){
    return (
        <>
        {/* <img src="fantacalcio-superlega.png" alt="" /> */}
        <div className="contTitle">
            <div className="sottolineato">
                <h1>Superlega </h1>
                
            </div>
                <h2 >Fantacalcio</h2>

        </div>
            <section id="section0">
                <p>Il fantacalcio che ti fa guadagnare di più. Abbiamo studiato negli anni un metodo per chiedere sempre la stessa quantità di soldi e dare più premi senza cambiare la struttura dei campionati da 8/10 partecipanti.</p>
                <p>Attualmente sono online: x persone</p>
            </section>
            
            <section id="section1" className="card">
                <h4>Quello che proponiamo</h4>
                <ul className="listCard">
                    <li>Campionati da 8/10 giocatori</li>
                    <li>Asta a rilancio(online)</li>
                    <li>Campionato</li>
                    <li>Coppa nazionale</li>
                    <li>Coppe europee</li>
                </ul>
                
            </section>
            <section id="section2">
                <p>Ogni campionato fa la propria asta di settembre, partecipa alla competizione "Campionato" che parte dai primi di settembre fino all'ultima giornata. Poi ci saranno i gironi per i campionati europei con gli altri campionati, a gennaio l'asta e il torneo nazionale.</p>
            </section>
            <section  id="section3" className="active">
                <h4>Campionato</h4>
                <p>I campionati sono da 8/10 in base alle disponibilità. Si fa l'asta a Settembre alla chiusura dell'asta calcistica e si parte. Si può decidere tra vari campionati che corrispondono alle varie nazioni europee. Ogni campionato ha un costo diverso per permettere anche a chi è alle prime armi di entrare nel vivo del gioco.</p>
                <h3>Il torneo nazionale</h3>
                <p>Siamo in Europa e qui ogni campionato gioca il proprio torneo nazionale. Verranno fatti i gironi a gennaio e le fasi finali le ultime giornate di campionato</p>
            </section>
            <section  id="section3" >
                <h4>Tornei internazionali</h4>
                <p>Sbarchiamo in Europa dove la rivalità è spietata. Ogni squadra farà in parallelo un'altra competizione che è quella europea. Ogni squadra fino a gennaio avrà assegnato un girone in base alla propria forza e sfiderà le squadre degli altri campionati. Molte più squadre, molti più premi</p>
            </section>
            <section  id="section3" >
                <h4>Cosa ci differenzia dagli altri campionati?</h4>
                <p>Abbiamo creato un simulatore che fa capire visivamente in che modo siamo riusciti a mantenere uguale il format fantacalcio e a permettere ad ognuno di voi di vincere più premi. Scorri e scopri con le tue mani la differenze tra un classico </p>
                
            </section>
            <section  id="section3" className="card">
                <p>Scrivi il costo del fantacalcio e vedi le differenze</p>
                <form >
                    <label htmlFor="cost">Costo campionato</label>
                    <input type="number" name="cost" placeholder="30/50/100/200" />
                    <label htmlFor="gamer">Numero di partecipanti</label>
                    <input type="number" name="gamer" placeholder="8/10" />
                </form>
               
                <ul>
                    <li><strong>Totale soldi per campionato</strong></li>
                    <li>- Fantacalcio normale: </li>
                    <li><strong>- SUPERLEGA:</strong></li>
                </ul>
                <ul>
                    <li><strong>Premi totali</strong></li>
                    <li>- Fantacalcio normale: </li>
                    <li><strong>- SUPERLEGA:</strong></li>
                </ul>
            </section>
            <section id="section4" >
                <p>E' la prima volta? sei già un veterano? Hai già altri campionati in ballo? Non ti preoccupare..La SUPERLEGA accoglie tutti. Unisciti con i tuoi amici alla nostra competizione e non te ne pentirai</p>
                
                <span className="button"><Link as={Link} to="registrati">Iscriviti</Link></span>

                
            </section>
            <section id="section5" className="card">
                <h2>Costi</h2>
                
                <p>Sono disponibili ancora x campionati</p>
                <p>Costo: 30€/130€</p>
                <p>Posti campionato 30€: </p>
                <p>Posti campionato 130€: </p>
            </section>
        </>
    )
}

export default PublicHome;