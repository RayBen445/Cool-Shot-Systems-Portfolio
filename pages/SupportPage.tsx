
import React, { useState } from 'react';
import NeumorphicCard from '../components/NeumorphicCard';
import NeumorphicButton from '../components/NeumorphicButton';
import NeumorphicInput from '../components/NeumorphicInput';

const SupportPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submissionMessage, setSubmissionMessage] = useState('');

  // Telegram Bot Configuration
  const TELEGRAM_BOT_TOKEN = '8442728826:AAE4Xm47-gbL5FqDjWRK3WcOiYwjSs8WSC8';
  const TELEGRAM_USER_ID = '6649936329';
  const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendTelegramMessage = async (message: string) => {
    // Note: Direct browser-to-Telegram API calls will be blocked by CORS in production.
    // For production use, this should be proxied through a backend service or 
    // use a CORS proxy service.
    const response = await fetch(TELEGRAM_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_USER_ID,
        text: message,
        parse_mode: 'HTML'
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Telegram API error: ${errorData.description || 'Unknown error'}`);
    }

    return response.json();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmissionStatus('idle');

    try {
      // Format message for Telegram with enhanced design
      const telegramMessage = `
🌟 <b>NEW CONTACT MESSAGE</b> 🌟
━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 <b>Contact Details:</b>
   • <b>Name:</b> ${formData.name}
   • <b>Email:</b> ${formData.email}

💬 <b>Message:</b>
<code>${formData.message}</code>

━━━━━━━━━━━━━━━━━━━━━━━━━━
🏢 <i>Sent from Cool Shot Systems Portfolio</i>
⏰ <i>${new Date().toLocaleString()}</i>
      `.trim();

      await sendTelegramMessage(telegramMessage);
      
      setSubmissionStatus('success');
      setSubmissionMessage('Thank you! Your message has been sent successfully via Telegram.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmissionStatus('error');
      setSubmissionMessage('Sorry, something went wrong. Please try again later or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Get In Touch</h1>
      <div className="max-w-2xl mx-auto">
        <NeumorphicCard padding="p-8">
          <div className="mb-6 text-center">
            <p className="text-gray-600">
              Send us a message and we'll get back to you via Telegram! 📱
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">Full Name</label>
              <NeumorphicInput 
                type="text" 
                name="name" 
                id="name" 
                placeholder="Heritage Oladoye" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
              <NeumorphicInput 
                type="email" 
                name="email" 
                id="email" 
                placeholder="professor@coolshot.systems" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-2">Message</label>
              <NeumorphicInput 
                as="textarea" 
                name="message" 
                id="message" 
                rows={5} 
                placeholder="Your message here..." 
                required 
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            
            {submissionStatus !== 'idle' && (
              <div
                role="alert"
                aria-live="polite"
                className={`text-center py-2 px-4 rounded-lg text-sm font-medium ${
                  submissionStatus === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
              >
                {submissionMessage}
              </div>
            )}

            <div className="text-center pt-4">
              <NeumorphicButton type="submit" padding="py-3 px-8 text-lg" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </NeumorphicButton>
            </div>
          </form>
        </NeumorphicCard>
      </div>
    </div>
  );
};

export default SupportPage;