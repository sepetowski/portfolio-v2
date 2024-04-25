import { z } from 'zod';

export const formSchema = z.object({
	name: z.string().min(2, 'NAME.ERROR_MESSAGE_NO_NAME').max(30, 'NAME.ERROR_MESSAGE_TOO_LONG'),
	email: z.string().email('EMAIL.ERROR_MESSAGE_NO_EMAIL').max(50, 'EMAIL.ERROR_MESSAGE_TOO_LONG'),
	message: z
		.string()
		.min(10, 'MESSAGE.ERROR_MESSAGE_NO_MESSAGE')
		.max(5000, 'MESSAGE.ERROR_MESSAGE_TOO_LONG'),
});

export type FormSchema = z.infer<typeof formSchema>;
