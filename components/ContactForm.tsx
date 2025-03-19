"use client";
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  // Simple email format validation
  function validateEmail(email: string) {
    return /^\S+@\S+\.\S+$/.test(email);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    // Client-side validation
    if (!data.name) {
      toast.error('Please enter your name.');
      setLoading(false);
      return;
    }
    if (!data.email) {
      toast.error('Please enter your email.');
      setLoading(false);
      return;
    } else if (!validateEmail(String(data.email))) {
      toast.error('Please enter a valid email address.');
      setLoading(false);
      return;
    }
    if (!data.subject) {
      toast.error('Please enter a subject.');
      setLoading(false);
      return;
    }
    if (!data.message) {
      toast.error('Please enter your message.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message.');
      }

      toast.success('Message sent successfully!');
      form.reset();
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-xl">
      <form className="space-y-6" noValidate onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
          ></textarea>
        </div>
        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
} 