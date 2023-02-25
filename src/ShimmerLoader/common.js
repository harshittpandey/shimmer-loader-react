export const shimmerClass = "shimmerBG"

export const defaultColors = ["#F6F6F6", "#F0F0F0", "#F6F6F6"] // Future TODO

export const getBackgroundColor = (colors = []) => { // Future TODO
  const _innerColor = colors?.length === 3 ? colors : defaultColors
  return `linear-gradient(to right, ${_innerColor[0]} 4%, ${_innerColor[1]} 25%, ${_innerColor[2]} 36%)`
}

export const defaultSpeed = "2.2s"