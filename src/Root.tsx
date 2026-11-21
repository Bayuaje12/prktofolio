import React from 'react';
import {Composition, Folder, AbsoluteFill} from 'remotion';
import './fonts';
import {PortfolioVideo} from './PortfolioVideo';
import {FPS, TOTAL_FRAMES} from './data';

const HorizontalWrapper: React.FC = () => {
  // 16:9 frame with centered 9:16 composition scaled to fit height
  const scale = 1080 / 1920; // fit 1920h into 1080h => 0.5625, width becomes 607.5
  const compW = 1080;
  const compH = 1920;
  const outW = 1920;
  const outH = 1080;
  const s = outH / compH;
  const left = (outW - compW * s) / 2;
  return (
    <AbsoluteFill style={{background: '#050807'}}>
      <AbsoluteFill
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(15,61,46,0.5), transparent 70%), radial-gradient(ellipse 40% 40% at 80% 30%, rgba(34,211,238,0.12), transparent 60%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left,
          top: 0,
          width: compW,
          height: compH,
          transform: `scale(${s})`,
          transformOrigin: 'top left',
          overflow: 'hidden',
          boxShadow: '0 0 80px rgba(0,0,0,0.5)',
        }}
      >
        <PortfolioVideo />
      </div>
    </AbsoluteFill>
  );
};

export const Root: React.FC = () => {
  return (
    <Folder name="Bayu-Portfolio">
      <Composition
        id="BayuPortfolioVertical"
        component={PortfolioVideo}
        durationInFrames={TOTAL_FRAMES}
        fps={FPS}
        width={1080}
        height={1920}
      />
      <Composition
        id="BayuPortfolioHorizontal"
        component={HorizontalWrapper}
        durationInFrames={TOTAL_FRAMES}
        fps={FPS}
        width={1920}
        height={1080}
      />
    </Folder>
  );
};
