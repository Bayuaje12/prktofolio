import React from 'react';
import {AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {Background, FilmGrain, FloatingParticles, GlassCard} from '../components';
import {CONTENT, THEME} from '../data';
import {fontFamily} from '../fonts';
import {spr} from '../lib/motion';

export const Scene04Showcase: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const projects = CONTENT.projects;
  const titleP = spring({frame: frame - 5, fps, config: spr.smooth});

  // Horizontal camera drift across gallery
  const trackX = interpolate(frame, [0, 420], [40, -520], {extrapolateRight: 'clamp'});
  // Focus cycles through projects
  const focusIndex = Math.min(projects.length - 1, Math.floor(interpolate(frame, [30, 390], [0, projects.length], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})));

  const cards = [
    {x: 0, y: 260, w: 560, h: 360, s: 1},
    {x: 590, y: 180, w: 420, h: 280, s: 0.96},
    {x: 420, y: 560, w: 480, h: 320, s: 0.98},
    {x: 940, y: 420, w: 520, h: 340, s: 1},
    {x: 1040, y: 140, w: 360, h: 250, s: 0.94},
    {x: 1380, y: 320, w: 460, h: 310, s: 0.97},
  ];

  return (
    <AbsoluteFill style={{color: THEME.colors.white, overflow: 'hidden'}}>
      <Background variant="dark" intensity={1.05} />
      <FloatingParticles count={14} seed="showcase" />

      <AbsoluteFill style={{padding: '100px 64px 0'}}>
        <div style={{opacity: titleP, transform: `translateY(${interpolate(titleP, [0, 1], [24, 0])}px)`}}>
          <div style={{fontFamily: fontFamily.mono, fontSize: 20, letterSpacing: '0.38em', color: THEME.colors.cyanSoft}}>
            {CONTENT.showcase.subheading.toUpperCase()}
          </div>
          <div style={{fontFamily: fontFamily.display, fontWeight: 800, fontSize: 92, lineHeight: 0.92, letterSpacing: '-0.05em', marginTop: 14}}>
            {CONTENT.showcase.heading}
          </div>
        </div>
      </AbsoluteFill>

      {/* Gallery track */}
      <AbsoluteFill style={{top: 120}}>
        <div style={{position: 'absolute', left: 64 + trackX, top: 0, width: 1900, height: 1200}}>
          {projects.map((project, i) => {
            const c = cards[i % cards.length];
            const appear = spring({frame: frame - 15 - i * 8, fps, config: spr.gentle});
            const isFocus = i === focusIndex;
            const focusP = spring({frame: frame - (30 + i * 55), fps, config: spr.gentle});
            const floatY = Math.sin((frame + i * 30) * 0.018) * 6;
            const floatR = Math.sin((frame + i * 20) * 0.012) * 0.8;
            const z = isFocus ? 10 : 1;
            const scale = interpolate(appear, [0, 1], [0.88, c.s]) + (isFocus ? interpolate(focusP, [0, 1], [0, 0.035]) : 0);
            const glow = project.accent ?? THEME.colors.cyan;
            return (
              <div
                key={project.id}
                style={{
                  position: 'absolute',
                  left: c.x,
                  top: c.y + floatY,
                  width: c.w,
                  height: c.h,
                  opacity: appear,
                  transform: `scale(${scale}) rotate(${floatR}deg)`,
                  filter: `blur(${interpolate(appear, [0, 1], [10, 0])}px)`,
                  zIndex: z,
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 28,
                    overflow: 'hidden',
                    border: `1px solid ${isFocus ? glow + '88' : 'rgba(255,255,255,0.12)'}`,
                    background: 'rgba(255,255,255,0.04)',
                    boxShadow: isFocus
                      ? `0 30px 90px rgba(0,0,0,0.45), 0 0 60px ${glow}22`
                      : '0 20px 60px rgba(0,0,0,0.28)',
                  }}
                >
                  <Img src={staticFile(project.thumbnail.replace(/^\//, ''))} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(5,8,7,0.92) 10%, rgba(5,8,7,0.15) 45%, rgba(5,8,7,0.05) 100%)',
                    }}
                  />
                  <div style={{position: 'absolute', left: 24, right: 24, bottom: 22}}>
                    <div style={{fontFamily: fontFamily.mono, fontSize: 14, color: glow, letterSpacing: '0.22em', textTransform: 'uppercase'}}>
                      {project.category}
                    </div>
                    <div style={{fontFamily: fontFamily.display, fontSize: isFocus ? 40 : 32, fontWeight: 700, marginTop: 6, letterSpacing: '-0.03em'}}>
                      {project.name}
                    </div>
                    <div style={{fontFamily: fontFamily.body, fontSize: 16, color: THEME.colors.whiteSoft, marginTop: 6, lineHeight: 1.35}}>
                      {project.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>

      {/* Bottom focus strip */}
      <AbsoluteFill style={{justifyContent: 'flex-end', padding: '0 64px 110px'}}>
        <GlassCard padding={22} glow={THEME.colors.cyan}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20}}>
            <div>
              <div style={{fontFamily: fontFamily.mono, fontSize: 14, color: THEME.colors.cyanSoft, letterSpacing: '0.25em'}}>FEATURED</div>
              <div style={{fontFamily: fontFamily.display, fontSize: 34, fontWeight: 700, marginTop: 4}}>
                {projects[focusIndex]?.name}
              </div>
            </div>
            <div style={{display: 'flex', gap: 8}}>
              {projects.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: i === focusIndex ? 34 : 10,
                    height: 10,
                    borderRadius: 999,
                    background: i === focusIndex ? THEME.colors.cyan : 'rgba(255,255,255,0.22)',
                  }}
                />
              ))}
            </div>
          </div>
        </GlassCard>
      </AbsoluteFill>

      <FilmGrain />
    </AbsoluteFill>
  );
};
