## [0.3.0-beta.1](https://github.com/sd1337/adminlte-2-react/compare/v0.2.0...v0.3.0-beta.1) (2023-12-31)

> Migrated from webpack to vite, updated linter, first beta release

## [0.2.0](https://github.com/sd1337/adminlte-2-react/compare/v0.1.31...v0.2.0) (2021-02-05)

> Big leap for the library as it is now typescript, improves type inspection when using the lib, fixed several potential bugs caused my inproper type conversions

### Upgrade Steps
*  

### Breaking Changes
* [`<DateTime>`](/src/components/content/Inputs/DateTime.tsx) `onChange` event passes now a syntethic event instead of the value itself
* [`<Checkbox>`](/src/components/content/Inputs/Checkbox.tsx) `checked` property is now used instead of `value`
* [`<DateTime>`](/src/components/content/Inputs/DateTime.tsx) `id` must be passed as an direct property instead of passing it inside of `dateProp.inputProperty`

### New Features
* Upgraded entire library to typescript
* SmartTable allows now different row select options (`single` | `multiple`)
* SmartTable allows now three different options for passing selected rows `index`, `property`, `object`

### Bug Fixes
* Several internal fixes based on the stricter typing rules from typescript
* 

### Performance Improvements
* 
* 

### Other Changes
* 
* 
