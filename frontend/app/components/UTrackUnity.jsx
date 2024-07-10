"use client";

import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

import styles from "@/app/styles/Unity.module.css";

const UTrackUnity = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/build/UTrack.loader.js",
    dataUrl: "/build/UTrack.data",
    frameworkUrl: "/build/UTrack.framework.js",
    codeUrl: "/build/UTrack.wasm",
  });

  return (
    <div className={styles.container}>
      <Unity unityProvider={unityProvider} />
    </div>
  );
};

export default UTrackUnity;
