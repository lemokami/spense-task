<script lang="ts">
	export let percentage: number = 0;
</script>

<div class="flex h-2 items-center rounded-full bg-white p-1">
	<div class="h-1 rounded-full bg-green-500" style="width: {percentage}%;"></div>
</div>
