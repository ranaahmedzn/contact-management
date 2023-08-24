import { useQuery } from '@tanstack/react-query';

type Cases = {
    updated: number;
    cases: number;
    todayCases: number;
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
    oneCasePerPeople: number;
    oneDeathPerPeople: number;
    oneTestPerPeople: number;
    activePerOneMillion: number;
    recoveredPerOneMillion: number;
    criticalPerOneMillion: number;
    affectedCountries: number;
}

const fetchCases = async (): Promise<Cases> => {
    const response = await fetch('https://disease.sh/v3/covid-19/all');
    if (!response.ok) {
        throw new Error('Something went wrong!');
    }
    return response.json();
};

const useCases = () => {
    const { data: cases, isLoading, error } = useQuery<Cases, ErrorConstructor>(['cases'], fetchCases);

    return [cases, isLoading, error]
}


export default useCases;