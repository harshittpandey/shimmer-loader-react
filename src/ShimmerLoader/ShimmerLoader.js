import ShimmerBlock from "./components/ShimmerBlock/ShimmerBlock"
import ShimmerText from "./components/ShimmerText/ShimmerText"
import {shimmerClass} from "./common"
import "./ShimmerLoader.css"

function ShimmerLoader (props) {
  const { loading, type, skeleton, children, width, height } = props
  const parentContainerClass = "shimmer-loader-container"
  // 
  if (loading === false) return children

  if (skeleton) { // HTML Interface
    return (<div className={parentContainerClass}>{skeleton}</div>)
  }

  const chooseLoaderType = (type, props = {}) => {
    switch (type) {
      case ShimmerLoader.types.BLOCK: return <ShimmerBlock {...props}></ShimmerBlock>
      case ShimmerLoader.types.TEXT: return <ShimmerText {...props}></ShimmerText>
      default: return <ShimmerText {...props}></ShimmerText>
    }
  }

  const styleOverrides = (type) => {
    switch (type) {
      case ShimmerLoader.types.BLOCK: return {width, height} // default block props
      case ShimmerLoader.types.TEXT: return {} // default text props
      default: return {}
    }
  }

  return (
    <div className={parentContainerClass} style={{...styleOverrides(type)}}>
      {
        chooseLoaderType(type, props)
      }
    </div>
  )
}

ShimmerLoader.types = {
  BLOCK: "block",
  TEXT: "text"
}

ShimmerLoader.shimmerClass = shimmerClass

export default ShimmerLoader;
export { ShimmerBlock, ShimmerText };