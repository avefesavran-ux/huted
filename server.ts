import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/newsletter", (req, res) => {
    const { email } = req.body;
    console.log(`Newsletter subscription for: ${email}. Forwarding to av.efesavran@gmail.com`);
    // In a real app, you'd use nodemailer or a service like SendGrid here.
    res.json({ success: true, message: "Bültene başarıyla kaydoldunuz." });
  });

  app.post("/api/membership-apply", (req, res) => {
    const formData = req.body;
    console.log("New membership application received:", formData);
    console.log("Forwarding application to av.efesavran@gmail.com");
    res.json({ success: true, message: "Başvurunuz başarıyla alındı. Sizinle iletişime geçeceğiz." });
  });

  // Bylaws download route
  app.get("/api/download-bylaws", (req, res) => {
    const bylawsText = `HUKUK TEKNOLOJİLERİ DERNEĞİ TÜZÜĞÜ
Türk Medeni Kanunu ve 5253 Sayılı Dernekler Kanunu Hükümlerine Uygun Olarak Hazırlanmıştır.

BİRİNCİ BÖLÜM: KURULUŞ HÜKÜMLERİ
MADDE 1 – DERNEĞİN ADI VE MERKEZİ
Derneğin Adı: Hukuk Teknolojileri Derneği
Kısa Adı: HTD
Merkezi: Ankara

MADDE 2 – DERNEĞİN AMACI
Derneğin temel amacı; hukuk hizmetlerinin teknolojiyle dönüştürülmesini (LegalTech), hukuki iletişimin ve kullanıcı deneyiminin tasarım odaklı bir bakış açısıyla yeniden kurgulanmasını (LegalDesign) sağlamaktır...
(Tüzüğün tam metni burada yer alır)`;
    
    res.setHeader('Content-disposition', 'attachment; filename=htd_tuzuk.txt');
    res.setHeader('Content-type', 'text/plain');
    res.send(bylawsText);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve("dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve("dist/index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
