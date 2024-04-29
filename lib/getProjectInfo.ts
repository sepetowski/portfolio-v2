import { Project } from '@/types/types';
import { promises as fs } from 'fs';
import path from 'path';

export const getProjectInfo = async (projectName: string, locale: string) => {
	try {
		const jsonPath = path.join(process.cwd(), 'data', locale, 'project.json');
		console.log(jsonPath);
		const file = await fs.readFile(jsonPath, 'utf8');
		if (!file) return null;

		const data: { projects: Project[] } = JSON.parse(file);
		const projects = data.projects;

		const project = projects.find(
			(project) => project.title.toLowerCase() === projectName.toLowerCase()
		);

		return project ? project : null;
	} catch (err) {
		return null;
	}
};
