import { z } from 'zod';

export const formSchema = z.object({
	name: z.string().min(2, 'Plase provide your name'),
	email: z.string().email('Please provide a valid email'),
	message: z.string().min(10, 'Please provde a message').max(5000, 'Message is to long'),
});

export type FormSchema = z.infer<typeof formSchema>;
