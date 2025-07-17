<script lang="ts">
	import { page } from '$app/stores';
	import { Settings, Briefcase, User, Mail } from 'lucide-svelte';
	import type { ComponentType } from 'svelte';

	interface NavItem {
		href: string;
		label: string;
		icon: ComponentType;
	}

	const navItems: NavItem[] = [
		{ href: '/services', label: 'Services', icon: Settings },
		{ href: '/portfolio', label: 'Portfolio', icon: Briefcase },
		{ href: '/about', label: 'About', icon: User },
		{ href: '/contact', label: 'Contact', icon: Mail }
	];

	let currentPath = $derived($page.url.pathname);
</script>

<nav class="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
	<div class="container mx-auto px-6 py-4">
		<div class="flex items-center justify-between">
			<a href="/" class="text-2xl font-bold text-white">
				WebCraft Ali
			</a>

			<div class="flex items-center space-x-8">
				{#each navItems as item}
					{@const isActive = currentPath === item.href}
					<a
						href={item.href}
						class="flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors {isActive
							? 'bg-blue-600 text-white'
							: 'text-gray-300 hover:text-white hover:bg-slate-800'}"
					>
						<item.icon size={16} />
						<span>{item.label}</span>
					</a>
				{/each}
			</div>
		</div>
	</div>
</nav>
