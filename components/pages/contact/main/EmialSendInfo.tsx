import React from 'react';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
	RadioGroup,
	Radio,
} from '@nextui-org/react';

interface Props {
	isOpen: boolean;
	wasError: boolean;
	lastEmailName: string;
	onOpenChange: () => void;
}

export const EmialSendInfo = ({ isOpen, wasError, lastEmailName, onOpenChange }: Props) => {
	return (
		<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className='flex flex-col gap-1'>
							{wasError ? 'Something went wrong' : 'Email send'}
						</ModalHeader>
						<ModalBody>
							{wasError ? (
								<p>
									There was a problem during sending your message. Please try again or send me your
									message directly on{' '}
									<span className='text-primary-400'>jakubsepetowskipraca@gmail.com</span>
								</p>
							) : (
								<>
									<p>
										Thank you <span className='text-primary-400'>{lastEmailName}</span> for your
										message.
									</p>
									<p>I will contact you as soon as possible!</p>
								</>
							)}
						</ModalBody>
						<ModalFooter>
							<Button color='danger' variant='light' onPress={onClose}>
								Close
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
};
