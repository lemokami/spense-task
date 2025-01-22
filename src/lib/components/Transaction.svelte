<script lang="ts">
	import { addCurrencyCommas } from '$lib/utils';

	export let amount: number;
	export let label: string;
	export let date: Date | string;

	$: value = (amount < 0 ? '-' : '+') + addCurrencyCommas(amount);
</script>

<div class="px-3 py-2.5">
	<div class="flex items-start gap-3">
		<div
			class="flex items-center justify-center rounded-full border border-[#1C1B1F1A] bg-[#FAFAFA] p-2"
		>
			<slot name="category-icon"></slot>
		</div>

		<div class="flex flex-1 flex-col gap-1.5">
			<span class="text-sm text-[#1C1B1FCC]/80">{label}</span>
			<span class="text-xs text-[#1C1B1F99]/60">{date}</span>
		</div>

		<span class="text-sm font-semibold">{value}</span>
	</div>
</div>
