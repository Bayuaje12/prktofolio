import React from 'react';
import {AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {Background, FilmGrain, FloatingParticles, GlassCard, RevealWords} from '../components';
import {CONTENT, THEME} from '../data';
import {fontFamily} from '../fonts';
import {spr} from '../lib/motion';

export const Scene02Profile: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const cardP = spring({frame: frame - 18, fps, config: spr.gentle});
  const nameP = spring({frame: frame - 6, fps, config: spr.smooth});
  const cardY = interpolate(cardP, [0, 1], [90, 0]);
  const cardScale = interpolate(cardP, [0, 1], [0.9, 1]);
  const cardBlur = interpolate(cardP, [0, 1], [16, 0]);
  const cardRotateY = interpolate(cardP, [0, 1], [-10, -4]) + Math.sin(frame * 0.012) * 1.2;
  const cardRotateX = interpolate(cardP, [0, 1], [8, 3]) + Math.cos(frame * 0.01) * 0.8;
  const parallaxX = Math.sin(frame * 0.008) * 8;
  const parallaxY = Math.cos(frame * 0.007) * 6;

  return (
    <AbsoluteFill style={{color: THEME.colors.white, overflow: 'hidden'}}>
      <Background variant="dark" intensity={1} />
      <FloatingParticles count={18} seed="profile" />

      {/* Big background typography */}
      <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
        <div
          style={{
            fontFamily: fontFamily.display,
            fontWeight: 800,
            fontSize: 260,
            letterSpacing: '-0.05em',
            color: 'rgba(247,251,250,0.035)',
            transform: `translate(${parallaxX * -1}px, ${parallaxY * -1}px)`,
            position: 'absolute',
            top: 160,
          }}
        >
          {CONTENT.personal.name}
        </div>
      </AbsoluteFill>

      <AbsoluteFill style={{padding: '120px 72px', justifyContent: 'space-between'}}>
        <div>
          <div
            style={{
              fontFamily: fontFamily.mono,
              fontSize: 20,
              letterSpacing: '0.4em',
              color: THEME.colors.cyanSoft,
              opacity: nameP,
              marginBottom: 20,
            }}
          >
            PERSONAL PROFILE
          </div>
          <div
            style={{
              fontFamily: fontFamily.display,
              fontWeight: 800,
              fontSize: 150,
              lineHeight: 0.86,
              letterSpacing: '-0.06em',
              opacity: nameP,
              transform: `translateY(${interpolate(nameP, [0, 1], [50, 0])}px)`,
              filter: `blur(${interpolate(nameP, [0, 1], [14, 0])}px)`,
            }}
          >
            {CONTENT.personal.name}
          </div>
        </div>

        <div style={{perspective: 1400, display: 'flex', justifyContent: 'center'}}>
          <div
            style={{
              width: '100%',
              maxWidth: 860,
              transform: `translateY(${cardY}px) scale(${cardScale}) rotateY(${cardRotateY}deg) rotateX(${cardRotateX}deg) translateX(${parallaxX}px)`,
              opacity: cardP,
              filter: `blur(${cardBlur}px)`,
              transformStyle: 'preserve-3d',
            }}
          >
            <GlassCard padding={36} glow={THEME.colors.emeraldGlow}>
              <div style={{display: 'flex', gap: 32, alignItems: 'center'}}>
                <div
                  style={{
                    width: 240,
                    height: 240,
                    borderRadius: 32,
                    overflow: 'hidden',
                    flexShrink: 0,
                    border: '1px solid rgba(103,232,249,0.25)',
                    boxShadow: `0 20px 60px rgba(0,0,0,0.35), 0 0 40px rgba(52,211,153,0.12)`,
                  }}
                >
                  <Img
                    src={staticFile(CONTENT.personal.profilePhoto.replace(/^\//, ''))}
                    style={{width: '100%', height: '100%', objectFit: 'cover'}}
                  />
                </div>
                <div style={{flex: 1}}>
                  <div style={{fontFamily: fontFamily.mono, fontSize: 18, letterSpacing: '0.35em', color: THEME.colors.cyanSoft, marginBottom: 12}}>
                    {CONTENT.personal.shortTitle}
                  </div>
                  <div style={{fontFamily: fontFamily.display, fontSize: 64, fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.04em'}}>
                    {CONTENT.personal.name}
                  </div>
                  <div style={{marginTop: 10, fontFamily: fontFamily.body, fontSize: 24, color: THEME.colors.emeraldGlow}}>
                    {CONTENT.personal.title}
                  </div>
                </div>
              </div>
              <div style={{marginTop: 30, height: 1, background: 'rgba(255,255,255,0.1)'}} />
              <div style={{marginTop: 24}}>
                <RevealWords
                  text={CONTENT.personal.description}
                  delay={38}
                  stagger={1.5}
                  style={{gap: 0}}
                  wordStyle={{
                    fontFamily: fontFamily.body,
                    fontSize: 28,
                    lineHeight: 1.55,
                    color: THEME.colors.whiteSoft,
                  }}
                />
              </div>
            </GlassCard>
          </div>
        </div>

        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'end'}}>
          <div style={{fontFamily: fontFamily.mono, fontSize: 18, color: THEME.colors.whiteMuted, letterSpacing: '0.2em'}}>
            {CONTENT.personal.brand}
          </div>
          <div style={{display: 'flex', gap: 12}}>
            {[0, 1, 2].map((i) => {
              const p = spring({frame: frame - 60 - i * 6, fps, config: spr.bouncy});
              return (
                <div
                  key={i}
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 18,
                    border: '1px solid rgba(103,232,249,0.22)',
                    background: 'rgba(255,255,255,0.04)',
                    transform: `translateY(${interpolate(p, [0, 1], [20, 0])}px) rotate(${interpolate(p, [0, 1], [20, 0])}deg)`,
                    opacity: p,
                  }}
                />
              );
            })}
          </div>
        </div>
      </AbsoluteFill>
      <FilmGrain />
    </AbsoluteFill>
  );
};
