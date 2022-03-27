import React, { Fragment } from "react";
import BackToTops from "./BackToTops";
import Body from "./pages/body/Body";


export default function MainComponent() {
  return (
    <Fragment>
      <Body />
      <BackToTops />
    </Fragment>
  );
}
