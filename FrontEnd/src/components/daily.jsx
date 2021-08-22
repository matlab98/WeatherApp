import React from 'react';

import styled from 'styled-components';
import Mf from '../logic/multifunctions';

const StyledCurrent = styled.div`
    font-size: 32px;
    font-weight: 400;
    text-align: center;
    margin: 12px 15px;
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
            time: '',
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
                            {  
                                    Mf.formatterDate(item.time)
                        }
                            <StyledCurrent>
<StyledSubText>{item.summary}</StyledSubText>
                            </StyledCurrent>
                        </div>
                    )
                })}
            </>
        )
    }
}

export default menu;
