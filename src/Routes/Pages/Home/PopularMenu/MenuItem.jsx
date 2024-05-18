


const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex gap-4 mt-16">
      <img
       className="size-28 rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px]" 
       src={image} alt="" />
      <div>
        <h1 className="cinzel text-xl ">{name} ----------------------</h1>
        <p className="text-balance">{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
