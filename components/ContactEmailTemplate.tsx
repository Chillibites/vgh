import * as React from 'react';

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<Readonly<ContactEmailTemplateProps>> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div style={{ fontFamily: 'sans-serif' }}>
    <h2>New Contact Message</h2>
    <p>
      <strong>Name:</strong> {name}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Subject:</strong> {subject}
    </p>
    <p>
      <strong>Message:</strong>
    </p>
    <p>{message}</p>
  </div>
); 