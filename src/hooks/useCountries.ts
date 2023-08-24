import { useQuery } from '@tanstack/react-query';

type CountryInfo = {
    _id: number;
    iso2: string;
    iso3: string
    lat: number;
    long: number;
    flag: string;
}

type Country = {
    updated: number;
    country: string;
    countryInfo: CountryInfo;
    cases: number;
    todayCases: number
    deaths: number;
    todayDeaths: number;
    recovered: number;
    todayRecovered: number;
    active: number;
    critical: number;
    casesPerOneMillion: number;
    deathsPerOneMillion: number;
    tests: number;
    testsPerOneMillion: number;
    population: number;
    continent: string;
    oneCasePerPeople: number;
    oneDeathPerPeople: number;
    oneTestPerPeople: number;
    activePerOneMillion: number;
    recoveredPerOneMillion: number;
    criticalPerOneMillion: number;
}

const fetchCountries = async (): Promise<Country> => {
    const response = await fetch('https://disease.sh/v3/covid-19/countries');
    if (!response.ok) {
        throw new Error('Something went wrong!');
    }
    return response.json();
};

const useCountries = () => {
    const { data: countries, isLoading, error } = useQuery<Country, ErrorConstructor>(['countries'], fetchCountries);

    return [countries, isLoading, error]
}


export default useCountries;