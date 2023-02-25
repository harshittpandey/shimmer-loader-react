import {shimmerClass, defaultSpeed} from "../../common"
import "../../ShimmerLoader.css"

export default function ShimmerBlock ({width, height, loaderStyles, className, colors, speed}) {
  return (
  <div className={`${shimmerClass} ${className}`}
    style={{
      ...loaderStyles,
      width,
      height,
      animationDuration: speed || defaultSpeed
    }}
    ></div>)
}