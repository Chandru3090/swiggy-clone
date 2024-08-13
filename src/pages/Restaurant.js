
import { useParams } from "react-router-dom";
import useRestaurantById from "../utils/useRestaurantById";
import { CLOUDINARY_IMAGE_BASE_URL } from "../utils/constants";
import { formatCurrency } from "../utils/common-methods";

const Restaurant = () => {
    const { id } = useParams();
    const restaurant = useRestaurantById(id);

    if (!restaurant) return (<div className='empty-card'></div>);

    return (
        <div className="flex flex-col mt-4">
            <div className="border rounded w-full p-3">
                <h3 className="text-2xl font-semibold">{restaurant.cards[2]?.card?.card?.info?.name}</h3>
                <div className="italic text-sm">{restaurant.cards[2]?.card?.card?.info?.cuisines.join(', ')}</div>
                <div className="mt-2">
                    <ul className="flex">
                        <li className="mr-1 text-xl mt-[-2px] font-semibold">&#9055;</li>
                        <li className="mr-1 font-semibold">{restaurant.cards[2]?.card?.card?.info?.avgRating}</li>
                        <li className="font-semibold">{restaurant.cards[2]?.card?.card?.info?.costForTwoMessage}</li>
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-col list-disc ml-[18px]">
                        <li className="py-1">{restaurant.cards[2]?.card?.card?.info?.areaName}</li>
                        <li className="py-1">{restaurant.cards[2]?.card?.card?.info?.sla.slaString}</li>
                    </ul>
                </div>
                <div className="mt-2">{restaurant.cards[2]?.card?.card?.info?.expectationNotifiers[0]?.text} </div>
            </div>

            <div className="flex justify-center mt-4">
                {restaurant.cards[2]?.card?.card?.info?.aggregatedDiscountInfo?.descriptionList.map((discount) => (
                    <div className="flex mx-2 justify-center">
                        <div className="border p-3 rounded text-xl font-semibold">{discount?.meta}</div>
                    </div>
                ))}
            </div>
            <div className="my-2">
                <h3 className="text-xl my-3 font-semibold">Menus ({restaurant.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.length})</h3>
                {restaurant.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((element) => (
                    <div className="flex border-b w-full justify-between py-3">
                        <div className="flex flex-col pr-2 w-[3/12]">
                            <h4 className="mt-1 text-lg font-semibold">{element?.card?.info?.name}</h4>
                            <p className="mt-1 font-semibold">{formatCurrency('en-IN', { style: 'currency', currency: 'INR' }, element?.card?.info?.price / 100)}</p>
                            {element?.card?.info?.ratings?.aggregatedRating?.rating
                                ? <p className="mt-1"><span className="text-xl">&#9055;</span> {element?.card?.info?.ratings?.aggregatedRating?.rating} ({element?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</p> : ''}
                            <div className="mt-1">{element?.card?.info?.description}</div>
                        </div>
                        <div className="flex w-[9/12]">
                            {element?.card?.info?.imageId ? <img className="h-[130px] rounded" src={`${CLOUDINARY_IMAGE_BASE_URL}${element?.card?.info?.imageId}`} /> : ''}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Restaurant;

{/* <div className="border rounded justify-center m-3 hover:shadow">
            <div className="flex justify-between border-b p-3">
                <div className="font-semibold">{transactionName}</div>
                <div><TransactionTypeIndicator transactionType={transactionType} /></div>
            </div>
            <div className="p-3">
                    <p className="h-[48px]">{transactionDescription}</p>
                    <p className="text-right font-semibold">{formatCurrency('en-IN', { style: 'currency', currency: 'INR' }, transactionAmount)}</p>
                    <p className="italic">{new Date(transactionDate).toLocaleString()}</p>
            </div>
        </div> */}