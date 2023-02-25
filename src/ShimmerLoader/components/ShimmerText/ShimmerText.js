import {shimmerClass, defaultSpeed} from "../../common"
import "../../ShimmerLoader.css"

export default function ShimmerText ({width, height, loaderStyles, rows, className, colors, speed}) {
  const singleShimmerGenerator = (key, width = "100%") => {
    return (
      <div
        key={key}
        className={`${shimmerClass} ${className}`}
        style={{...loaderStyles, width, height, animationDuration: speed || defaultSpeed}}
      ></div>
    )
  }  
  if (rows > 0) {
    const items = [...Array(rows)]
    /*
      Use case: Width of last line is 80%
      return items.map((_, idx) => {
        const isLastLine = idx === items.length - 1
        const width = isLastLine ? "80%" : "100%" // last line's width is smaller than other's
        return singleShimmerGenerator(idx, width)
      })
    */
    return items.map((_, idx) => singleShimmerGenerator(idx))
  }
  return singleShimmerGenerator(0)
}