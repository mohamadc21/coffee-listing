import star_fill from '../assets/images/Star_fill.svg';
import star from '../assets/images/Star.svg';

function ProductItem(props) {
  const { id, available, image, name, price, rating, votes, popular } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <img src={image} className="rounded-lg" />
        {popular && <div className="bg-[#F6C768] text-black p-1.5 px-2.5 rounded-full absolute top-3 left-3 text-xs">Popular</div>}
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-md">{name}</h1>
          <div className="p-1 px-2.5 text-xs rounded-lg bg-[#BEE3CC] text-black">{price}</div>
        </div>
        <div className="mt-2">
          <div className="flex items-center gap-3 justify-between">
            {rating ? (
              <div className="flex items-center gap-1">
                <img src={star_fill} />
                <h3 className="text-sm">{rating} <span className="text-[#6F757C] ml-1">({votes} votes)</span></h3>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <img src={star} />
                <h3 className="text-[#6F757C]">No Ratings</h3>
              </div>
            )}
            {!available && <div className="text-[#ED735D] text-md">Sold Out</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem