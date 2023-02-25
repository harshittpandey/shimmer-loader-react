import { useEffect, useState } from "react";
import { LOADING_TIME } from "./common";
import ShimmerLoader from "../ShimmerLoader/ShimmerLoader";

export function Example2 () {
  const [loading, setLoading] = useState(true)
  const [rows, setRows] = useState(3)
  const [height, setHeight] = useState(12)
  useEffect(() => {
    setTimeout(() => setLoading(false), LOADING_TIME)
  }, [])
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <p>Text Loader: Single line </p>
      <ShimmerLoader type={ShimmerLoader.types.TEXT} loading={loading}>
        <p> Sinle line example </p>
      </ShimmerLoader>

      <p>Text Loader: Multiple line </p>
      <div>
        <label>Rows</label>
        <input aria-label="Rows" type="number"
          placeholder="Rows" style={{width: "100px", height: "20px"}} value={rows}
          onChange={(e) => setRows(+e.target.value)} />
        <label style={{marginLeft: "15px"}}>Loader Height</label>
        <input aria-label="Height" type="number"
          placeholder="Height" style={{width: "100px", height: "20px"}} value={height}
          onChange={(e) => setHeight(+e.target.value)} />
        <span>px</span>
      </div>
      <ShimmerLoader type={ShimmerLoader.types.TEXT} loading={loading}
        height={height + "px"}
        rows={rows}>
        <p style={{lineHeight: "1.5rem"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </ShimmerLoader>
    </div>
  )
}