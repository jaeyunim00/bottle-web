// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from "@nivo/line";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const IceWeight = ({ data /* see data tab */ }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 30, right: 40, bottom: 40, left: 90 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    enableGridX={false}
    enableGridY={false}
    yFormat=" >-.2f"
    curve="cardinal"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "년도",
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "",
      legendOffset: -50,
      legendPosition: "middle",
    }}
    colors={{ scheme: "category10" }}
    lineWidth={4}
    pointSize={0}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-14}
    enableArea={true}
    areaOpacity={0.9}
    useMesh={true}
    legends={[]}
  />
);

export default IceWeight;
