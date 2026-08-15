import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { formType, ...data } = body;

    // Log the submission to the server console (useful for debugging/testing)
    console.log(`[API Form Submission] Type: ${formType || 'Contact'}`, data);

    /* 
      TODO: Integrate email or notifications service here.
      Example using Resend:
      
      import { Resend } from 'resend';
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: 'Prem Koul Campaign <campaign@premkoul.in>',
        to: 'premkoul20@gmail.com', // Site owner email
        subject: `New ${formType} Submission from ${data.name || data.fullName}`,
        html: `<p>You have a new form submission:</p><pre>${JSON.stringify(data, null, 2)}</pre>`
      });
    */

    return NextResponse.json({
      success: true,
      message: 'Submission received successfully! / आपका संदेश सफलतापूर्व प्राप्त हुआ!',
    });
  } catch (error: unknown) {
    console.error('Error handling form submission:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'There was a problem processing your request. / संदेश भेजने में त्रुटि हुई।',
      },
      { status: 500 }
    );
  }
}
