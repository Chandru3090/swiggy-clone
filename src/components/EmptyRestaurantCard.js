const EmptyRestaurantCard = () => {
    return (
        Array.from({ length: 12 }).map((_, index) => (
            <div className="rounded justify-center w-[15%] m-3 cursor-pointer animate-pulse hover:shadow" key={index}>
                <div className="flex flex-col">
                    <div className="h-[160px] bg-gray-400 opacity-50"></div>
                    <div className="mt-1">
                        <div className="w-full mt-2 bg-gray-400 h-[20px] opacity-50"></div>
                        <div className="w-full mt-2 bg-gray-400 h-[20px] opacity-50"></div>
                        <div className="w-full mt-2 bg-gray-400 h-[20px] opacity-50"></div>
                        <div className="w-full mt-2 bg-gray-400 h-[20px] opacity-50"></div>
                    </div>
                </div>
            </div>
        ))
    )
}

export default EmptyRestaurantCard;