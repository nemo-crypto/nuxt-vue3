<script setup>
const props = defineProps({
	items: {
		type: Array,
		required: true,
	},
})
</script>

<template>
	<Flex align="center" gap="6" :class="$style.items">
		<Flex v-for="(item, idx) in items" :key="idx" align="center" gap="6" :class="$style.item">
			<NuxtLink :to="idx !== items.length - 1 ? item.link : null">
				<Text class="animate__animated animate__fadeInLeft" size="14" weight="600" :color="idx < items.length - 1 ? 'secondary' : 'primary'">{{ item.name }}</Text>
			</NuxtLink>
			<img class="animate__animated animate__fadeInLeft" v-if="idx < items.length - 1" width="14" height="14" src="/img/breadcrumbsRigth.png" />
		</Flex>
	</Flex>
</template>

<style module>
.items {
	overflow: hidden;
}

.item {
	& a {
		display: flex;
		font-style: italic;

		&:hover {
			& span {
				color: var(--txt-primary);
			}
		}
	}
}
</style>
