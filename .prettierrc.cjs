module.exports = {
  tabWidth: 2,
  arrowParens: 'avoid',
  semi: true,
  trailingComma: 'none',
  singleQuote: true,
  jsxSingleQuote: true,
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: [
  '^(react|next(.*))$',
  '<THIRD_PARTY_MODULES>',
  '^@/components$',
  '^@/components/(.*)$',
  '^@/(.*)$',
  '^[./]',
  '^(.*)(sass|css|scss)$'
  ],
  importOrderSortSpecifiers: true
};
