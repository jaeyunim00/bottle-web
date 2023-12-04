import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ReactGlobe from "react-globe";
import styled from "styled-components";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

import defaultMarkers from "./markers";

import Navigation from "../components/Navigation";

function markerTooltipRenderer(marker) {
  return `CITY: ${marker.city} (Value: ${marker.value})`;
}

const options = {
  markerTooltipRenderer,
};

function World() {
  const [isData, setIsData] = useState(false);
  // const resultData = [];
  const [resultData, setResultData] = useState([]);

  function processData(zone, data, location) {
    setResultData((prevData) => {
      const transformedData = {
        id: prevData.length + 1,
        city: zone,
        color: "red",
        coordinates: location,
        value: data.carbonIntensity,
      };

      return [...prevData, transformedData];
    });
  }

  const options = {
    method: "GET",
    headers: {
      "auth-token": "nq3azaHThk0uE4IwrgFKtOAMxSWF5kC5",
    },
  };

  const zones = [
    "NZ",
    "KR",
    // "US",
    "GB",
    "AU",
    "JP",
    // "CHN", 중국
    "IN",
    "DE",
    "BR",
    "RU",
    // "SA", 사우디
  ];

  const zones_full = [
    "New Zealand",
    "Korea",
    // "United States",
    "England",
    "Australia",
    "Japan",
    "India",
    "Denmark",
    "Brazil",
    "Rusia",
  ];

  const location = [
    [-41, -174],
    [37, 126],
    // [47, 120],
    [51, -0.1275],
    [37, 126],
    [20, 130],
    [36, 139],
    [28, 77],
    [-52, -14],
    [55, 37],
  ];

  const my_data = [0.1, 0.5, 1, 10, 100, 200, 300, 0.1, 0.1];

  const baseApiUrl =
    "https://api-access.electricitymaps.com/free-tier/carbon-intensity/latest";

  const requestInterval = 100; // 1초 간격으로 요청 보내기
  let currentIndex = 0;

  function sendRequest() {
    if (currentIndex < zones.length) {
      const zone = zones[currentIndex];
      const url = `${baseApiUrl}?zone=${zone}`;

      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          // console.log(location[currentIndex]);
          processData(zones_full[currentIndex], data, location[currentIndex]);
          console.log(resultData.length);
          // console.log(`Data for zone ${zone}:`, data);
          currentIndex++;
          setTimeout(sendRequest, requestInterval);
        })
        .catch((error) => {
          console.error(`Error fetching data for zone ${zone}: ${error}`);
          currentIndex++;
          setTimeout(sendRequest, requestInterval);
        });
    } else {
      setIsData(true);
      console.log("All requests completed");
    }
  }

  console.log(resultData);
  // 첫 번째 요청 시작
  useEffect(() => {
    // 이 코드는 컴포넌트가 마운트될 때 실행됩니다
    sendRequest();

    // 여기서 반환된 클린업 함수는 컴포넌트가 언마운트될 때 타임아웃을 정리합니다
    return () => clearTimeout(sendRequest);
  }, []); // 빈 의존성 배열은 이 효과가 한 번만 실행되도록 합니다

  useEffect(() => {
    console.log(resultData.length);
  }, [resultData]);

  const randomMarkers = defaultMarkers.map((marker) => ({
    ...marker,
    value: Math.floor(Math.random() * 100),
  }));
  const [markers, setMarkers] = useState([]);
  const [event, setEvent] = useState(null);
  const [details, setDetails] = useState(null);
  function onClickMarker(marker, markerObject, event) {
    setEvent({
      type: "CLICK",
      marker,
      markerObjectID: markerObject.uuid,
      pointerEventPosition: { x: event.clientX, y: event.clientY },
    });
    setDetails(markerTooltipRenderer(marker));
  }
  function onDefocus(previousFocus) {
    setEvent({
      type: "DEFOCUS",
      previousFocus,
    });
    setDetails(null);
  }

  return (
    <div>
      {details && (
        <div
          style={{
            background: "white",
            position: "absolute",
            fontSize: 20,
            bottom: 0,
            right: 0,
            padding: 12,
          }}
        >
          <p>{details}</p>
          <p>
            EVENT: type={event.type}, position=
            {JSON.stringify(event.pointerEventPosition)})
          </p>
        </div>
      )}
      <Navigation></Navigation>
      <ControlBar
        style={{
          padding: 40,
          display: "flex",
          flexDirection: "column",
          width: "200px",
        }}
      >
        <button
          style={{
            backgroundColor: "white",
            border: "none",
            padding: "5px 0",
            borderRadius: "5px",
            marginBottom: "3px",
          }}
          onClick={() => {
            setMarkers(resultData);
            console.log(markers);
            console.log(defaultMarkers);
          }}
        >
          {isData ? (
            <div>탄소 집약도 확인하기</div>
          ) : (
            <div>세계의 탄소집약도를 받아오는중...</div>
          )}
        </button>
        <button
          style={{
            backgroundColor: "white",
            border: "none",
            padding: "5px 0",
            borderRadius: "5px",
            marginBottom: "3px",
          }}
          disabled={markers.length === 0}
          onClick={() => setMarkers([])}
        >
          마커 지우기
        </button>
        {/* <button
          disabled={markers.length === randomMarkers.length}
          onClick={() =>
            setMarkers([...markers, randomMarkers[markers.length]])
          }
        >
          Add marker
        </button>
        <button
          disabled={markers.length === 0}
          onClick={() => setMarkers(markers.slice(0, markers.length - 1))}
        >
          Remove marker
        </button> */}
      </ControlBar>
      <ReactGlobe
        height="100vh"
        markers={markers}
        options={options}
        width="100vw"
        onClickMarker={onClickMarker}
        onDefocus={onDefocus}
      />
    </div>
  );
}

const CarbonContainer = styled.div`
  width: 100px;
  height: 100px;
  background-color: gray;
  position: absolute;
`;

const ControlBar = styled.div`
  position: absolute;
  top: 50px;
`;

export default World;
