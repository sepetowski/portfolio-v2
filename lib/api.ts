import { Project } from '@/types/types';
import { notFound } from 'next/navigation';

export const getProject = async (locale: string, projectName: string) => {
	try {
		const res = await fetch(
			`https://sepetowski.vercel.app/api/getProjectInfo?locale=${locale}&projectName=${projectName}`,
			{
				method: 'GET',
			}
		);

		if (!res.ok) {
			return notFound();
		}
		return res.json() as Promise<Project>;
	} catch (err) {}
};
