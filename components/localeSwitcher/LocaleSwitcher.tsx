'use client';
import React, { useCallback, useEffect, useState, useTransition } from 'react';
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Button,
	Spinner,
} from '@nextui-org/react';
import { usePathname, useRouter } from '@/navigation';
import { useLocale } from 'next-intl';

export const LocaleSwitcher = () => {
	const locale = useLocale();

	const [selectedKeys, setSelectedKeys] = useState(new Set(['en']));
	const [isPending, startTransition] = useTransition();

	const router = useRouter();
	const pathname = usePathname();

	const onSelectChange = useCallback(
		(nextLocale: 'pl' | 'en') => {
			startTransition(() => {
				router.replace(pathname, { locale: nextLocale });
			});
		},
		[pathname, router]
	);
	useEffect(() => {
		setSelectedKeys(new Set([locale]));
	}, [locale]);

	return (
		<Dropdown
			classNames={{
				content:
					'py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black',
			}}
			isDisabled={isPending}
			placement='bottom-end'>
			<DropdownTrigger>
				<Button className='cursor-pointer' variant='light' size='sm' isIconOnly>
					{isPending ? <Spinner size='sm' /> : locale.toUpperCase()}
				</Button>
			</DropdownTrigger>
			<DropdownMenu
				aria-label='Single selection example'
				disallowEmptySelection
				variant='flat'
				selectedKeys={selectedKeys}
				selectionMode='single'>
				<DropdownItem onClick={() => onSelectChange('en')} key='en'>
					English
				</DropdownItem>
				<DropdownItem onClick={() => onSelectChange('pl')} key='pl'>
					Polski
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
};
