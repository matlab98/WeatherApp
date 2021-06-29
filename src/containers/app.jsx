import React, { Component} from "react";
import { render } from "react-dom";
import Header from '../components/Header';
import Footer from '../components/footer';
import Minute from '../components/minute';
import Htoh from '../components/htoh';
import Daily from '../components/daily';
import Menu from '../components/menu';
import Report from '../components/report';
import Prueba from '../components/prueba';
import axios from "axios";

class App extends Component {
    constructor(props) {
        super();
        this.state = {
            dataNow: [],
            dataNextMin: [],
            dataNextHours: [],
            dataNextDays: []
        };

    }

    handleSearch = (e) => {
        console.log(e)
    }

    componentDidMount() {
        axios.get(`https://api.darksky.net/forecast/88030114c5e47763a011a75e7a10c633/4.625184,-74.081935?lang=es&units=auto`)
            .then(response => {

                this.setState({
                    dataNow: response.data.currently,
                    dataNextMin: response.data.hourly,
                    dataNextHours: response.data.hourly,
                    dataNextDays: response.data.daily
                });

            })
            .catch(error => {
                console.error(`Error retrieving courses => ${JSON.stringify(error)}`);
                throw error;
            });

    }

    render() {
        const result = [this.state.dataNow]
        const minute = [this.state.dataNextMin]
        const hour = [this.state.dataNextHours]
        const days = [this.state.dataNextDays]

        console.log(result)
        return (
            <div id="quote-box">

                <Header handleSearch={this.handleSearch} />
            {        console.log("test", localStorage.getItem('latitud') || '')}
                {result.map(el =>
                    <>
                        <Menu nowData={[el]} />
                        <Report nowData={[el]} />
                    </>
                )
                }
                {minute.map(el =>
                    <>
                        <Minute nowData={[el]} />
                    </>
                )
                }
                {hour.map(el =>
                    <>
                        <Htoh nowData={[el]} />
                    </>
                )
                }
                {days.map(el =>
                    <>
                        <Daily nowData={[el]} />
                    </>
                )
                }
                <Footer />

            </div>
        );
    }
}
export default App;