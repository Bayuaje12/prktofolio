import React from 'react';
import {AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {Background, FilmGrain, FloatingParticles, GlassCard} from '../components';
import {CONTENT, THEME} from '../data';
import {fontFamily} from '../fonts';
import {spr} from '../lib/motion';

export const Scene03Skills: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const titleP = spring({frame: frame - 4, fps, config: spr.smooth});
  const skills = CONTENT.skills;

  return (
    <AbsoluteFill style={{color: THEME.colors.white, overflow: 'hidden'}}>
      <Background variant="dark" intensity={0.95} />
      <FloatingParticles count={16} seed="skills" />

      <AbsoluteFill style={{padding: '110px 64px'}}>
        <div
          style={{
            opacity: titleP,
            transform: `translateY(${interpolate(titleP, [0, 1], [30, 0])}px)`,
            filter: `blur(${interpolate(titleP, [0, 1], [10, 0])}px)`,
          }}
        >
          <div style={{fontFamily: fontFamily.mono, fontSize: 20, color: THEME.colors.cyanSoft, letterSpacing: '0.38em'}}>
            SKILLS & TOOLS
          </div>
          <div style={{fontFamily: fontFamily.display, fontSize: 86, fontWeight: 800, lineHeight: 0.95, marginTop: 16, letterSpacing: '-0.04em'}}>
            CAPABILITIES
          </div>
          <div style={{fontFamily: fontFamily.body, fontSize: 24, color: THEME.colors.whiteMuted, marginTop: 18, maxWidth: 700}}>
            Tools and areas I work with — editable in the central content config.
          </div>
        </div>

        <div
          style={{
            marginTop: 70,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 22,
          }}
        >
          {skills.map((skill, i) => {
            const delay = 12 + i * 5;
            const p = spring({frame: frame - delay, fps, config: spr.snappy});
            const float = Math.sin((frame + i * 18) * 0.04) * 4;
            const rot = interpolate(p, [0, 1], [8, 0]) + Math.sin((frame + i * 10) * 0.02) * 0.8;
            const col = i % 2;
            const x = interpolate(p, [0, 1], [col === 0 ? -30 : 30, 0]);
            return (
              <div
                key={skill.id}
                style={{
                  opacity: p,
                  transform: `translate(${x}px, ${interpolate(p, [0, 1], [30, 0]) + float}px) scale(${interpolate(p, [0, 1], [0.88, 1])}) rotate(${rot}deg)`,
                  filter: `blur(${interpolate(p, [0, 1], [8, 0])}px)`,
                }}
              >
                <GlassCard padding={24} glow={i % 2 === 0 ? THEME.colors.emeraldGlow : THEME.colors.cyan}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
                    <div
                      style={{
                        width: 74,
                        height: 74,
                        borderRadius: 20,
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Img src={staticFile(skill.icon.replace(/^\//, ''))} style={{width: 52, height: 52}} />
                    </div>
                    <div>
                      <div style={{fontFamily: fontFamily.display, fontSize: 34, fontWeight: 700, letterSpacing: '-0.02em'}}>
                        {skill.name}
                      </div>
                      <div style={{fontFamily: fontFamily.mono, fontSize: 14, color: THEME.colors.whiteMuted, letterSpacing: '0.18em', marginTop: 6, textTransform: 'uppercase'}}>
                        {skill.group ?? 'tool'}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
      <FilmGrain />
    </AbsoluteFill>
  );
};
