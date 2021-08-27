import React, { Component} from "react";
import { render } from "react-dom";
import Header from '../components/Header';
import Footer from '../components/footer';
import Daily from '../components/daily';
import Menu from '../components/menu';
import Report from '../components/report';
import Watch from '../components/watch';
import AppContext from "../context/AppContext";
export const App = () => {
    
    return (
        <div>
            <Header />

            <Footer />

        </div>
    )
}

export default App;



/**
 * 
 * constructor(props) {
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
        axios.get(``)
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
 */







    /**
     * 
     * class App extends Component {
    

    render() {
        
        const { result, minute, hour, days } = [this.state]

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
                <Watch />
                <Footer />

            </div>
        );
    }
}
     */