<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import {
		Settings,
		Zap,
		Rocket,
		Smartphone,
		ShoppingCart,
		Search,
		Palette,
		Code,
		Database
	} from 'lucide-svelte';
	import type { ComponentType } from 'svelte';

	interface Service {
		icon: ComponentType;
		title: string;
		description: string;
		features: string[];
	}

	const services: Service[] = [
		{
			icon: Settings,
			title: 'UI/UX Design',
			description:
				'Beautiful, intuitive interfaces that users love to interact with. We focus on user experience and conversion optimization.',
			features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
		},
		{
			icon: Zap,
			title: 'Fast Development',
			description:
				'Lightning-fast websites optimized for performance and SEO. Built with modern technologies and best practices.',
			features: ['React/Next.js', 'Performance Optimization', 'SEO Ready', 'Mobile First']
		},
		{
			icon: Rocket,
			title: 'Full-Stack Solutions',
			description:
				'Complete web solutions from frontend design to backend development, deployment, and ongoing maintenance.',
			features: ['Frontend Development', 'Backend APIs', 'Database Design', 'Cloud Deployment']
		},
		{
			icon: Smartphone,
			title: 'Mobile Development',
			description:
				'Native and cross-platform mobile applications that deliver exceptional user experiences on all devices.',
			features: ['iOS Development', 'Android Development', 'React Native', 'Flutter']
		},
		{
			icon: ShoppingCart,
			title: 'E-Commerce Solutions',
			description:
				'Complete online store solutions with payment integration, inventory management, and analytics.',
			features: ['Online Stores', 'Payment Integration', 'Inventory Management', 'Analytics']
		},
		{
			icon: Search,
			title: 'SEO Optimization',
			description:
				'Improve your search engine rankings and drive more organic traffic to your website.',
			features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Content Strategy']
		},
		{
			icon: Palette,
			title: 'Brand Identity',
			description:
				'Create a strong brand identity that resonates with your target audience and stands out from competitors.',
			features: ['Logo Design', 'Brand Guidelines', 'Color Palette', 'Typography']
		},
		{
			icon: Code,
			title: 'Custom Development',
			description:
				'Tailored software solutions built specifically for your business needs and requirements.',
			features: ['Custom Applications', 'API Development', 'Third-party Integrations', 'Maintenance']
		},
		{
			icon: Database,
			title: 'Data Solutions',
			description:
				'Database design, data migration, and analytics solutions to help you make data-driven decisions.',
			features: ['Database Design', 'Data Migration', 'Analytics Setup', 'Reporting']
		}
	];
</script>

<svelte:head>
	<title>Our Services - WebCraft Ali</title>
	<meta name="description" content="Comprehensive digital solutions for your business" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
	<div class="pt-24 pb-16 px-6">
		<div class="container mx-auto">
			<!-- Header -->
			<div class="text-center mb-16">
				<h1 class="text-5xl font-bold text-white mb-6">
					Our <span class="text-blue-400">Services</span>
				</h1>
				<p class="text-xl text-gray-300 max-w-3xl mx-auto">
					We offer comprehensive digital solutions to help your business grow and succeed in the
					digital landscape. From design to development, we've got you covered.
				</p>
			</div>

			<!-- Services Grid -->
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
				{#each services as service, index}
					<Card class="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
						<CardHeader>
							<div class="flex items-center space-x-4 mb-4">
								<div class="p-3 bg-blue-600/20 rounded-lg">
									<service.icon class="w-6 h-6 text-blue-400" />
								</div>
								<CardTitle class="text-white">{service.title}</CardTitle>
							</div>
						</CardHeader>
						<CardContent>
							<p class="text-gray-300 mb-4">{service.description}</p>
							<ul class="space-y-2">
								{#each service.features as feature}
									<li class="text-gray-400 text-sm flex items-center">
										<div class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
										{feature}
									</li>
								{/each}
							</ul>
						</CardContent>
					</Card>
				{/each}
			</div>

			<!-- CTA Section -->
			<div class="text-center bg-slate-800/30 rounded-2xl p-12">
				<h2 class="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
				<p class="text-gray-300 mb-8 max-w-2xl mx-auto">
					Let's discuss your project and see how we can help you achieve your digital goals. Contact
					us today for a free consultation.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<Button size="lg" class="bg-blue-600 hover:bg-blue-700">Start Your Project →</Button>
					<Button
						size="lg"
						variant="outline"
						class="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
					>
						Schedule a Call
					</Button>
				</div>
			</div>
		</div>
	</div>
</div>
