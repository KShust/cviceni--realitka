import './estate.css'

export const Estate = (props) => {
    return (
    <>
        <div className="estate">
            <h1>{props.title}</h1>
            <div className='estate--inzerat'>
                <img src={props.obrazek} alt="Obrazek" />
                <div>
                    <h3>Cena: {props.cena} CZK</h3>
                    <h4>Město: {props.mesto}</h4>
                    <p className='estate--inzerat--popis'>{props.popis}</p>
                </div>
            </div>
            <div className='estate--contact'>
                <h5>Kontakt: {props.jmeno}</h5>
                <p>{props.posta}</p>
                <p>{props.cislo}</p>
            </div>
        </div>
    </>
    )
}