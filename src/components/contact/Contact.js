import'./Contact.css';
import github from './github.png';
import firma from './firma.png';

function Contact(){
    return(
        <div className="contacto">
            <h2>Acerca de mi</h2>
            <hr/>
            <p>
            Técnico en programación de software enfocado en la realización y estructuración de sistemas de información orientados a la web, poseo conocimientos en diversos lenguajes de programación tales como SQL, PHP, HTML, Java y Javascript. Me considero una persona responsable que se adapta a todo tipo de situaciones con una postura de constante aprendizaje.
            </p>

            <h2>Contacto:</h2>
            <hr/>
            <div className="info"><i class="fas fa-envelope"></i> pasalomon@misena.edu.co</div>
            <div className="info"><i class="fas fa-phone"></i> (+57) 320 6237067</div>
            <div className="info"><i class="fas fa-map-marker"></i> Calle 139C #118-43</div>
            <div className="info"><i class="fas fa-calendar"></i> 26/11/2003</div>

            <h2>Referencias:</h2>
            <hr/>
            <div className="ref"><i class="fas fa-address-card"></i> 
            <span className="refnombre">Henry Antonio Salomón Bernal</span>
            <p className="refcargo">Representante legal - Padre</p>
            <p className="refcargo">Teléfono: 3104324121</p>
            <p className="refcargo">CC: 19364903</p>
            <br></br>

            <h2>Enlaces:</h2>
            <hr/>
            <div className="enlaces">
            <a href="https://github.com/pablosalomon">
                <img src={github} alt="GitHub"></img>
            </a>
            <br></br>
            <br></br>

            <h2>Certificados:</h2>
            <hr/>
            <h5 className="he5">BACHILLER:</h5>
            <a href="https://imgur.com/Yudwlql"><img src="https://i.imgur.com/Yudwlql.png" title="source: imgur.com" /></a>
            <h5 className="he5">SIET:</h5>
            <a href="https://imgur.com/2PICUh1"><img src="https://i.imgur.com/2PICUh1.png" title="source: imgur.com" /></a>
            <a href="https://imgur.com/yFl7dTD"><img src="https://i.imgur.com/yFl7dTD.png" title="source: imgur.com" /></a>
            <a href="https://imgur.com/JrS0a7s"><img src="https://i.imgur.com/JrS0a7s.png" title="source: imgur.com" /></a>
            <h5 className="he5">TÉCNICO:</h5>
            <a href="https://imgur.com/mHYEBz9"><img src="https://i.imgur.com/mHYEBz9.png" title="source: imgur.com" /></a>
            <br></br>

            <h2>Firma:</h2>
            <hr/>
            <img src={firma} alt="firma"></img>
            <h2>Nombre y Firma</h2>
            <h5 className="he5">Pablo Antonio Salomón Gomez</h5>
            <br></br>

            </div>
            </div>
        </div>
    );
}

export default Contact;