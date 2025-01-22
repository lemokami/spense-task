<script lang="ts">
	import CreditCard from '$lib/icons/CreditCard.svelte';
	import PiggyBank from '$lib/icons/PiggyBank.svelte';
	import TrendingUp from '$lib/icons/TrendingUp.svelte';

	import NavItem from './NavItem.svelte';
</script>

<nav
	class="fixed bottom-0 flex w-full items-center justify-evenly border-t-2 border-[#F0F0F0] bg-[#f7f7f7] pb-3 pt-2"
>
	<NavItem active subtitle="Card">
		<CreditCard slot="icon" />
	</NavItem>
	<NavItem subtitle="Account">
		<PiggyBank slot="icon" />
	</NavItem>
	<NavItem subtitle="Deposit">
		<TrendingUp slot="icon" />
	</NavItem>
</nav>
