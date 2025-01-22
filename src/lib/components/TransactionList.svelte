<script>
	import ChevronRight from '$lib/icons/ChevronRight.svelte';
	import FormatListBulleted from '$lib/icons/FormatListBulleted.svelte';
	import ShoppingBag from '$lib/icons/ShoppingBag.svelte';

	import Transaction from './Transaction.svelte';
</script>

<div class="flex flex-col overflow-hidden rounded-lg">
	<div class="flex flex-col bg-white pt-4">
		<Transaction label="Flipkart Payment, Bangalore" amount={-1364} date="14/01/2023">
			<ShoppingBag slot="category-icon" />
		</Transaction>
		<Transaction label="Flipkart Payment, Bangalore" amount={-1364} date="14/01/2023">
			<ShoppingBag slot="category-icon" />
		</Transaction>
		<Transaction label="Flipkart Payment, Bangalore" amount={-1364} date="14/01/2023">
			<ShoppingBag slot="category-icon" />
		</Transaction>
		<div class="border-0.5 border-[#F0F0F0]"></div>
	</div>

	<div class="flex items-center gap-2 border-t border-[#F0F0F0] bg-white px-3 py-4">
		<div class="rounded-full p-1.5 text-[#212121]">
			<FormatListBulleted />
		</div>
		<span class="flex-1 text-xs font-semibold">All transactions</span>

		<ChevronRight />
	</div>
</div>
