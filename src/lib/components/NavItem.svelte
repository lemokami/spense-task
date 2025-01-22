<script lang="ts">
	export let subtitle: string;
	export let active = false;
</script>

<div
	class="flex cursor-pointer flex-col items-center font-semibold {active
		? 'text-[#250059]'
		: 'text-[#9E9E9E]'}"
>
	<slot name="icon"></slot>
	<span class="text-xs">
		{subtitle}
	</span>
</div>
