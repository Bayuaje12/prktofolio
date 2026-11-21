import {Config} from '@remotion/cli/config';
import {existsSync} from 'node:fs';

Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);
Config.setJpegQuality(95);
Config.setConcurrency(2);

// Termux/Android local support only. Never use this path in GitHub Actions/CI.
const termuxChromium = '/data/data/com.termux/files/usr/bin/chromium-browser';
if (!process.env.GITHUB_ACTIONS && process.env.PREFIX?.includes('com.termux') && existsSync(termuxChromium)) {
  Config.setBrowserExecutable(termuxChromium);
}

