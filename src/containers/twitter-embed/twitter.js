import React, { Suspense } from "react";
import "./twitter.scss";
import Loading from "../loading/Loading";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { twitterDetails } from "../../portfolio";

const renderLoader = () => <Loading />;
const cantDisplayError =
  "<div className='centerContent'><h2>Are you having issues loading the X posts? Please check your Privacy Protection Settings</h2></div>";

function timeOut() {
  setTimeout(function () {
    if (!document.getElementById("twitter").innerHTML.includes("iframe")) {
      document.getElementById("twitter").innerHTML = cantDisplayError;
    }
  }, 10000);
}
var widthScreen = window.screen.width;

export default function Twitter() {

  if (!twitterDetails.display) {
    return null;
  }
  if (!twitterDetails.userName) {
    console.error("Twitter username for twitter section is missing");
  }
  if (twitterDetails.userName) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="tw-main-div" id="twitter">
          <div className="centerContent">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName={twitterDetails.userName}
              options={{ height: 400, width: { widthScreen } }}
              placeholder={renderLoader()}
              autoHeight={false}
              borderColor="#fff"
              key={"1"}
              theme={"dark"}
              noFooter={true}
              onload={timeOut()}
            />
          </div>
        </div>
      </Suspense>
    );
  } else {
    return null;
  }
}
