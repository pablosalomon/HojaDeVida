import'./Acerca.css';

function Acerca(){
    return(
        <div className="acerca">
            <div className="infolab">
                <h2 className="titlab"><i class="fas fa-user-graduate"></i> EDUCACIÓN</h2>
            </div>

            <div className="estudio">
                <h4>Bachiller Técnico – Titulación - Finalizado</h4>
                <h3 className="año">2010 - 2020 Bogotá, Colombia</h3>
                <p>Concluí el bachiller en el colegio Fe y Alegria Jose Maria Velaz</p>
            </div>

            <div className="estudio">
                <h4>Técnico en programación de software - Finalizado</h4>
                <h3 className="año">2019 - 2020 Bogotá, Colombia</h3>
                <p>Concluí el Técnico de SENA (Servicio Nacional de Aprendizaje) mientras cursaba el bachiller</p>
            </div>

            <div className="estudio">
                <h4>Tecnólogo – Cursando - Último periodo: 07/2021</h4>
                <h3 className="año">2021 - 2022 Bogotá, Colombia</h3>
                <p>Sigo cursando el tecnólogo de SENA (Servicio Nacional de Aprendizaje)</p>
            </div>

            <div className="infolab">
                <h2 className="titlab"><i class="fas fa-trophy"></i> CURSOS</h2>
            </div>

            <div className="estudio">
                <h4>Atención al Cliente – Curso - Finalizado</h4>
                <h3 className="año">2020 - 2020 Bogotá, Colombia</h3>
                <p>Concluí el curso de SIET (Formación para el Trabajo) mientras continuaba con el Bachiller</p>
            </div>

            <div className="estudio">
                <h4>Buscando Empleo – Curso - Finalizado</h4>
                <h3 className="año">2020 - 2020 Bogotá, Colombia</h3>
                <p>Concluí el curso de SIET (Formación para el Trabajo) mientras continuaba con el Bachiller</p>
            </div>

            <div className="estudio">
                <h4>Ser digital – Curso - Finalizado</h4>
                <h3 className="año">2020 - 2020 Bogotá, Colombia</h3>
                <p>Concluí el curso de SIET (Formación para el Trabajo) mientras continuaba con el Bachiller</p>
            </div>

            <div className="infolab">
            <h2 className="titlab"><i class="fas fa-dumbbell"></i> HABILIDADES</h2>
            </div>

            <div className="habilidades">•Conocimiento de Inglés: A2 <progress max="100" value="50"></progress> 50%</div>
            <div className="habilidades">•Creación de sistemas de info <progress max="100" value="70"></progress> 70%</div>
            <div className="habilidades">•Conocimiento de programas de edición multimedia <progress max="100" value="70"></progress> 70%</div>
            <div className="habilidades">•Manejo básico de programas de office <progress max="100" value="40"></progress> 40%</div>
            <div className="habilidades">•Navegación optima en el internet <progress max="100" value="80"></progress> 80%</div>

            <div className="infolab">
                <h2 className="titlab"><i class="fas fa-user-graduate"></i> APTITUDES</h2>
            </div>

            <div className="estudio">
                <p>•	Manejo del estrés</p>
                <p>•	Trabajo en equipo</p>
                <p>•	Perseverante</p>
                <p>•	Paciente</p>
                <p>•	Dinámico</p>
                <p>•	Apasionado</p>
                <p>•	Muy adaptable</p>
                </div>

        </div>
    );
}

export default Acerca;