import React from 'react';
import { notFound } from 'next/navigation';
import { Project } from '@/components/pages/project/Project';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { SITE_NAME } from '@/lib/constants';
import { promises as fs } from 'fs';
import { Project as IProject } from '@/types/types';

interface Params {
	params: {
		projectName: string;
		locale: string;
	};
}

export async function generateMetadata({
	params: { locale, projectName },
}: Params): Promise<Metadata> {
	const [file, t] = await Promise.all([
		fs.readFile(process.cwd() + `/app/data/${locale}/project.json`, 'utf8'),
		getTranslations({ locale, namespace: 'METADATA.PROJECT' }),
	]);

	const data: { projects: IProject[] } = JSON.parse(file);

	const projects = data.projects;

	const project = projects.find(
		(project) => project.title.toLowerCase() === projectName.toLowerCase()
	);

	if (!project)
		return {
			title: t('NOT_FOUND'),
			description: t('DESCRIPTION'),
		};

	return {
		title: `${SITE_NAME} - ${project.title}`,
		description: project.shortDescription,
	};
}

const ProjectPage = async ({ params: { projectName, locale } }: Params) => {
	const file = await fs.readFile(process.cwd() + `/app/data/${locale}/project.json`, 'utf8');
	const data: { projects: IProject[] } = JSON.parse(file);

	const projects = data.projects;

	const project = projects.find(
		(project) => project.title.toLowerCase() === projectName.toLowerCase()
	);

	if (!project) notFound();

	return <Project projectInfo={project} />;
};

export default ProjectPage;
