import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for PAI Teacher Assistant & Quiz Generator using Gemini API
  app.post('/api/gemini/pai-assistant', async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(400).json({ 
          error: 'GEMINI_API_KEY belum dikonfigurasi. Silakan atur API key di panel Secrets AI Studio.' 
        });
      }

      const { prompt, grade, topic } = req.body;
      const ai = new GoogleGenAI({ apiKey });

      const systemInstruction = `Kamu adalah Asisten Guru PAI (Pendidikan Agama Islam) SD yang bijak, ramah, dan berpengetahuan luas.
Tugasmu membantu guru membuat penjelasan materi PAI yang menyenangkan, soal kuis PAI Kurikulum Merdeka, atau tips mengajar interaktif untuk siswa SD Kelas ${grade || '1-6'}.
Gunakan bahasa Indonesia yang jelas, bernada positif, edukatif, serta sertakan dalil/ayat Al-Qur'an atau Hadits yang relevan jika sesuai.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: `${systemInstruction}\n\nTopik/Permintaan Guru: ${prompt} (Topik: ${topic || 'PAI Umum'})` }] }
        ]
      });

      res.json({ result: response.text });
    } catch (err: unknown) {
      console.error('Gemini API Error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Gagal menghubungi layanan Gemini AI.';
      res.status(500).json({ error: errorMessage });
    }
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', app: 'Media Pembelajaran Interaktif PAI' });
  });

  // Vite middleware in dev, static files in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`PAI Interactive App Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
