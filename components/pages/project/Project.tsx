import { ProjectPageInfo } from '@/types/types';
import React from 'react';
import { Header } from './header/Header';
import { Main } from './main/Main';

interface Props {
	projectInfo: ProjectPageInfo;
}

export const Project = ({ projectInfo }: Props) => {
	return (
		<>
			<Header
				title={projectInfo.title}
				imageLink={projectInfo.imagesLinks}
				overview={projectInfo.overview}
				liveLink={projectInfo.liveLink}
				repoLink={projectInfo.repoLink}
			/>
			<Main projectInfo={projectInfo} />
		</>
	);
};
