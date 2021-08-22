import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import Clocation from '../utils/current-location.png';
import search from '../utils/search.png';
import { Input } from '@chakra-ui/input';

import Mf from '../logic/multifunctions';

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

const StyledSearcher = styled(Input)`
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

const currentLocation = (e) => {
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
    });

}

class header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    handleChange = (e) => {
        this.setState({ search: e.target.value})

    }

    render() {
        const { handleSearch } = this.props;

        function Example() {
            
        }
        return (
            <div>

                <StyledHeader>
                    <StyledForm>
                        <StyledCont>
                            <StyledButton src={Clocation} alt="Current location button" onClick={currentLocation} />
                        </StyledCont>
                        <StyledSearcher id="geocoder" type="text" onChange={this.handleChange} />
                        <StyledCont>
                            <StyledButton src={search} alt="Search button" type="submit" onClick={() => handleSearch(this.state.search)} />
                        </StyledCont>

                    </StyledForm>

                </StyledHeader>
            </div>
        )
    }
}

export default header;
