import React from "react";
import "./Features.css";

function Features() {
  return (
    <div className="FeaturesContainer">
      <div className="application">
        <h1>Application features</h1>
        <ul>
          <li className="header">Natus error sit voluptatem accusantium</li>
          <li className="paragraph">
            Doloremque laudantium totam rem aperiam Inventore veritatis et quasi
            architecto beatae vitae.
          </li>
        </ul>
        <ul>
          <li className="header">Natus error sit voluptatem accusantium</li>
          <li className="paragraph">
            Doloremque laudantium totam rem aperiam Inventore veritatis et quasi
            architecto beatae vitae.
          </li>
        </ul>
        <ul>
          <li className="header">Natus error sit voluptatem accusantium</li>
          <li className="paragraph">
            Doloremque laudantium totam rem aperiam Inventore veritatis et quasi
            architecto beatae vitae.
          </li>
        </ul>
      </div>
      <div className="WeatherAnalyss">
        <h1>Weather analyssis</h1>
        <ul>
          <li>Accusantium doloremque laudantium rem aperiam</li>
          <li>Eaque ipsa quae ab illo inventore veritatis quasi</li>
          <li>Architecto beatae vitae dicta sunt explicabo</li>
          <li>Nemo enim ipsam voluptatem quia voluptas</li>
          <li>Aspernatur aut odit aut fugit, sed quia consequuntur</li>
          <li>Magni dolores eos qui ratione voluptatem sequi</li>
          <li>Neque porro quisquam est qui dolorem ipsum quia</li>
        </ul>
      </div>
      <div className="photos">
        <h1>Awesome Photos</h1>
        <div className="photoContainer">
          <img src="https://picsum.photos/1000" alt="" />
          <img src="https://picsum.photos/seed/picsum/1000" alt="" />
          <img src="https://picsum.photos/seed/universe/1000" alt="" />
          <img src="https://picsum.photos/seed/mountain/1000" alt="" />
          <img src="https://picsum.photos/seed/wood/1000" alt="" />
          <img src="https://picsum.photos/1000?grayscale" alt="" />
          <img src="https://picsum.photos/1000?blur" alt="" />
          <img src="https://picsum.photos/seed/forest/1000" alt="" />
          <img src="https://picsum.photos/seed/sky/1000" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Features;
