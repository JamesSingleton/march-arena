/**
 * Responsive bracket lines. The y coordinates use percentages so the connectors
 * stay aligned as the grid grows and shrinks at each breakpoint.
 */
const STROKE = "#c6c8cb";
const STROKE_WIDTH = 1.5;

function railPairRight(cx: number, yTop: number, yMid: number, yBot: number, width = 14) {
  return `M 0 ${yTop} H ${cx} V ${yMid} H ${width} M 0 ${yBot} H ${cx} V ${yMid}`;
}

function railPairLeft(cx: number, yTop: number, yMid: number, yBot: number, width = 14) {
  const x0 = width;
  const x1 = width - cx;
  return `M ${x0} ${yTop} H ${x1} V ${yMid} H 0 M ${x0} ${yBot} H ${x1} V ${yMid}`;
}

function railMergeRight(cx: number, yA: number, yB: number, yOut: number, width = 14) {
  return `M 0 ${yA} H ${cx} V ${yOut} H ${width} M 0 ${yB} H ${cx} V ${yOut}`;
}

function railMergeLeft(cx: number, yA: number, yB: number, yOut: number, width = 14) {
  const x0 = width;
  const x1 = width - cx;
  return `M ${x0} ${yA} H ${x1} V ${yOut} H 0 M ${x0} ${yB} H ${x1} V ${yOut}`;
}

function ConnectorSvg({
  width,
  paths,
}: {
  width: number;
  paths: string[];
}) {
  return (
    <svg
      className="block h-full w-full"
      viewBox={`0 0 ${width} 100`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden
    >
      {paths.map((d, index) => (
        <path
          key={index}
          d={d}
          stroke={STROKE}
          strokeWidth={STROKE_WIDTH}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}

export function ConnectorRailsLeft() {
  const width = 14;
  const cx = 6;
  const pairs: [number, number, number][] = [
    [6.25, 12.5, 18.75],
    [31.25, 37.5, 43.75],
    [56.25, 62.5, 68.75],
    [81.25, 87.5, 93.75],
  ];
  return <ConnectorSvg width={width} paths={pairs.map((pair) => railPairRight(cx, ...pair, width))} />;
}

export function ConnectorRailsMidLeft() {
  const width = 14;
  const cx = 6;
  const blocks: [number, number, number][] = [
    [12.5, 25, 37.5],
    [62.5, 75, 87.5],
  ];
  return <ConnectorSvg width={width} paths={blocks.map((block) => railMergeRight(cx, ...block, width))} />;
}

export function ConnectorRailsFinalLeft() {
  const width = 14;
  const cx = 6;
  return <ConnectorSvg width={width} paths={[railMergeRight(cx, 25, 75, 50, width)]} />;
}

export function ConnectorRailsFinalRight() {
  const width = 14;
  const cx = 6;
  return <ConnectorSvg width={width} paths={[railMergeLeft(cx, 25, 75, 50, width)]} />;
}

export function ConnectorRailsRight() {
  const width = 14;
  const cx = 6;
  const pairs: [number, number, number][] = [
    [6.25, 12.5, 18.75],
    [31.25, 37.5, 43.75],
    [56.25, 62.5, 68.75],
    [81.25, 87.5, 93.75],
  ];
  return <ConnectorSvg width={width} paths={pairs.map((pair) => railPairLeft(cx, ...pair, width))} />;
}

export function ConnectorRailsMidRight() {
  const width = 14;
  const cx = 6;
  const blocks: [number, number, number][] = [
    [12.5, 25, 37.5],
    [62.5, 75, 87.5],
  ];
  return <ConnectorSvg width={width} paths={blocks.map((block) => railMergeLeft(cx, ...block, width))} />;
}

export function ConnectorBridgeLeft() {
  const width = 24;
  return <ConnectorSvg width={width} paths={[railMergeRight(10, 25, 75, 50, width)]} />;
}

export function ConnectorBridgeRight() {
  const width = 24;
  return <ConnectorSvg width={width} paths={[railMergeLeft(10, 25, 75, 50, width)]} />;
}

export function ConnectorCenterLine() {
  return <ConnectorSvg width={28} paths={["M 0 50 H 28"]} />;
}

export function ConnectorBridgePairLeft() {
  return <ConnectorSvg width={24} paths={["M 0 25 H 24", "M 0 75 H 24"]} />;
}

export function ConnectorBridgePairRight() {
  return <ConnectorSvg width={24} paths={["M 24 25 H 0", "M 24 75 H 0"]} />;
}

export function ConnectorCenterVertical() {
  return <ConnectorSvg width={20} paths={["M 10 0 V 100"]} />;
}
