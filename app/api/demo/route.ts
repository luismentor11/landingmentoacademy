import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  // TODO: wire to Firebase Firestore or Resend/Nodemailer
  // For now: log the lead and return 200
  console.log('[demo-lead]', body);

  return NextResponse.json({ ok: true });
}
