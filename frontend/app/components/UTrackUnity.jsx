"use client";

import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

import styles from "@/app/styles/Unity.module.css";

import LoadingPage from "../loading";

const UTrackUnity = () => {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/build/UTrack.loader.js",
    dataUrl: "/build/UTrack.data",
    frameworkUrl: "/build/UTrack.framework.js",
    codeUrl: "/build/UTrack.wasm",
  });

  const loadingPercentage = Math.round(loadingProgression * 100);

  return (
    <div className={styles.container}>
      {isLoaded === false && <LoadingPage />}
      <Unity unityProvider={unityProvider} />
    </div>
  );
};

export default UTrackUnity;
