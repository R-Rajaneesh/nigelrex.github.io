import NextMDX from "@next/mdx";
const isProd = process.env.NODE_ENV === "production";
const withMDX = NextMDX({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	},
});
export default {
	webpack5: true,
	webpack: (config) => {
		config.resolve.fallback = {
			fs: false,
			path: false,
			stream: false,
			constants: false,
		};

		return config;
	},
	withMDX: withMDX({
		// Append the default value with md extensions
		pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
	}),
	assetPrefix: "",
};
