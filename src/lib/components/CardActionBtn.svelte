<script lang="ts">
	export let text: string;
	export let action: VoidFunction;
</script>

<button on:click={action} class="flex flex-col items-center gap-3">
	<div class="flex items-center justify-center rounded-full bg-white/20 p-3">
		<slot name="icon"></slot>
	</div>
	<span class="text-xs">{text}</span>
</button>
