import image2 from '../utils/clear-day.png';
import image1 from '../utils/rain.png';
import image3 from '../utils/partly-cloudy-day.png';
import useResources from '../context/AppContext'

const climateState = (test) => {
    if (test == "partly-cloudy-day") {
        return image3;
    } else if (test == "rain") {
        return image1;
    } else {
        return image2;
    }
}

const formatterDate = (tiempo) => {
    let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(tiempo)
    console.log("perfecto", date)
    return date;
}
/*
const prueba = ({ resource }) => {
    const resources = useResources("medellin");
    console.log("prueba", resources)
    return (<>{resources.map(record =>
        <>
            {record.place_name}</>
    )}</>)
}*/

export default { climateState, formatterDate}