//Componentes tipo funcion
import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    //Introduccion a useState
    const [age, setAge] = useState(21); //const [variable, metodoParaActualizarla] = useState(valorInicial);

    const birthday = () => {
        //Este metodo se encarga de actualizar
        setAge(age + 1);
    }
    return (
        //Solo se puede devolver un elemento por componente
        <div>
        <h1>
            !Hola {props.name} desde componente funcional
        </h1>
        <h2>
            Tu edad es de: {age}
        </h2>
        <div>
            <button onClick={birthday}>
                Cumplir Años
            </button>
        </div>
    </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
