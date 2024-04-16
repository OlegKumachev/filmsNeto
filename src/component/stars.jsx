import { Star } from "./star";

export const Stars = ({count = 0}) => {
    if (isNaN(count) || count < 1 || count > 5) {
        return null
    }
    const stars = Array.from({length: count}, (_, index) => <Star key={index}/>)
    return (
        <ul className="card-body-stars u-clearfix">
        {stars.map((star, index) => (
          <li key={index}>{star}</li>
        ))}
      </ul>)

};