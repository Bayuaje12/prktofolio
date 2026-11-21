import {Config} from '@remotion/cli/config';

Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);
Config.setJpegQuality(95);
Config.setConcurrency(2);
// Termux/Android: use system Chromium if available
Config.setBrowserExecutable('/data/data/com.termux/files/usr/bin/chromium-browser');
