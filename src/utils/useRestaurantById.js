import { useEffect, useState } from "react";
import { API_RESTAURANT_URL } from "./constants";

const useRestaurantById = (id) => {
    const [restaurant, setRestaurant] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(API_RESTAURANT_URL + id);
        const getRestaurant = await data.json();
        if (!getRestaurant) return;
        setRestaurant(getRestaurant?.data);
    }

    return restaurant;
}

export default useRestaurantById;