import { writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const sampleRate = 48000;
const duration = 30;
const chords = [
  [48, 60, 64, 67, 71],
  [45, 60, 64, 69, 72],
  [41, 60, 65, 69, 72],
  [43, 59, 62, 67, 71],
  [40, 59, 64, 67, 71],
  [48, 60, 64, 67, 72]
];

const frequency = midi => 440 * 2 ** ((midi - 69) / 12);

const addNote = (channels, midi, start, length, volume, pan, sustained) => {
  const first = Math.floor(start * sampleRate);
  const count = Math.min(Math.floor(length * sampleRate), channels[0].length - first);
  const pitch = frequency(midi);
  const gains = [Math.sqrt((1 - pan) / 2), Math.sqrt((1 + pan) / 2)];
  for (let offset = 0; offset < count; offset++) {
    const time = offset / sampleRate;
    const attack = Math.min(1, time / 0.025);
    const release = Math.min(1, (length - time) / 0.6);
    const envelope = attack * release * Math.exp(-time / (sustained ? 3.5 : 1.1));
    const phase = 2 * Math.PI * pitch * time;
    const tone = Math.sin(phase) + 0.3 * Math.sin(2 * phase) + 0.12 * Math.sin(3 * phase);
    const value = volume * envelope * tone;
    channels[0][first + offset] += value * gains[0];
    channels[1][first + offset] += value * gains[1];
  }
};

export const createPromotionMusic = () => {
  const frames = sampleRate * duration;
  const channels = [new Float64Array(frames), new Float64Array(frames)];
  chords.forEach((chord, scene) => {
    const start = scene * 5;
    chord.slice(1).forEach((midi, index) => {
      addNote(channels, midi - 12, start, 5, 0.025, (index - 1.5) / 3, true);
    });
    for (let beat = 0; beat < 4; beat++) {
      addNote(channels, chord[1 + beat], start + beat * 1.25, 3, 0.075, beat % 2 === 0 ? -0.25 : 0.25, false);
      addNote(channels, chord[0], start + beat * 1.25, 0.8, 0.03, 0, false);
    }
  });

  const dataBytes = frames * 4;
  const wav = Buffer.alloc(44 + dataBytes);
  wav.write('RIFF', 0);
  wav.writeUInt32LE(36 + dataBytes, 4);
  wav.write('WAVEfmt ', 8);
  wav.writeUInt32LE(16, 16);
  wav.writeUInt16LE(1, 20);
  wav.writeUInt16LE(2, 22);
  wav.writeUInt32LE(sampleRate, 24);
  wav.writeUInt32LE(sampleRate * 4, 28);
  wav.writeUInt16LE(4, 32);
  wav.writeUInt16LE(16, 34);
  wav.write('data', 36);
  wav.writeUInt32LE(dataBytes, 40);
  for (let frame = 0; frame < frames; frame++) {
    const seconds = frame / sampleRate;
    const fade = Math.min(1, seconds / 0.8, (duration - seconds) / 2);
    for (let channel = 0; channel < 2; channel++) {
      const value = Math.round(channels[channel][frame] * fade * 32767);
      if (Math.abs(value) > 32767) throw new Error('Music exceeds the PCM audio range.');
      wav.writeInt16LE(value, 44 + frame * 4 + channel * 2);
    }
  }
  return wav;
};

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const output = process.argv[2];
  if (!output) throw new Error('Usage: node promo-music.mjs output.wav');
  writeFileSync(output, createPromotionMusic(), { flag: 'wx' });
}
