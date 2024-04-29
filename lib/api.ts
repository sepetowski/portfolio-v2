import { Project } from '@/types/types';
import { notFound } from 'next/navigation';

export const domain =
	process.env.NODE_ENV === 'production' ? 'https://sepetowski.vercel.app' : 'http://localhost:3000';

export const getProject = async (locale: string, projectName: string) => {
	try {
		const res = await fetch(
			`http://localhost:3000/api/getProjectInfo?locale=${locale}&projectName=${projectName}`,
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
