// Web Audio API Sound Synthesizer for Interactive PAI Learning App
// Provides sound effects without external audio file dependencies.

class AudioFX {
  private ctx: AudioContext | null = null;
  public soundEnabled: boolean = true;

  private getContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // Click sound on tap/button press
  playClick() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) {
      console.warn('Audio FX error', e);
    }
  }

  // Correct answer chime (Bintang / Jawaban Benar)
  playCorrect() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getContext();
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);

        gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.35);
      });
    } catch (e) {
      console.warn('Audio FX error', e);
    }
  }

  // Wrong answer soft buzzer
  playWrong() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.setValueAtTime(180, ctx.currentTime + 0.1);

      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } catch (e) {
      console.warn('Audio FX error', e);
    }
  }

  // School Bell / Bell Kelas (Ring)
  playBell() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getContext();
      const freqs = [880, 1108.73, 1318.51, 1760];
      freqs.forEach((f) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, ctx.currentTime);

        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 1.2);
      });
    } catch (e) {
      console.warn('Audio FX error', e);
    }
  }

  // Tepuk Anak Sholeh Rhythm
  playTepuk() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getContext();
      const claps = [0, 0.2, 0.4, 0.7, 0.9, 1.2, 1.4, 1.6];
      claps.forEach((time) => {
        // Noise buffer for clap sound
        const bufferSize = ctx.sampleRate * 0.08;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 1200;

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.3, ctx.currentTime + time);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + time + 0.08);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        noise.start(ctx.currentTime + time);
      });
    } catch (e) {
      console.warn('Audio FX error', e);
    }
  }

  // Fanfare celebration melody
  playFanfare() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getContext();
      const melody = [
        { note: 523.25, time: 0, dur: 0.15 },
        { note: 659.25, time: 0.15, dur: 0.15 },
        { note: 783.99, time: 0.30, dur: 0.15 },
        { note: 1046.50, time: 0.45, dur: 0.50 }
      ];

      melody.forEach((item) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(item.note, ctx.currentTime + item.time);

        gain.gain.setValueAtTime(0, ctx.currentTime + item.time);
        gain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + item.time + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + item.time + item.dur);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + item.time);
        osc.stop(ctx.currentTime + item.time + item.dur);
      });
    } catch (e) {
      console.warn('Audio FX error', e);
    }
  }

  // BasmalahMelody sound
  playBasmalah() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getContext();
      // Gentle spiritual melodic motif: G4, Bb4, D5, C5, Bb4, A4, G4
      const melody = [
        { note: 392.00, dur: 0.35 },
        { note: 466.16, dur: 0.35 },
        { note: 587.33, dur: 0.45 },
        { note: 523.25, dur: 0.35 },
        { note: 466.16, dur: 0.35 },
        { note: 440.00, dur: 0.35 },
        { note: 392.00, dur: 0.60 },
      ];

      let now = ctx.currentTime;
      melody.forEach((item) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(item.note, now);

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.2, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + item.dur);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + item.dur);

        now += item.dur * 0.9;
      });
    } catch (e) {
      console.warn('Audio FX error', e);
    }
  }
}

export const soundFX = new AudioFX();
