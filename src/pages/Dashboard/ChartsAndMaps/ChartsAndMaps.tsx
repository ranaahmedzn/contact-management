import React from 'react';
import useCountries from '../../../hooks/useCountries';
import useCases from '../../../hooks/useCases';

const ChartsAndMaps = () => {
    const [cases] = useCases()
    const [countries] = useCountries()

    console.log(cases)
    console.log(countries)

    return (
        <div>
            This is Charts and Maps Page..
        </div>

    );
};

export default ChartsAndMaps;