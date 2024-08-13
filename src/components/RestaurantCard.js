import { CLOUDINARY_IMAGE_BASE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { name, cuisines, avgRating, areaName, cloudinaryImageId, sla } = props?.restaurantData?.info;
    return (
        <div onClick={props?.onClick}>
            <div className="flex flex-column">
                <img className="w-[250px] h-[160px]" src={`${CLOUDINARY_IMAGE_BASE_URL}${cloudinaryImageId}`} alt={`Restaurant ${name}`} />
            </div>
            <div className="p-3">
                <div className="font-semibold mt-1">{name}</div>
                <div className="mt-1">
                    <ul className="flex">
                        <li className="mr-1 text-xl mt-[-2px]">&#9055;</li>
                        <li className="mr-1">{avgRating}</li>
                        <li>{sla?.slaString}</li>
                    </ul>
                </div>
                <div className="italic text-sm text-ellipsis overflow-hidden mt-1">{cuisines.join(', ')}</div>
                <div className="mt-1">{areaName}</div>
            </div>
        </div>
    )
}

export const WithPromotionTag = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="relative w-full">
                <label className="absolute p-1 bg-slate-800 text-white opacity-90 text-sm top-[132px]">{props?.restaurantData?.info?.aggregatedDiscountInfoV3?.header} {props?.restaurantData?.info?.aggregatedDiscountInfoV3?.subHeader}</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;