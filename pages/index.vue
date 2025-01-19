<script setup>
/** Components */
import Widgets from "@/components/widgets/Widgets.vue"
import RecentNamespacesTable from "@/components/data/RecentNamespacesTable.vue"
import LatestPFBTable from "@/components/data/LatestPFBTable.vue"
import BlocksTimelineTable from "@/components/data/BlocksTimeline/BlocksTimelineTable.vue"

/** API */
import { fetchLatestBlocks } from "@/services/api/block"

/** Services */
import { parseRedirectQueryError } from "@/services/notifications"

/** Store */
import { useAppStore } from "@/store/app"
const appStore = useAppStore()

const route = useRoute()
const router = useRouter()

definePageMeta({
	layout: "default",
})

useHead({
	title: "Nubit Explorer",
	link: [
		{
			rel: "canonical",
			href: "https://www.explorer.nubit.org/",
		},
	],
	meta: [
		{
			name: "description",
			content:
				"Secured by Bitcoin, backed by Polychain. Enabling unlimited innovations with the most secure and scalable data availability layer.",
		},
		{
			name: "keywords",
			content:
				"Nubit, Bitcoin, Data Availability, Data Availability Layer, DA, Data Layer, Secured by Bitcoin, Polychain, Bitcoin DA, BTC DA, Scalable Blockchain, Secure Blockchain, Blockchain Innovation, Bitcoin Security, Data Infrastructure, Cryptocurrency, Blockchain Technology, Bitcoin Ecosystem, Data Scalability,  Blockchain Development, Polychain Capital",
		},
		{
			property: "og:title",
			content: "Nubit Explorer",
		},
		{
			property: "og:description",
			content:
				"Secured by Bitcoin, backed by Polychain. Enabling unlimited innovations with the most secure and scalable data availability layer.",
		},
		{
			property: "og:url",
			content: `https://www.explorer.nubit.org/`,
		},
		{
			property: "og:image",
			content: "/img/seo/main.png",
		},
		{
			name: "twitter:title",
			content: "Nubit Explorer",
		},
		{
			name: "twitter:description",
			content:
				"Secured by Bitcoin, backed by Polychain. Enabling unlimited innovations with the most secure and scalable data availability layer.",
		},
		{
			name: "twitter:image",
			content: "https://www.explorer.nubit.org/img/seo/main.png",
		},
	],
})

onBeforeMount(async () => {
	if (Object.keys(route.query).length && route.query.error) {
		parseRedirectQueryError(route.query)
		router.replace({ query: null })
	}

	const data = await fetchLatestBlocks({ limit: 15 })
	appStore.latestBlocks = data
	appStore.isLatestBlocksLoaded = true
})
</script>

<template>
	<Flex direction="column" wide :class="$style.wrapper">
		<Flex direction="column" gap="40" :class="$style.main">
			<Flex gap="20" :class="$style.small_tables">
				<LatestPFBTable />

				<RecentNamespacesTable />
			</Flex>

			<BlocksTimelineTable v-if="appStore.lastHead && appStore.latestBlocks.length" />
		</Flex>
	</Flex>
</template>

<style module>
.wrapper {
	max-width: calc(var(--base-width) + 48px);

	padding: 0 24px;
	margin-bottom: 120px;
}

.widgets {
	margin-top: 38px;
}

.main {
	margin-top: 38px;
}

.mainTitle {
	font-family: "Space Grotesk";
	font-weight: 600;
	font-size: 14px;
	color: #ffffff;
	line-height: 20px;
	text-align: left;
	font-style: normal;
	text-transform: none;
	margin-bottom: -25px;
}

@media (max-width: 1024px) {
	.small_tables {
		flex-direction: column;
	}
}

@media (max-width: 500px) {
	.widgets {
		margin-top: 24px;
	}

	.wrapper {
		padding: 0 12px;
	}
}
</style>
