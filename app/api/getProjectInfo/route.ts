import { NextResponse } from 'next/server';
import { Project } from '@/types/types';
import { promises as fs } from 'fs';

export async function GET(request: Request) {
	const url = new URL(request.url);
	const locale = url.searchParams.get('locale');
	const projectName = url.searchParams.get('projectName');

	if (!locale || !projectName) return NextResponse.json('Wrong data', { status: 450 });

	try {
		const file = await fs.readFile(process.cwd() + `/data/${locale}/project.json`, 'utf8');

		if (!file) return NextResponse.json('Not found', { status: 404 });

		const data: { projects: Project[] } = JSON.parse(file);

		const projects = data.projects;

		const project = projects.find(
			(project) => project.title.toLowerCase() === projectName.toLowerCase()
		);

		if (!project) return NextResponse.json('Not found', { status: 404 });

		return NextResponse.json(project, { status: 200 });
	} catch (err) {
		console.log(err);
		return NextResponse.json('server error', { status: 500 });
	}
}
