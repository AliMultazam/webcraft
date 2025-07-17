<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Settings, Zap, Rocket } from 'lucide-svelte';
	import type { ComponentType } from 'svelte';

	interface ServicePreview {
		icon: ComponentType;
		title: string;
		description: string;
	}

	interface Stat {
		value: string;
		label: string;
	}

	const servicesPreviews: ServicePreview[] = [
		{
			icon: Settings,
			title: 'UI/UX Design',
			description: 'Beautiful, intuitive interfaces that users love to interact with.'
		},
		{
			icon: Zap,
			title: 'Fast Development',
			description: 'Lightning-fast websites optimized for performance and SEO.'
		},
		{
			icon: Rocket,
			title: 'Full-Stack Solutions',
			description: 'Complete web solutions from frontend design to backend development, deployment, and ongoing maintenance.'
		}
	];

	const stats: Stat[] = [
		{ value: '500+', label: 'Projects Done' },
		{ value: '98%', label: 'Client Satisfaction' },
		{ value: '5 Years', label: 'Experience' }
	];
</script>

<svelte:head>
	<title>WebCraft Ali - Crafting Digital Experiences That Convert</title>
	<meta name="description" content="We design and develop stunning websites that drive real business results" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
	<!-- Hero Section -->
	<section class="pt-24 pb-16 px-6">
		<div class="container mx-auto">
			<div class="grid lg:grid-cols-2 gap-12 items-center">
				<!-- Left Content -->
				<div class="space-y-8">
					<div class="space-y-6">
						<h1 class="text-5xl lg:text-6xl font-bold text-white leading-tight">
							Crafting <span class="text-blue-400">Digital Experiences</span>
							<br />
							That Convert
						</h1>

						<p class="text-xl text-gray-300 leading-relaxed">
							We design and develop stunning websites that not only look amazing but drive real
							business results. From concept to launch, we're your digital partners.
						</p>
					</div>

					<div class="flex flex-col sm:flex-row gap-4">
						<Button size="lg" class="bg-blue-600 hover:bg-blue-700">Get Started →</Button>
						<Button
							size="lg"
							variant="outline"
							class="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
						>
							View Our Work 🔗
						</Button>
					</div>

					<!-- Stats -->
					<div class="grid grid-cols-3 gap-8 pt-8">
						{#each stats as stat}
							<div>
								<div class="text-3xl font-bold text-blue-400">{stat.value}</div>
								<div class="text-gray-400">{stat.label}</div>
							</div>
						{/each}
					</div>
				</div>

				<!-- Right Content - Service Preview Cards -->
				<div class="space-y-6">
					{#each servicesPreviews as service}
						<Card class="bg-slate-800/50 border-slate-700">
							<CardContent class="p-6">
								<div class="flex items-start space-x-4">
									<div class="p-3 bg-blue-600/20 rounded-lg">
										<service.icon class="w-6 h-6 text-blue-400" />
									</div>
									<div>
										<h3 class="text-xl font-semibold text-white mb-2">{service.title}</h3>
										<p class="text-gray-400">{service.description}</p>
									</div>
								</div>
							</CardContent>
						</Card>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Our Services Section Preview -->
	<section class="py-16 px-6">
		<div class="container mx-auto text-center">
			<h2 class="text-4xl font-bold text-white mb-4">
				Our <span class="text-blue-400">Services</span>
			</h2>
			<p class="text-gray-300 mb-8">Discover our comprehensive range of digital services</p>
			<a href="/services">
				<Button size="lg" class="bg-blue-600 hover:bg-blue-700">View All Services →</Button>
			</a>
		</div>
	</section>
</div>
