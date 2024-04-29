import React from 'react';
import { notFound } from 'next/navigation';
import { Project } from '@/components/pages/project/Project';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { SITE_NAME } from '@/lib/constants';
import { getProject } from '@/lib/api';

interface Params {
	params: {
		projectName: string;
		locale: string;
	};
}

export async function generateMetadata({
	params: { locale, projectName },
}: Params): Promise<Metadata> {
	const [project, t] = await Promise.all([
		getProject(locale, projectName),
		getTranslations({ locale, namespace: 'METADATA.PROJECT' }),
	]);

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
	const project = await getProject(locale, projectName);
	if (!project) notFound();

	return <Project projectInfo={project} />;
};

export default ProjectPage;
