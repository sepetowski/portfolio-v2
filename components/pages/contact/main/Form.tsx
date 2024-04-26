'use client';
import React, { useState } from 'react';
import { Button, Input, useDisclosure } from '@nextui-org/react';
import { Textarea } from '@nextui-org/react';
import { Mail } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSchema, formSchema } from '@/schema/formSchema';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { EmialSendInfo } from './EmialSendInfo';
import { useTranslations } from 'next-intl';

export const Form = () => {
	const t = useTranslations('COMPONENTS.CONTACT_FORM');

	const [isSending, setIsSending] = useState(false);
	const [wasError, setWasError] = useState(true);

	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [lastSenderName, setLastSenderName] = useState('');

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormSchema>({
		defaultValues: {
			email: '',
			message: '',
			name: '',
		},
		resolver: zodResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = async (formData) => {
		setIsSending(true);
		setWasError(false);

		try {
			const { status } = await axios.post('/api/sendEmail', formData);
			if (status === 200) console.log('ok');
		} catch (err) {
			console.log(err);
			setWasError(true);
		}

		setIsSending(false);
		setLastSenderName(formData.name);
		reset();
		onOpen();
	};

	return (
		<section className=' flex justify-center items-center flex-col w-full'>
			<form onSubmit={handleSubmit(onSubmit)} className=' mt-10 lg:mt-12 w-full max-w-xl space-y-4'>
				<Input
					label={t('NAME.LABEL')}
					{...register('name')}
					errorMessage={errors.name?.message && t(errors.name?.message)}
					isInvalid={!!errors.name?.message}
				/>
				<Input
					label={t('EMAIL.LABEL')}
					errorMessage={errors.email?.message && t(errors.email?.message)}
					isInvalid={!!errors.email?.message}
					{...register('email')}
				/>
				<Textarea
					label={t('MESSAGE.LABEL')}
					minRows={10}
					errorMessage={errors.message?.message && t(errors.message?.message)}
					isInvalid={!!errors.message?.message}
					{...register('message')}
				/>
				<Button
					isDisabled={isSending}
					isLoading={isSending}
					type='submit'
					className='w-full'
					size='lg'
					color='primary'
					startContent={!isSending ? <Mail size={20} /> : null}>
					{isSending ? t('BUTTON.SENDING') : t('BUTTON.SEND')}
				</Button>
			</form>
			<EmialSendInfo
				wasError={wasError}
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				lastSenderName={lastSenderName}
			/>
		</section>
	);
};
