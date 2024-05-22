

const Card = ({item}) => {
    return (
        <div>
            <div className="card card-compact w-96 bg-base-200 shadow-xl rounded-none ">
              <figure>
                <img
                className="w-full"
                  src={item.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body text-center mt-4">
                <h2 className="card-title flex justify-center text-2xl">{item.name}</h2>
                <p className="text-lg font-semibold px-10">{item.recipe}</p>

                <div className="card-actions justify-center py-4">
                  <button className="bg-base-300 px-8 py-3 text-xl font-semibold rounded-lg  border-b-2 border-yellow-600 text-yellow-600 hover:bg-slate-700 hover:border-none ">ADD TO CART</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Card;