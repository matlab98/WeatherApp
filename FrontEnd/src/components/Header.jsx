import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Hint } from 'react-autocomplete-hint';
import useResources from '../context/AppContext'
import styled from 'styled-components';
import Clocation from '../utils/current-location.png';
import search from '../utils/search.png';
import '../styles/format.css';
import { useLocalStorage } from "../hooks/useLocalStorage";

const StyledButton = styled.img`
    width: 16px;
    height: 16px;
    margin-top: 7px;
    display: inline-block;
    `;

const StyledCont = styled.a`
    display: inline-block;
    vertical-align: top;
    width: 30px;
    height: 30px;
    margin-top: 7px;
    text-align: center;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    background-color: rgba(0,0,0,.06);
    `;

const StyledSearcher = styled.div`
    display: inline-block;
    width: 45%; 
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 25px;
    border: 0;
    font-size: 18px;
    padding: 5px;
    margin: 7px 15px;
    text-align: center;
`;

const StyledHeader = styled.div`
    position: relative;
    width: 100%;
    height: 45px;
    background-color: #eee;
    border: 1px solid transparent;
`;

const StyledForm = styled.form`
width: auto;
    margin: 0;
    text-align: center;
    `;

function App() {

    const currentLocation = (e) => {


        navigator.geolocation.getCurrentPosition(function (position) {
            var {latitud, longitud}='';
            latitud = position.coords.latitude;
            longitud = position.coords.longitude;
            console.log("Latitude is :", latitud);
            console.log("Longitude is :", longitud);
           
        });
       
    }
    /*
    var [storedObject, setObject] = '';
    [storedObject, setObject] = useLocalStorage("latitud", latitud);
    [storedObject, setObject] = useLocalStorage("longitud", longitud);
*/
    const [datos, setDatos] = useState({
        location: ''
    })

    const handleInputChange = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
        setText(event.target.value)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.location)
    }

    const handleClick = (e) => {

    }


    const [text, setText] = useState('');

    const resources = useResources(text);
    var hintArray = []
    resources.map(a => hintArray.push(a.place_name))

    return (
        <div>
            {window.onload = currentLocation}
            <StyledHeader>
                <StyledForm onSubmit={enviarDatos}>
                    <StyledCont>
                        <StyledButton src={Clocation} alt="Current location button" onClick={currentLocation} />
                    </StyledCont>
                    <StyledSearcher>
                        <Hint className="searcher" options={hintArray} allowTabFill>
                            <input className="searcher" type="text"
                                value={text} onChange={handleInputChange} placeholder="Bogotá, Colombia" name="location"
                            />
                        </Hint>
                    </StyledSearcher>
                    <StyledCont>
                        <StyledButton src={search} alt="Search button" type="submit" />
                    </StyledCont>
                </StyledForm>
            </StyledHeader>
        </div>
    );
}

export default App;
