import { Project as IProject } from '@/types/types';
import React from 'react';
import { Header } from './header/Header';
import { Main } from './main/Main';

interface Props {
	projectInfo: IProject;
}

export const Project = ({ projectInfo }: Props) => {
	return (
		<>
			<Header
				title={projectInfo.title}
				darkThemeImagesLinks={projectInfo.darkThemeImagesLinks}
				lightThemeImagesLinks={projectInfo.lightThemeImagesLinks}
				overview={projectInfo.overview}
				liveLink={projectInfo.liveLink}
				repoLink={projectInfo.repoLink}
			/>
			<Main projectInfo={projectInfo} />
		</>
	);
};
