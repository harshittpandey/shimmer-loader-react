import { useEffect, useState } from "react";
import { LOADING_TIME } from "./common";
import ShimmerLoader, {ShimmerBlock, ShimmerText} from "../ShimmerLoader/ShimmerLoader";

import "./examples.css";

export function Example3 () {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), LOADING_TIME)
  }, [])

  const originalCard = (
    <div className="card text-row">
      <div className="card__image">
        <img src="https://c4.wallpaperflare.com/wallpaper/957/116/60/penguins-snow-birds-animals-wallpaper-preview.jpg" alt="bg" />
      </div>
      <div className="card__header">
        <div className="card__profile">
          <img src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt="profile" />
        </div>
        <p className="card__username">Harshit Pandey</p>
      </div>
      <div className="card__body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="card--button">Click Me!!</button>
      </div>
    </div>
  )

  const skeletonInterface = (
    <div className="card">
      <ShimmerBlock className="card__image" />
      <div className="card__header">
        <ShimmerBlock className="card__profile" />
        <ShimmerBlock className="card__username" />
      </div>
      <div className="card__body">
        <ShimmerText rows={4} />
        <ShimmerBlock className="card--button" height={"40px"} colors={["#665803", "#6F6314", "#796E26"]} />
      </div>
    </div>
  )

  // Skeleton interface with no inner components
  /*
  const skeletonInterface = (
    <div className="card">
      <div className={`card__image ${ShimmerLoader.shimmerClass}`}></div>
      <div className="card__header">
        <div className={`card__profile ${ShimmerLoader.shimmerClass}`}></div>
        <div className={`card__username ${ShimmerLoader.shimmerClass}`}></div>
      </div>
      <div className={`card__body ${ShimmerLoader.shimmerClass}`}></div>
    </div>
  )
  */

  return (
    <div className="example3" style={{display: "flex", flexDirection: "column", gap: "20px"}}>
      <p>Original Interface </p>
      {originalCard}
      <p>Skeleton Interface </p>
      <ShimmerLoader loading={loading} skeleton={skeletonInterface}>
        {originalCard}
      </ShimmerLoader>
    </div>
  )
}