// Ambient declarations for style imports.
// Next.js compiles CSS side-effect imports (e.g. `import "./globals.css"`),
// but under `moduleResolution: bundler` the TS server has no type for them,
// which surfaces as TS2882 in the editor. These declarations silence it.
declare module "*.css";
declare module "*.scss";
