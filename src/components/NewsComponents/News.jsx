import React from "react";
import "./News.css";
import NewsCard from "./NewsCard";
import { navigate } from "hookrouter";

function News(props) {
  return (
    <div className="newsPageContainer">
      <div className="location">
        <div className="currentPage">
          <p
            className="PreviousPage"
            id="home"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </p>
          <p className="arrow">➙</p> News
        </div>
      </div>
      <div className="newsPageCards">
        <div className="cards">
          <NewsCard
            header="Nemo enim ipsam voluptatem quia voluptas"
            img="https://source.unsplash.com/random"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nulla rem dolores unde et cum illum odio, enim quis odit eveniet quaerat non libero, consequatur voluptatem harum ad veritatis necessitatibus."
          />
          <NewsCard
            header="Nemo enim ipsam voluptatem quia voluptas"
            img="https://loremflickr.com/600/400"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nulla rem dolores unde et cum illum odio, enim quis odit eveniet quaerat non libero, consequatur voluptatem harum ad veritatis necessitatibus."
          />
          <NewsCard
            header="Nemo enim ipsam voluptatem quia voluptas"
            img="https://loremflickr.com/650/500"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nulla rem dolores unde et cum illum odio, enim quis odit eveniet quaerat non libero, consequatur voluptatem harum ad veritatis necessitatibus."
          />
        </div>
        <div className="news">
          <div className="hotNews">
            <h3>Hot News</h3>
            <ul>
              <li>Accusamus dignissimos</li>
              <li>Ducimus praesentium</li>
              <li>Voluptatum deleniti corrupti</li>
              <li>Wuos dolores excepturi sint</li>
              <li>Occaecati provident dolor</li>
            </ul>
          </div>
          <div className="hotNews">
            <h3>Categories</h3>
            <ul>
              <li>Nemo enim ipsam</li>
              <li>Voluptatem voluptas</li>
              <li>Aspernatur aut odit</li>
              <li>Consequuntur magni</li>
              <li>Dolores ratione</li>
              <li>Voluptatem nesciunt</li>
              <li>Neque porro quisquam</li>
              <li>Dolorem ipsum quia</li>
            </ul>
          </div>
          <div className="hotNews">
            <h3>Top rated posts</h3>
            <ul className="ratedPosts">
              <li>
                Doloremque laudantium lorem <span>5.5</span>(759 rates)
              </li>
              <li>
                Doloremque laudantium lorem <span>5.5</span>(759 rates)
              </li>

              <li>
                Doloremque laudantium lorem <span>5.5</span>(759 rates)
              </li>

              <li>
                Doloremque laudantium lorem <span>5.5</span>(759 rates)
              </li>

              <li>
                Doloremque laudantium lorem <span>5.5</span>(759 rates)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default News;
