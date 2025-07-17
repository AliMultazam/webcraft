<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { ExternalLink, Github } from 'lucide-svelte';

	interface Project {
		id: number;
		title: string;
		description: string;
		image: string;
		technologies: string[];
		liveUrl?: string;
		githubUrl?: string;
		category: 'web' | 'mobile' | 'ecommerce' | 'design';
	}

	const projects: Project[] = [
		{
			id: 1,
			title: 'E-Commerce Platform',
			description: 'Modern e-commerce solution with payment integration and admin dashboard.',
			image: '/placeholder.svg?height=200&width=300',
			technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
			liveUrl: 'https://example.com',
			githubUrl: 'https://github.com',
			category: 'ecommerce'
		},
		{
			id: 2,
			title: 'Mobile Banking App',
			description: 'Secure mobile banking application with biometric authentication.',
			image: '/placeholder.svg?height=200&width=300',
			technologies: ['React Native', 'TypeScript', 'Firebase'],
			liveUrl: 'https://example.com',
			category: 'mobile'
		},
		{
			id: 3,
			title: 'Corporate Website',
			description: 'Professional corporate website with CMS integration.',
			image: '/placeholder.svg?height=200&width=300',
			technologies: ['SvelteKit', 'TypeScript', 'Sanity CMS'],
			liveUrl: 'https://example.com',
			githubUrl: 'https://github.com',
			category: 'web'
		}
	];

	let selectedCategory: string = $state('all');
	let filteredProjects = $derived(
		selectedCategory === 'all' 
			? projects 
			: projects.filter(project => project.category === selectedCategory)
	);

	const categories = [
		{ value: 'all', label: 'All Projects' },
		{ value: 'web', label: 'Web Development' },
		{ value: 'mobile', label: 'Mobile Apps' },
		{ value: 'ecommerce', label: 'E-Commerce' },
		{ value: 'design', label: 'UI/UX Design' }
	];
</script>

<svelte:head>
	<title>Portfolio - WebCraft Ali</title>
	<meta name="description" content="Our amazing portfolio of projects" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
	<div class="pt-24 pb-16 px-6">
		<div class="container mx-auto">
			<!-- Header -->
			<div class="text-center mb-16">
				<h1 class="text-5xl font-bold text-white mb-6">
					Our <span class="text-blue-400">Portfolio</span>
				</h1>
				<p class="text-xl text-gray-300 max-w-3xl mx-auto">
					Explore our collection of successful projects and see how we've helped businesses achieve their digital goals.
				</p>
			</div>

			<!-- Filter Buttons -->
			<div class="flex flex-wrap justify-center gap-4 mb-12">
				{#each categories as category}
					<Button
						variant={selectedCategory === category.value ? 'default' : 'outline'}
						class={selectedCategory === category.value 
							? 'bg-blue-600 hover:bg-blue-700' 
							: 'border-gray-600 text-white hover:bg-gray-800 bg-transparent'}
						onclick={() => selectedCategory = category.value}
					>
						{category.label}
					</Button>
				{/each}
			</div>

			<!-- Projects Grid -->
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each filteredProjects as project}
					<Card class="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 overflow-hidden">
						<div class="aspect-video bg-slate-700 relative overflow-hidden">
							<img 
								src={project.image || "/placeholder.svg"} 
								alt={project.title}
								class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
							/>
						</div>
						<CardHeader>
							<CardTitle class="text-white">{project.title}</CardTitle>
						</CardHeader>
						<CardContent>
							<p class="text-gray-300 mb-4">{project.description}</p>
							
							<!-- Technologies -->
							<div class="flex flex-wrap gap-2 mb-4">
								{#each project.technologies as tech}
									<span class="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full">
										{tech}
									</span>
								{/each}
							</div>

							<!-- Action Buttons -->
							<div class="flex gap-2">
								{#if project.liveUrl}
									<Button size="sm" class="bg-blue-600 hover:bg-blue-700 flex-1">
										<ExternalLink size={16} class="mr-2" />
										Live Demo
									</Button>
								{/if}
								{#if project.githubUrl}
									<Button size="sm" variant="outline" class="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
										<Github size={16} />
									</Button>
								{/if}
							</div>
						</CardContent>
					</Card>
				{/each}
			</div>

			{#if filteredProjects.length === 0}
				<div class="text-center py-12">
					<p class="text-gray-400 text-lg">No projects found in this category.</p>
				</div>
			{/if}
		</div>
	</div>
</div>
