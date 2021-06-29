import React, { useContext, useEffect, useState } from 'react';

import styled from 'styled-components';
import Mf from '../logic/multifunctions';

const StyledCurrent = styled.div`
    font-size: 32px;
    font-weight: 400;
    text-align: center;
    margin: 12px 15px;
    `;

const StyledCurrently = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    `;

const StyledForecast = styled.span`
    display: inline-block;
    font-weight: 600;
    text-align: left;
    line-height: 1.3em;
    `;

const StyledClimate = styled.img`
    display: inline-block;
    width: 60px;
    height: 60px;
        `;

const StyledSubText = styled.span`
    position: relative;
    top: 0;
    display: block;
    font-size: 28px;
    font-weight: 300;
    margin-bottom: 6px;
    line-height: 1.3em;
        `;

class menu extends React.Component {

    constructor() {
        super();
        this.state = {
            summary: '',
            temperature: '',
            dewPoint: '',
            uvIndex: '',
            visibility: '',
            pressure: '',
            icon: ''
        };
    }

    render() {
        const { nowData } = this.props;

        return (

            <>{

                nowData.map((item) => {
                    return (
                        <div>
                            <StyledCurrent>
                                <StyledCurrently>
                                    <StyledClimate src={Mf.climateState(item.icon)} />
                                    <StyledForecast>{item.temperature}˚ {item.summary} </StyledForecast>
                                </StyledCurrently>

                            </StyledCurrent>
                        </div>
                    )
                })}
            </>
        )
    }
}

export default menu;
