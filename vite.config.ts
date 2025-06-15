// ... existing code ...
export default defineConfig({
  plugins: [react()],
  base: './', // Add this line
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
