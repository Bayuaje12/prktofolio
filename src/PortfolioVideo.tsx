import React from 'react';
import {AbsoluteFill, Audio, Sequence, staticFile} from 'remotion';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {slide} from '@remotion/transitions/slide';
import {CONTENT, TIMING, TRANSITION} from './data';
import {Scene01Intro, Scene02Profile, Scene03Skills, Scene04Showcase, Scene05SearchSocial, Scene06Outro} from './scenes';

const t = linearTiming({durationInFrames: TRANSITION});

export const PortfolioVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{background: '#050807'}}>
      <Audio src={staticFile(CONTENT.audio.music.replace(/^\//, ''))} volume={0.35} />
      {/* SFX cues (placeholders) */}
      <Sequence from={72}><Audio src={staticFile(CONTENT.audio.sfxClick.replace(/^\//, ''))} volume={0.4} /></Sequence>
      <Sequence from={TIMING.intro - TRANSITION}><Audio src={staticFile(CONTENT.audio.sfxWhoosh.replace(/^\//, ''))} volume={0.25} /></Sequence>
      <Sequence from={TIMING.intro + TIMING.profile + TIMING.skills - TRANSITION * 2}><Audio src={staticFile(CONTENT.audio.sfxImpact.replace(/^\//, ''))} volume={0.2} /></Sequence>

      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={TIMING.intro}>
          <Scene01Intro />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t} />

        <TransitionSeries.Sequence durationInFrames={TIMING.profile}>
          <Scene02Profile />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({direction: 'from-bottom'})} timing={t} />

        <TransitionSeries.Sequence durationInFrames={TIMING.skills}>
          <Scene03Skills />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t} />

        <TransitionSeries.Sequence durationInFrames={TIMING.showcase}>
          <Scene04Showcase />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({direction: 'from-right'})} timing={t} />

        <TransitionSeries.Sequence durationInFrames={TIMING.search}>
          <Scene05SearchSocial />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t} />

        <TransitionSeries.Sequence durationInFrames={TIMING.outro}>
          <Scene06Outro />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
