import RestaurantCard, { WithPromotionTag } from './RestaurantCard';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRestaurants from '../utils/useRestaurants';
import useOnlineStatus from '../utils/useOnlineStatus';
import EmptyRestaurantCard from './EmptyRestaurantCard';

const Container = () => {
    const originalRestaurants = useRestaurants();
    const onlineStatus = useOnlineStatus();
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filterType, setFilterType] = useState('all');

    const navigate = useNavigate();

    const RestaurantCardWithPromotionTag = WithPromotionTag(RestaurantCard);

    useEffect(() => {
        filterRestaurants();
    }, [filterType, originalRestaurants]);

    useEffect(() => {
        searchRestaurants();
    }, [searchText])

    const handleRadioChange = (event) => {
        const value = event.target.value;
        setFilterType(value);
    }

    const filterRestaurants = () => {
        const filtered = originalRestaurants.filter(restaurant =>
            filterType === 'all' ? true : restaurant.transactionType === filterType
        );
        setListOfRestaurants(filtered);
    }

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchText(value);
    }

    const searchRestaurants = () => {
        const search = originalRestaurants.filter(restaurant =>
            searchText === '' ? true : restaurant?.name?.toLowerCase().includes(searchText?.toLowerCase())
        );
        setListOfRestaurants(search);
    }

    const resetSearch = () => {
        setFilterType('all');
        setSearchText('');
    }

    const handleRestaurantCardClick = (restaurant) => {
        navigate("/restaurant/" + restaurant?.info?.id);
    }

    console.log("Body Rendered");

    if (!onlineStatus) return (<h1>Looks like you're offline, please check your internet connection !!</h1>)

    return (
        <>
            {!listOfRestaurants?.length ? <div className="flex flex-wrap w-full"><EmptyRestaurantCard /></div> :
                <div className="flex flex-wrap w-full">
                    {
                        listOfRestaurants.map((restaurant) => (
                            <div className='border rounded justify-center w-[15%] m-3 cursor-pointer hover:shadow'>
                                {restaurant?.info?.aggregatedDiscountInfoV3 ? <RestaurantCardWithPromotionTag key={restaurant?.info?.id} restaurantData={restaurant} onClick={() => handleRestaurantCardClick(restaurant)} /> :
                                    <RestaurantCard key={restaurant?.info?.id} restaurantData={restaurant} onClick={() => handleRestaurantCardClick(restaurant)} />}
                            </div>
                        )
                        )
                    }
                </div>
            }
        </>
    )
}

export default Container;