<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Users, Target, Award, Heart } from 'lucide-svelte';
	import type { ComponentType } from 'svelte';

	interface TeamMember {
		name: string;
		role: string;
		image: string;
		bio: string;
	}

	interface Value {
		icon: ComponentType;
		title: string;
		description: string;
	}

	const teamMembers: TeamMember[] = [
		{
			name: 'Ali Rahman',
			role: 'Founder & Lead Developer',
			image: '/placeholder.svg?height=200&width=200',
			bio: 'Full-stack developer with 5+ years of experience in creating digital solutions.'
		},
		{
			name: 'Sarah Johnson',
			role: 'UI/UX Designer',
			image: '/placeholder.svg?height=200&width=200',
			bio: 'Creative designer passionate about creating intuitive user experiences.'
		},
		{
			name: 'Mike Chen',
			role: 'Backend Developer',
			image: '/placeholder.svg?height=200&width=200',
			bio: 'Backend specialist focused on scalable and secure server solutions.'
		}
	];

	const values: Value[] = [
		{
			icon: Users,
			title: 'Client-Focused',
			description: 'We put our clients at the center of everything we do, ensuring their success is our success.'
		},
		{
			icon: Target,
			title: 'Results-Driven',
			description: 'Every project is designed with clear goals and measurable outcomes in mind.'
		},
		{
			icon: Award,
			title: 'Quality First',
			description: 'We never compromise on quality, delivering excellence in every line of code.'
		},
		{
			icon: Heart,
			title: 'Passionate',
			description: 'We love what we do and it shows in the quality of our work and client relationships.'
		}
	];
</script>

<svelte:head>
	<title>About Us - WebCraft Ali</title>
	<meta name="description" content="Learn more about our team and mission" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
	<div class="pt-24 pb-16 px-6">
		<div class="container mx-auto">
			<!-- Header -->
			<div class="text-center mb-16">
				<h1 class="text-5xl font-bold text-white mb-6">
					About <span class="text-blue-400">Us</span>
				</h1>
				<p class="text-xl text-gray-300 max-w-3xl mx-auto">
					We're a passionate team of developers and designers dedicated to crafting exceptional digital experiences that drive real business results.
				</p>
			</div>

			<!-- Our Story -->
			<section class="mb-20">
				<div class="grid lg:grid-cols-2 gap-12 items-center">
					<div>
						<h2 class="text-3xl font-bold text-white mb-6">Our Story</h2>
						<div class="space-y-4 text-gray-300">
							<p>
								Founded in 2019, WebCraft Ali started as a small team with a big vision: to help businesses succeed in the digital world through innovative web solutions.
							</p>
							<p>
								Over the years, we've grown from a one-person operation to a dedicated team of professionals, but we've never lost sight of our core mission - delivering exceptional results for our clients.
							</p>
							<p>
								Today, we're proud to have completed over 500 projects and maintained a 98% client satisfaction rate, working with businesses of all sizes across various industries.
							</p>
						</div>
					</div>
					<div class="bg-slate-800/30 rounded-2xl p-8">
						<img 
							src="/placeholder.svg?height=300&width=400" 
							alt="Our team working"
							class="w-full rounded-lg"
						/>
					</div>
				</div>
			</section>

			<!-- Our Values -->
			<section class="mb-20">
				<div class="text-center mb-12">
					<h2 class="text-3xl font-bold text-white mb-4">Our Values</h2>
					<p class="text-gray-300">The principles that guide everything we do</p>
				</div>
				<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{#each values as value}
						<Card class="bg-slate-800/50 border-slate-700 text-center">
							<CardContent class="p-6">
								<div class="p-3 bg-blue-600/20 rounded-lg w-fit mx-auto mb-4">
									<value.icon class="w-8 h-8 text-blue-400" />
								</div>
								<h3 class="text-xl font-semibold text-white mb-2">{value.title}</h3>
								<p class="text-gray-400">{value.description}</p>
							</CardContent>
						</Card>
					{/each}
				</div>
			</section>

			<!-- Team -->
			<section>
				<div class="text-center mb-12">
					<h2 class="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
					<p class="text-gray-300">The talented people behind WebCraft Ali</p>
				</div>
				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{#each teamMembers as member}
						<Card class="bg-slate-800/50 border-slate-700 text-center">
							<CardContent class="p-6">
								<div class="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-slate-700">
									<img 
										src={member.image || "/placeholder.svg"} 
										alt={member.name}
										class="w-full h-full object-cover"
									/>
								</div>
								<h3 class="text-xl font-semibold text-white mb-1">{member.name}</h3>
								<p class="text-blue-400 mb-3">{member.role}</p>
								<p class="text-gray-400 text-sm">{member.bio}</p>
							</CardContent>
						</Card>
					{/each}
				</div>
			</section>
		</div>
	</div>
</div>
