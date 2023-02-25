import { useEffect, useState } from "react";
import { LOADING_TIME } from "./common";
import ShimmerLoader from "../ShimmerLoader/ShimmerLoader";

export function Example1 () {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), LOADING_TIME)
  }, [])
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "20px"}}>
      <p>Image Loader: Width = 200px, Height = 200px </p>
      <ShimmerLoader type={ShimmerLoader.types.BLOCK} loading={loading} width={"200px"} height={"200px"}
        loaderStyles={{borderRadius: "50%"}}>
        <img
          src="https://i.natgeofe.com/n/365cab4b-7c9f-487a-a76d-0ec4cb6d433a/emperor-penguin_thumb.jpg"
          alt="penguin"
          style={{width: "200px", height: "200px", borderRadius: "50%"}} />
      </ShimmerLoader>
    </div>
  )
}