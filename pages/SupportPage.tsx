
import React, { useState } from 'react';
import NeumorphicCard from '../components/NeumorphicCard';
import NeumorphicButton from '../components/NeumorphicButton';
import NeumorphicInput from '../components/NeumorphicInput';

const SupportPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submissionMessage, setSubmissionMessage] = useState('');

  // IMPORTANT: Replace this with your own Formspree endpoint URL.
  // Go to formspree.io to create a new form and get your endpoint.
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your_unique_id';
  const isEndpointConfigured = FORMSPREE_ENDPOINT !== 'https://formspree.io/f/your_unique_id';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting || !isEndpointConfigured) return;

    setIsSubmitting(true);
    setSubmissionStatus('idle');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setSubmissionMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        console.error('Formspree API error:', JSON.stringify(errorData, null, 2));
        setSubmissionStatus('error');
        setSubmissionMessage('Sorry, something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmissionStatus('error');
      setSubmissionMessage('A network error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Get In Touch</h1>
      <div className="max-w-2xl mx-auto">
        <NeumorphicCard padding="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isEndpointConfigured && (
              <div role="alert" className="bg-yellow-100 text-yellow-800 p-4 rounded-lg text-sm font-medium text-center">
                <strong>Action Required:</strong> To enable this form, please replace the placeholder URL in{' '}
                <code className="font-mono bg-yellow-200 p-1 rounded">pages/SupportPage.tsx</code>{' '}
                with your own Formspree endpoint.
              </div>
            )}
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
                disabled={!isEndpointConfigured}
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
                disabled={!isEndpointConfigured}
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
                disabled={!isEndpointConfigured}
              />
            </div>
            
            {submissionStatus !== 'idle' && isEndpointConfigured && (
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
              <NeumorphicButton type="submit" padding="py-3 px-8 text-lg" disabled={isSubmitting || !isEndpointConfigured}>
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