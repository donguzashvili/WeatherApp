import React from "react";
import News from "./NewsComponents/News";
import Photos from "./PhotosComponents/Photos";
import Contact from "./Contact";
import Home from "./Home";
import NotFound from "./NotFound";
import { useRoutes } from "hookrouter";

const routes = {
  "/": () => <Home />,
  "/news": () => <News />,
  "/photos": () => <Photos />,
  "/contact": () => <Contact />,
};
function MainComponent() {
  const routeRes = useRoutes(routes);
  return <div>{routeRes || <NotFound />}</div>;
}
export default MainComponent;
