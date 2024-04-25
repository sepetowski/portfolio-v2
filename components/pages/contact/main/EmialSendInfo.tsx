import React from 'react';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
} from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import { MY_EMAIL } from '@/lib/constants';

interface Props {
	isOpen: boolean;
	wasError: boolean;
	lastSenderName: string;
	onOpenChange: () => void;
}

export const EmialSendInfo = ({ isOpen, wasError, lastSenderName, onOpenChange }: Props) => {
	const t = useTranslations('COMPONENTS.EMAIL_SEND_MODAL');
	return (
		<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className='flex flex-col gap-1'>
							{wasError ? t('ERROR.TITLE') : t('SEND.TITLE')}
						</ModalHeader>
						<ModalBody>
							{wasError ? (
								<p>
									{t('ERROR.MESSAGE')} <span className='text-primary-400'>{MY_EMAIL}</span>
								</p>
							) : (
								<>
									<p>
										{t('SEND.MESSAGE.FIRST')}{' '}
										<span className='text-primary-400'>{lastSenderName}</span>{' '}
										{t('SEND.MESSAGE.SECOND')}
									</p>
									<p>{t('SEND.MESSAGE.THIRD')}</p>
								</>
							)}
						</ModalBody>
						<ModalFooter>
							<Button color='danger' variant='light' onPress={onClose}>
								{t('BUTTON')}
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
};
