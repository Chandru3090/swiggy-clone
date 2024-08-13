import { useEffect, useState } from 'react';
import { API_BASE_URL } from './constants';

const useRestaurants = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(API_BASE_URL);
        const restaurants = await data.json();
        const destructuredListOfRestaurants = restaurants?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurants(destructuredListOfRestaurants);
    }

    return restaurants;
}

export default useRestaurants;