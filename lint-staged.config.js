module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint'],
  '**/*.ts?(x)': () => 'npm run build-types',
  '*.{json,js,jsx,mjs,ts,tsx}': ['prettier --write'],
}
