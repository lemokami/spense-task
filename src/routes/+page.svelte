<script>
	import Headset from '$lib/icons/Headset.svelte';
	import NotificationBell from '$lib/icons/NotificationBell.svelte';
	import CardOverview from '$lib/components/CardOverview.svelte';
	import TransactionList from '$lib/components/TransactionList.svelte';
	import BottomBar from '$lib/components/BottomBar.svelte';
	import BillingOverview from '$lib/components/BillingOverview.svelte';

	let cardDetails = {
		name: 'Credilio Credit Card'
	};

	let accountDetails = {
		outstanding: 20200,
		available: 2800
	};
</script>

<div class="min-h-screen bg-[#F5F5F5]">
	<header class="bg-[#250059] py-6 text-white">
		<div class="flex items-center justify-between px-2">
			<div class="p-2">
				<div
					class="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#D9D9D9] text-[#666666]/60"
				>
					SS
				</div>
			</div>
			<div class="flex items-center gap-1">
				<div class="p-3">
					<NotificationBell />
				</div>
				<div class="p-3">
					<Headset />
				</div>
			</div>
		</div>

		<CardOverview {accountDetails} {cardDetails} />
	</header>

	<main class="flex flex-col gap-6 px-4 py-6">
		<div class="flex flex-col gap-4">
			<span class="text-sm font-semibold">Billed amount</span>
			<BillingOverview {accountDetails} />
		</div>

		<div class="flex flex-col gap-4 pb-32">
			<span class="text-sm font-semibold">Recent transactions</span>
			<TransactionList />
		</div>
	</main>

	<BottomBar />
</div>
