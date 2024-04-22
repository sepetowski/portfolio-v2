import { NextResponse } from 'next/server';
import emailjs from '@emailjs/nodejs';
import { formSchema } from '@/schema/formSchema';

const service = process.env.SERVICE_ID!;
const template = process.env.TEMPLATE_ID!;
const publicKey = process.env.PUBLIC_KEY!;
const privateKey = process.env.PRIVATE_KEY!;

export async function POST(request: Request) {
	const body: unknown = await request.json();
	const result = formSchema.safeParse(body);

	if (!result.success) {
		return NextResponse.json('wrong data', { status: 450 });
	}

	try {
		await emailjs.send(service, template, result.data, {
			publicKey,
			privateKey,
		});
		return NextResponse.json('OK', { status: 200 });
	} catch (err) {
		console.log(err);
		return NextResponse.json('server error', { status: 500 });
	}
}
