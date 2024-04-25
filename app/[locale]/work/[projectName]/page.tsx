import React from 'react';
import { promises as fs } from 'fs';
import { notFound } from 'next/navigation';
import { ProjectPageInfo } from '@/types/types';
import { Project } from '@/components/pages/project/Project';

interface Params {
	params: {
		projectName: string;
		locale: string;
	};
}

export const ProjectPage = async ({ params: { projectName, locale } }: Params) => {
	const file = await fs.readFile(process.cwd() + `/data/${locale}/project.json`, 'utf8');
	if (!file) notFound();

	const data: { projects: ProjectPageInfo[] } = JSON.parse(file);
	const projects = data.projects;

	const project = projects.find(
		(project) => project.title.toLowerCase() === projectName.toLowerCase()
	);
	if (!project) notFound();

	return <Project projectInfo={project} />;
};

export default ProjectPage;
