<script lang="ts">
	import Bill from '$lib/icons/Bill.svelte';
	import Calendar from '$lib/icons/Calendar.svelte';
	import ChevronRight from '$lib/icons/ChevronRight.svelte';
	import { addCurrencyCommas } from '$lib/utils';

	export let accountDetails: any;
</script>

<div class="flex flex-col overflow-hidden rounded-lg">
	<div class="flex flex-col gap-8 bg-white p-3">
		<div class="flex flex-col gap-2">
			<div class="flex items-center justify-between gap-2.5">
				<span class="text-xl font-semibold text-[#212121]"
					>₹{addCurrencyCommas(accountDetails.outstanding)}</span
				>
				<div
					class="gap-[1px] rounded bg-[#EBECEF] px-2 py-[4.5px] text-xs tracking-tight text-[#212121]"
				>
					Due on : 10th Aug 23
				</div>
			</div>

			<div class="flex items-center gap-1 text-[#666666]">
				<Calendar />
				<span class="text-xs">14th, June 23 - 14th July 23</span>
			</div>
		</div>

		<div class="flex items-center gap-2.5">
			<button
				class="flex-1 rounded-lg border border-[#6F43C0] py-1.5 text-sm font-semibold text-[#6F43C0]"
			>
				View Statement
			</button>
			<button
				class="flex-1 rounded-lg border border-[#6F43C0] bg-[#6F43C0] py-1.5 text-sm font-semibold text-white"
			>
				Pay Bill
			</button>
		</div>
	</div>
	<div class="flex items-center gap-2 border-t border-[#F0F0F0] bg-white px-3 py-4">
		<div class="rounded-full bg-[#EBECEF66]/40 p-1.5 text-[#212121]">
			<Bill />
		</div>
		<div class="flex flex-1 flex-col gap-[1px]">
			<span class="text-xs font-semibold text-[#212121]">Unbilled transactions</span>
			<span class="text-xs text-[#666666]">14th, July 23 - present </span>
		</div>

		<div class="flex items-center gap-4">
			<span class="text-sm font-semibold">₹0</span>
			<ChevronRight />
		</div>
	</div>
</div>
