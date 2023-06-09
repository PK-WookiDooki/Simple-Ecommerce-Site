import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const generateStars = (amount) => {
  return (
    <p className=" flex items-center">
      {" "}
      {[...new Array(5)].map((arr, index) => {
        return index < amount ? (
          <AiFillStar key={index} className="text-lg" />
        ) : (
          <AiOutlineStar key={index} className="text-lg" />
        );
      })}{" "}
    </p>
  );
};
