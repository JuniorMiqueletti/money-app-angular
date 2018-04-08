# money-app-angular

This project was generated with [Angular CLI]

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Angular CLI Code scaffolding ( command line interface for Angular )

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Create project
`ng new <project name>`

### Install PrimeNG packages
`npm install primeng --save`
>Option `--save` is to add on pckage.json

### Install fontawesome (primeNG dependecy)
`npm install font-awesome --save`

### Adding currency mask
`npm install ng2-currency-mask --save`

### Create component
`ng g c <componentName>`
`ng g c <moduleName>/<componentName>` selecting module
- `ng generate c <componentName>`
- `ng generate component <componentName>`
- `ng generate component <componentName>`
- `ng generate component <componentName> <options>`

> **OPTIONS**
sample: ` ng g c <componentName> <options>`
* `--spec=false` to do not create test file
* `--inline-template` to do not create separate html file
* `--inline-style` to do not create separate style file

> Exporting components of module
```typescript
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComponentToExport],
  exports: [ComponentToExport]
})
```

### Create module
`ng g m <module_name>`
`ng g module <module_name>`
`ng generate module <module_name>`
