const Cards = ({ item }) => {
  const { title, price, category, image, description } = item;

  return (
    <div className="px-2 mb-4 "> {/* spacing between cards */}
      <div className="card bg-base-100 shadow-md w-full md:w-72 lg:w-80 mx-auto 
                      transform transition-transform duration-300 hover:scale-105 
                      flex flex-col h-full dark:bg-slate-600 dark:text-white">
        <figure className="overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="h-56 w-full object-cover"
          />
        </figure>

        <div className="card-body flex flex-col flex-1 justify-between">
          <div>
            <h2 className="card-title flex justify-between items-center">
              {title}
              <div className="badge badge-secondary">{category}</div>
            </h2>
            <p className="text-sm mt-2">{description}</p>
          </div>

          <div className="card-actions flex justify-between mt-4">
            <div className="badge badge-outline">${price}</div>
            <div className="badge badge-outline cursor-pointer">BUY NOW</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
