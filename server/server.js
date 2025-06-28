const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
const cors = require('cors');

console.log('🚀 Démarrage du serveur...');

const app = express();

// ============= CORS ULTRA PERMISSIF POUR DEBUG =============
app.use((req, res, next) => {
  console.log(`\n📥 ${req.method} ${req.url} depuis ${req.get('Origin')}`);
  
  // Headers CORS manuels et permissifs
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  // Répondre aux requêtes OPTIONS (preflight)
  if (req.method === 'OPTIONS') {
    console.log('🔄 Requête OPTIONS (preflight) - Réponse OK');
    return res.sendStatus(200);
  }
  
  next();
});

// Middleware JSON après CORS
app.use(express.json());

// Configuration email
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Route de test
app.get('/api/test', (req, res) => {
  console.log('🧪 Route de test appelée');
  res.json({ 
    message: 'Serveur backend fonctionnel!', 
    timestamp: new Date().toISOString(),
    cors: 'OK',
    origin: req.get('Origin')
  });
});

// Route principale pour l'envoi d'emails
app.post('/api/send-email', (req, res) => {
  console.log('\n📧 === DÉBUT TRAITEMENT EMAIL ===');
  console.log('📦 Body reçu:', req.body);
  
  const { name, email, phone, subject, message, destination } = req.body;
  
  // Validation des champs requis
  if (!name || !email || !message) {
    console.log('❌ Champs requis manquants');
    return res.status(400).json({ 
      message: 'Nom, email et message sont requis'
    });
  }
  
  // Construire le contenu de l'email
  let emailContent = `Nouveau message de contact:\n\n`;
  emailContent += `Nom: ${name}\n`;
  emailContent += `Email: ${email}\n`;
  emailContent += `Téléphone: ${phone || 'Non renseigné'}\n`;
  emailContent += `Destination souhaitée: ${destination || 'Non spécifiée'}\n`;
  emailContent += `Type de demande: ${subject || 'Non spécifié'}\n\n`;
  emailContent += `Message:\n${message}`;
  
  const mailOptions = {
    from: process.env.MAIL_FROM_ADDRESS,
    to: 'mandimbizarajuno@gmail.com',
    subject: subject ? `[${subject}] ${destination || 'Nouvelle demande'}` : 'Nouveau message de contact',
    text: emailContent,
  };
  
  console.log('📧 Envoi email vers:', mailOptions.to);
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('❌ Erreur envoi email:', error);
      return res.status(500).json({ 
        message: 'Erreur lors de l\'envoi',
        error: error.message
      });
    }
    
    console.log('✅ Email envoyé avec succès:', info.response);
    console.log('📧 === FIN TRAITEMENT EMAIL ===\n');
    
    res.status(200).json({ 
      message: 'Email envoyé avec succès',
      messageId: info.messageId
    });
  });
});

// Gestion des erreurs
app.use((error, req, res, next) => {
  console.error('💥 Erreur serveur:', error);
  res.status(500).json({ message: 'Erreur serveur interne' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`\n🎉 =================================`);
  console.log(`🚀 Serveur démarré avec succès!`);
  console.log(`📍 Port: ${PORT}`);
  console.log(`🌍 URL: http://localhost:${PORT}`);
  console.log(`🧪 Test: http://localhost:${PORT}/api/test`);
  console.log(`📧 Email: http://localhost:${PORT}/api/send-email`);
  console.log(`🎉 =================================\n`);
  
  console.log('🔧 Configuration CORS: ULTRA PERMISSIVE (pour debug)');
  console.log('⚠️  ATTENTION: En production, restreindre les origins CORS\n');
});