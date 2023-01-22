import esbuild from "esbuild";

await esbuild.build({
  bundle: true,
  entryPoints: ["src/index.ts"],
  minify: true,
  outfile: "dist/index.js",
  platform: "node",
});
