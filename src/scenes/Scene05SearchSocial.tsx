import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Background, FilmGrain, FloatingParticles, GlassCard, RevealWords} from '../components';
import {CONTENT, THEME} from '../data';
import {fontFamily} from '../fonts';
import {spr} from '../lib/motion';

const SocialBadge: React.FC<{label: string}> = ({label}) => {
  const initials = label.slice(0, 2).toUpperCase();
  return (
    <div
      style={{
        width: 58,
        height: 58,
        borderRadius: 18,
        background: 'linear-gradient(135deg, rgba(52,211,153,0.22), rgba(34,211,238,0.18))',
        border: '1px solid rgba(103,232,249,0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: fontFamily.mono,
        fontSize: 18,
        color: THEME.colors.white,
        fontWeight: 700,
      }}
    >
      {initials}
    </div>
  );
};

export const Scene05SearchSocial: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const topP = spring({frame: frame - 8, fps, config: spr.smooth});
  const query = CONTENT.search.query;
  const typedChars = Math.floor(interpolate(frame, [55, 55 + query.length * 3], [0, query.length], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}));
  const typed = query.slice(0, typedChars);
  const caretOn = Math.floor(frame / 8) % 2 === 0;
  const showSocial = frame > 150;
  const socialP = spring({frame: frame - 155, fps, config: spr.smooth});

  return (
    <AbsoluteFill style={{color: THEME.colors.white, overflow: 'hidden'}}>
      <Background variant="dark" intensity={0.95} />
      <FloatingParticles count={14} seed="search" />

      <AbsoluteFill style={{padding: '120px 72px', justifyContent: 'center'}}>
        <div style={{opacity: topP, transform: `translateY(${interpolate(topP, [0, 1], [20, 0])}px)`}}>
          <div style={{fontFamily: fontFamily.mono, fontSize: 20, letterSpacing: '0.35em', color: THEME.colors.cyanSoft, textAlign: 'center'}}>
            DISCOVER
          </div>
          <div style={{marginTop: 18, textAlign: 'center'}}>
            <RevealWords
              text={CONTENT.search.topText}
              delay={10}
              stagger={2}
              style={{justifyContent: 'center'}}
              wordStyle={{fontFamily: fontFamily.display, fontSize: 72, fontWeight: 800, lineHeight: 1.02, letterSpacing: '-0.04em'}}
            />
          </div>
        </div>

        <div style={{marginTop: 64, display: 'flex', justifyContent: 'center'}}>
          <div
            style={{
              width: '100%',
              maxWidth: 860,
              padding: '26px 30px',
              borderRadius: 999,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.14)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: 18,
              opacity: spring({frame: frame - 35, fps, config: spr.gentle}),
            }}
          >
            <div style={{width: 46, height: 46, borderRadius: '50%', border: `2px solid ${THEME.colors.cyanSoft}`, position: 'relative'}}>
              <div style={{position: 'absolute', width: 14, height: 2, background: THEME.colors.cyanSoft, right: -10, bottom: 2, transform: 'rotate(45deg)'}} />
            </div>
            <div style={{fontFamily: fontFamily.body, fontSize: 34, color: THEME.colors.white, flex: 1, minHeight: 42}}>
              {typed}
              <span style={{opacity: caretOn ? 1 : 0, color: THEME.colors.cyan}}>│</span>
            </div>
          </div>
        </div>

        <div style={{marginTop: 70, opacity: showSocial ? socialP : 0, transform: `translateY(${interpolate(socialP, [0, 1], [20, 0])}px)`}}>
          <div style={{fontFamily: fontFamily.mono, fontSize: 20, letterSpacing: '0.35em', color: THEME.colors.whiteMuted, textAlign: 'center', marginBottom: 28}}>
            {CONTENT.search.findMeText}
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18}}>
            {CONTENT.socials.map((s, i) => {
              const p = spring({frame: frame - 165 - i * 6, fps, config: spr.snappy});
              return (
                <div key={s.id} style={{opacity: p, transform: `translateY(${interpolate(p, [0, 1], [24, 0])}px) scale(${interpolate(p, [0, 1], [0.96, 1])})`}}>
                  <GlassCard padding={20} glow={i % 2 === 0 ? THEME.colors.emeraldGlow : THEME.colors.cyan}>
                    <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                      <SocialBadge label={s.platform} />
                      <div style={{minWidth: 0}}>
                        <div style={{fontFamily: fontFamily.body, fontSize: 18, color: THEME.colors.whiteMuted}}>{s.platform}</div>
                        <div style={{fontFamily: fontFamily.display, fontSize: 24, fontWeight: 700, color: THEME.colors.white, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                          {s.username}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              );
            })}
          </div>
        </div>
      </AbsoluteFill>
      <FilmGrain />
    </AbsoluteFill>
  );
};
