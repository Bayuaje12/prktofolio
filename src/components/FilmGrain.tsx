import React, {useMemo} from 'react';
import {AbsoluteFill, random, useCurrentFrame} from 'remotion';

export const FilmGrain: React.FC<{opacity?: number}> = ({opacity = 0.045}) => {
  const frame = useCurrentFrame();
  const dots = useMemo(() => {
    return Array.from({length: 80}).map((_, i) => ({
      x: random(`grain-x-${i}`) * 100,
      y: random(`grain-y-${i}`) * 100,
      s: 1 + random(`grain-s-${i}`) * 2.2,
      o: 0.2 + random(`grain-o-${i}`) * 0.8,
    }));
  }, []);
  const shift = (frame % 6) * 0.3;
  return (
    <AbsoluteFill style={{pointerEvents: 'none', mixBlendMode: 'screen', opacity}}>
      <svg width="100%" height="100%" style={{position: 'absolute'}}>
        <g transform={`translate(${shift} ${shift})`}>
          {dots.map((d, i) => (
            <circle key={i} cx={`${d.x}%`} cy={`${d.y}%`} r={d.s} fill={`rgba(255,255,255,${d.o * 0.12})`} />
          ))}
        </g>
      </svg>
    </AbsoluteFill>
  );
};
