import React from 'react';

import styled from 'styled-components';


const StyledCurrentDetailsWrapper = styled.div`
width: 100%;
line-height: 40px;
padding: 0 20px;
background-color: rgba(238,238,238,.35);
overflow: hidden;
    `;

const StyledCurrentDetails = styled.div`
position: relative;
    text-align: center;
    left: -10px;
    white-space: nowrap;
    font-size: 14px;
    margin: 0 auto;
    max-width: 750px;
    box-sizing: border-box;
    line-height: 40px;
    -webkit-text-size-adjust: 100%;
    `;

const StyledCurrentData = styled.div`
    display: inline-block;
    text-align: center;
    margin: 0 10px;
    `
    ;

const StyledSpanLabel = styled.span`
display: inline-block;
    text-align: right;
    font-weight: 500;
    margin: 0 4px;
    `;

const StyledSpanValue = styled.span`
    display: inline-block;
    text-align: left;
    font-weight: 300;
    `;

class menu extends React.Component {

    constructor() {
        super();
        this.state = {
            humidity: '',
            windSpeed: '',
            dewPoint: '',
            uvIndex: '',
            visibility: '',
            pressure: ''
        };
    }

    render() {
        const { nowData } = this.props;
        return (

            <>{

                nowData.map((item) => {
                    return (
                        <div>
                            <StyledCurrentDetailsWrapper>
                                <StyledCurrentDetails>
                                    <StyledCurrentData>
                                        <StyledSpanLabel>Eólico:</StyledSpanLabel>
                                        <StyledSpanValue>{item.windSpeed} mph ↑</StyledSpanValue>
                                    </StyledCurrentData>
                                    <StyledCurrentData>
                                        <StyledSpanLabel>Humedad:</StyledSpanLabel>
                                        <StyledSpanValue>{(item.humidity) * 100} %</StyledSpanValue>
                                    </StyledCurrentData>
                                    <StyledCurrentData>
                                        <StyledSpanLabel>Punto de rocío:</StyledSpanLabel>
                                        <StyledSpanValue>{item.dewPoint}˚</StyledSpanValue>
                                    </StyledCurrentData>
                                    <StyledCurrentData>
                                        <StyledSpanLabel>Índice UV:</StyledSpanLabel>
                                        <StyledSpanValue>{item.uvIndex}</StyledSpanValue>
                                    </StyledCurrentData>
                                    <StyledCurrentData>
                                        <StyledSpanLabel>Visibilidad:</StyledSpanLabel>
                                        <StyledSpanValue>{item.visibility} mi</StyledSpanValue>
                                    </StyledCurrentData>
                                    <StyledCurrentData>
                                        <StyledSpanLabel>Presión:</StyledSpanLabel>
                                        <StyledSpanValue>{item.pressure} mb</StyledSpanValue>
                                    </StyledCurrentData>
                                </StyledCurrentDetails>
                            </StyledCurrentDetailsWrapper>
                        </div>
                    )
                })}
            </>
        )
    }
}

export default menu;
