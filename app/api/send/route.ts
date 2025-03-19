import { Resend } from 'resend';
import { ContactEmailTemplate } from '@/components/ContactEmailTemplate';
import { z } from 'zod';

const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate incoming data using Zod
    const parsedData = ContactFormSchema.safeParse({ name, email, subject, message });
    if (!parsedData.success) {
      return new Response(
        JSON.stringify({ error: parsedData.error.errors }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { name: validatedName, email: validatedEmail, subject: validatedSubject, message: validatedMessage } = parsedData.data;

    // NOTE: Make sure the "from" email is verified with Resend.
    const emailResponse = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: validatedSubject || 'New Contact Message',
      react: ContactEmailTemplate({
        name: validatedName,
        email: validatedEmail,
        subject: validatedSubject,
        message: validatedMessage,
      }),
    });

    return new Response(
      JSON.stringify({ success: true, data: emailResponse }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: error.message || 'Something went wrong.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
} 