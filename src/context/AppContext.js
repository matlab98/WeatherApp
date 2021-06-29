import axios from "axios";
import React, { useContext, useEffect, useState } from 'react';
const useResources = (resource) => {

    const [resources, setResources] = useState([]);
    useEffect(
        () => {
            (async resource => {
                const response = await axios.get(
                    `https://api.mapbox.com/geocoding/v5/mapbox.places/${resource}.json?access_token=pk.eyJ1IjoiaGJhcnJpZXRhIiwiYSI6ImNrcWZsMzhpZDBuajIydm5uZHhwYmhnZXAifQ.NZh5mkEUbcfurI9ZrN5jCw&autocomplete=on&fuzzyMatch=on`
                );
                setResources(response.data.features);

            })(resource);
        },
        [resource]
    );

    return resources

}

export default useResources;