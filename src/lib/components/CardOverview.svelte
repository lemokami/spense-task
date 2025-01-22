<script lang="ts">
	import CardActionBtn from '$lib/components/CardActionBtn.svelte';
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import Bill from '$lib/icons/Bill.svelte';
	import CreditCard from '$lib/icons/CreditCard.svelte';
	import Statements from '$lib/icons/Statements.svelte';
	import { addCurrencyCommas } from '$lib/utils';

	export let accountDetails: any;
	export let cardDetails: { name: string };
</script>

<div class="flex flex-col gap-6 px-4 py-6">
	<div class="flex flex-col gap-4">
		<h3 class="text-xl font-semibold">{cardDetails.name}</h3>

		<div class="flex flex-col gap-2 rounded-xl bg-white/20 p-3">
			<div class="flex items-end justify-between">
				<div class="flex flex-col gap-1">
					<span class="text-xs text-white/70">Outstanding balance</span>
					<span class="text-xl font-semibold">
						₹{addCurrencyCommas(accountDetails.outstanding)}
					</span>
				</div>
				<span class="text-xs text-white/70"
					>Available balance : ₹{addCurrencyCommas(accountDetails.available)}</span
				>
			</div>

			<ProgressBar percentage={80} />
		</div>
	</div>

	<div class="flex items-center justify-evenly gap-6">
		<CardActionBtn action={() => {}} text="Pay bill">
			<Bill slot="icon" />
		</CardActionBtn>
		<CardActionBtn action={() => {}} text="View Card">
			<CreditCard slot="icon" />
		</CardActionBtn>
		<CardActionBtn action={() => {}} text="Statements">
			<Statements slot="icon" />
		</CardActionBtn>
	</div>
</div>
