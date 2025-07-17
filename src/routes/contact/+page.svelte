<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Mail, Phone, MapPin, Clock } from 'lucide-svelte';
	import type { ComponentType } from 'svelte';

	interface ContactInfo {
		icon: ComponentType;
		title: string;
		details: string[];
	}

	interface FormData {
		name: string;
		email: string;
		subject: string;
		message: string;
	}

	let formData: FormData = $state({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	let isSubmitting = $state(false);
	let submitMessage = $state('');

	const contactInfo: ContactInfo[] = [
		{
			icon: Mail,
			title: 'Email',
			details: ['hello@webcraftali.com', 'support@webcraftali.com']
		},
		{
			icon: Phone,
			title: 'Phone',
			details: ['+1 (555) 123-4567', '+1 (555) 987-6543']
		},
		{
			icon: MapPin,
			title: 'Address',
			details: ['123 Tech Street', 'Digital City, DC 12345']
		},
		{
			icon: Clock,
			title: 'Business Hours',
			details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM']
		}
	];

	async function handleSubmit(event: Event) {
		event.preventDefault();
		isSubmitting = true;
		
		// Simulate form submission
		await new Promise(resolve => setTimeout(resolve, 2000));
		
		submitMessage = 'Thank you for your message! We\'ll get back to you soon.';
		isSubmitting = false;
		
		// Reset form
		formData = {
			name: '',
			email: '',
			subject: '',
			message: ''
		};
		
		// Clear message after 5 seconds
		setTimeout(() => {
			submitMessage = '';
		}, 5000);
	}
</script>

<svelte:head>
	<title>Contact Us - WebCraft Ali</title>
	<meta name="description" content="Get in touch with our team" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
	<div class="pt-24 pb-16 px-6">
		<div class="container mx-auto">
			<!-- Header -->
			<div class="text-center mb-16">
				<h1 class="text-5xl font-bold text-white mb-6">
					Contact <span class="text-blue-400">Us</span>
				</h1>
				<p class="text-xl text-gray-300 max-w-3xl mx-auto">
					Ready to start your next project? Get in touch with us today and let's discuss how we can help bring your vision to life.
				</p>
			</div>

			<div class="grid lg:grid-cols-2 gap-12">
				<!-- Contact Form -->
				<Card class="bg-slate-800/50 border-slate-700">
					<CardHeader>
						<CardTitle class="text-white text-2xl">Send us a Message</CardTitle>
					</CardHeader>
					<CardContent>
						<form onsubmit={handleSubmit} class="space-y-6">
							<div class="grid md:grid-cols-2 gap-4">
								<div>
									<label for="name" class="block text-sm font-medium text-gray-300 mb-2">
										Name *
									</label>
									<input
										type="text"
										id="name"
										bind:value={formData.name}
										required
										class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										placeholder="Your name"
									/>
								</div>
								<div>
									<label for="email" class="block text-sm font-medium text-gray-300 mb-2">
										Email *
									</label>
									<input
										type="email"
										id="email"
										bind:value={formData.email}
										required
										class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										placeholder="your@email.com"
									/>
								</div>
							</div>
							
							<div>
								<label for="subject" class="block text-sm font-medium text-gray-300 mb-2">
									Subject *
								</label>
								<input
									type="text"
									id="subject"
									bind:value={formData.subject}
									required
									class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									placeholder="Project inquiry"
								/>
							</div>
							
							<div>
								<label for="message" class="block text-sm font-medium text-gray-300 mb-2">
									Message *
								</label>
								<textarea
									id="message"
									bind:value={formData.message}
									required
									rows="5"
									class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
									placeholder="Tell us about your project..."
								></textarea>
							</div>
							
							<Button 
								type="submit" 
								disabled={isSubmitting}
								class="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
							>
								{isSubmitting ? 'Sending...' : 'Send Message'}
							</Button>
							
							{#if submitMessage}
								<div class="p-4 bg-green-600/20 border border-green-600/30 rounded-lg">
									<p class="text-green-400">{submitMessage}</p>
								</div>
							{/if}
						</form>
					</CardContent>
				</Card>

				<!-- Contact Information -->
				<div class="space-y-8">
					<div>
						<h2 class="text-2xl font-bold text-white mb-6">Get in Touch</h2>
						<p class="text-gray-300 mb-8">
							We'd love to hear from you. Choose the most convenient way to reach out to us.
						</p>
					</div>

					<div class="grid gap-6">
						{#each contactInfo as info}
							<Card class="bg-slate-800/50 border-slate-700">
								<CardContent class="p-6">
									<div class="flex items-start space-x-4">
										<div class="p-3 bg-blue-600/20 rounded-lg">
											<info.icon class="w-6 h-6 text-blue-400" />
										</div>
										<div>
											<h3 class="text-lg font-semibold text-white mb-2">{info.title}</h3>
											{#each info.details as detail}
												<p class="text-gray-400">{detail}</p>
											{/each}
										</div>
									</div>
								</CardContent>
							</Card>
						{/each}
					</div>

					<!-- Map Placeholder -->
					<Card class="bg-slate-800/50 border-slate-700">
						<CardContent class="p-0">
							<div class="aspect-video bg-slate-700 rounded-lg flex items-center justify-center">
								<p class="text-gray-400">Interactive Map Coming Soon</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	</div>
</div>
