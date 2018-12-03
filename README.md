# adminlte-react
Yet another project based on the great [AdminLTE](https://adminlte.io/) Control Panel Template. This is not because of a not invented here syndrom but because the other projects seem not very active or did not meet the expectations I had in using such a react component. The philosophy for this project was to make it as easy as possible to use from a developer standpoint and rework it where I've seen the use to. Currently it does still depend on jQuery here and there (especially the DataTables Component).

## Installation

`npm i adminlte-react`


## Components

### General UI Type/Coloring options
Several components have a property `type` or `color` that allows the usage of the following values to give different accents to the component

| Type | Color | ColorCode |
| ---- | ----- | --------- |
| `default` | `gray` | `#d2d6de` |
| `primary` | `light-blue` | `#3c8dbc` |
| `info` | `aqua` | `#00c0ef` |
| `success` | `green` | `#00a65a` |
| `warning` | `yellow` | `#f39c12` |
| `danger` | `red` | `#f56954` |

In addition there are several colors available without a corresponding type
| `navy` | 
| `teal` | 
| `purple` | 
| `orange` | 
| `maroon` | 
| `black` | 


### AdminLTE

##### Props

| Name    | Type    | Default | Description |
| --------|---------|---------|-------------|
| children | node |  | NavbarMenu, Sidebar and Content Components belong here |
| title | oneOf: `string`, `[string]` | `['Admin', 'LTE']` | Title in header bar, if an array is supplied the first element will be rendered bold and the second normal |
| titleShort | oneOf: `string`, `[string]` | `['Admin', 'LTE']` | Title in header bar when the sidebar is collapsed, if an array is supplied the first element will be rendered bold and the second normal |
| titleShort | oneOf: `'black-light'`, `'black'`, `'blue'`, `'blue-light'`, `'green'`, `'green-light'`, `'purple'`, `'purple-light'`, `'red'`, `'red-light'`, `'yellow'`, `'yellow-light'` | `'blue'` | Colortheme for AdminLTE |
| browserTitle | string | Untitled | Browsertitle, can be set here globally or for each site indvidually |

### Sidebar

This is the wrapper for the sidebar items, it can be either placed as a child of `AdminLTE` or into the `sidebar` property of `AdminLTE`

##### Props

| Name    | Type    | Default | Description |
| --------|---------|---------|-------------|
| children | oneOf: `<Item />`, `<Header />`, `<li />`|  | Item |

#### Item

##### Props

| Name    | Type    | Default | Description |
| --------|---------|---------|-------------|
| **text** | string |  | Display text of the item |
| children | `<Item />` |  | A nested `Item` will be displayed as a sublevel item and allows for multilevel menus |
| icon | oneOf: `string`, `[string]` | `'far-circle'` | Icon on the left side |
| link | string | `'#'` | Relative links should refere to anonther page components `path` property and absolute links are simple |
| labels | arrayOf: `{small: boolean, color: string, text: string, type:string}`|  | Description for one or more labels |
| color | `string` |  | Iconcolor |
| isSubItem | `boolean` |  | True if its a nested sidebar item, will be set automatically |

#### Header

##### Props

| Name    | Type    | Default | Description |
| --------|---------|---------|-------------|
| **text** | string |  | Display text of the item |

### Navbar

#### Menu

##### Props

| Name    | Type    | Default | Description |
| --------|---------|---------|-------------|
| additionalMenus | node |  | Display text of the item |

#### MenuEntry

#### SimpleItem

#### TaskItem

#### Item

### Content

#### Box

##### Props

| Name    | Type    | Default | Description |
| --------|---------|---------|-------------|
| title | `string` |  | Boxtitle |
| collapsable | `boolean` | `false` | Toggles the possibility to minimize |
| closable | `boolean` | `false` | Toggles the possibility to close a box |
| header | `node` |  | Content to be rendered in the header position of the box |
| footer | `node` |  | Content to be rendered in the footer position of the box |
| footer | `node` |  | Content to be rendered in the footer position of the box |

#### Col

#### Row

#### Alert

#### Badge

#### Button

#### ButtonGroup

#### Calendar

#### Callout

#### Chatbox

#### Checkbox

#### SimpleTable

#### DataTable

#### Description

#### DescriptionBlock

#### DescriptionItem

#### Divider

#### Infobox

#### Infobox2

#### Label

#### LoadingOverlay

#### LoginCore

#### Margin

#### Memberbox

#### NavList

#### NavListItem

#### Pagination

#### ProductList

#### ProductListItem

#### ProgressBar

#### ProgressGroup

#### Sparkbar

#### SparklineBox

#### Tabs

#### TabContent

### Forms

#### Text