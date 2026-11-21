import {loadFont as loadSora} from '@remotion/google-fonts/Sora';
import {loadFont as loadInter} from '@remotion/google-fonts/Inter';
import {loadFont as loadJetBrainsMono} from '@remotion/google-fonts/JetBrainsMono';

export const sora = loadSora('normal', {
  weights: ['400', '600', '700', '800'],
  subsets: ['latin'],
});
export const inter = loadInter('normal', {
  weights: ['400', '500', '600', '700'],
  subsets: ['latin'],
});
export const jetbrains = loadJetBrainsMono('normal', {
  weights: ['400', '500', '700'],
  subsets: ['latin'],
});

export const fontFamily = {
  display: sora.fontFamily,
  body: inter.fontFamily,
  mono: jetbrains.fontFamily,
};
