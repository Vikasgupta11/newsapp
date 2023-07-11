import "./App.css";

import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { prettyDOM } from "@testing-library/react";
const App =()=>{
  // here Change pageSize is -> how much news Articles per page
  const pageSize = 12;
  const apikey = process.env.REACT_APP_NEWS_API
// apikey="9047e0d9f9ef4542a3446533402ab0e2"
 

  const [progress, setProgress] = useState(0);

  // setProgress = (progress) => {
  //   // setState({ progress: progress})
  //   setProgress(progress);
  // };

 
    return (
      <>
        <Router>
          <LoadingBar
            color="#f11946"
            progress={progress}
            height={3}
            // onLoaderFinished={() => setProgress(0)}
          />

          <Navbar />
          <Routes>
            {/*  Here we are using key="<something unique>"  because, that component is ALready Loaded, react will not load it again
     that's why we using key parameter to distinguish each component. And also using exact parameter for exact ma
*/}

            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="home"
                  pageSize={pageSize}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="business"
                  pageSize={pageSize}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="entertainment"
                  pageSize={pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="health"
                  pageSize={pageSize}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  key="science"
                  apikey={apikey}
                  pageSize={pageSize}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  key="sports"
                  apikey={apikey}
                  pageSize={pageSize}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  key="technology"
                  apikey={apikey}
                  pageSize={pageSize}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }


  export default  App;