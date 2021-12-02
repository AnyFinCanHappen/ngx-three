# NgxThree [![npm version](https://badge.fury.io/js/ngx-three.svg)](https://badge.fury.io/js/ngx-three) ![Build](https://github.com/demike/ngx-three/actions/workflows/.github/workflows/ci-cd.yml/badge.svg)

NgxThree wraps [three.js](https://threejs.org/) in Angular components.
It allows to render 3d Scenes in a declarative way.

it uses code generation to be able to provide as much functionality from three js.
This approach makes it possible to follow three.js updates with minimal effort.

The project is inspired by the great [react three fiber](https://github.com/pmndrs/react-three-fiber) library.

Check out some [examples](https://demike.github.io/ngx-three/)

!!! WORK IN PROGRESS !!!
# Installation

```
npm install ngx-three
```

In addition to ngx-three you have to install it's peer dependencies
Angular ([setup howto](https://angular.io/guide/setup-local)), three.js and its typings
```
npm install three
npm install @types/three"
```

You can use npm to get the exact peer dependency versions for ngx-three
```
npm info ngx-three peerDependencies
```

## Event Handling

### Mouse Events
ngx-three supports the following mouse/pointer events:
- onClick
- onMouseEnter 
- onMouseExit

All of them return a [RaycasterEmitEvent](./projects/ngx-three/src/lib/events/raycaster.events.directive.ts#L7)

### Object 3D Events
Everty `th-object3d` element emits property changes.
you can listen to it like this:
```
<th-object3d (onUpdate)="doSomething($event)></th-object3d>
```
[Events Example](https://demike.github.io/ngx-three/events-example) 

## Caching Models

to enable loader caching you can use three.js' built in [cache](https://threejs.org/docs/#api/en/loaders/Cache):

```typescript
THREE.Cache.enabled = true;
```
