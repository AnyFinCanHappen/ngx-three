/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { PlaneBufferGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-planeBufferGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThGeometry,
      useExisting: forwardRef(() => ThPlaneBufferGeometry)
    }
  ]
})
export class ThPlaneBufferGeometry<
  TARGS extends any[] = [width?: number, height?: number, widthSegments?: number, heightSegments?: number]
> extends ThBufferGeometry<TARGS> {
  @Input()
  public objRef!: PlaneBufferGeometry;
  protected getType(): Type<PlaneBufferGeometry> {
    return PlaneBufferGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set parameters(value: { width: number; height: number; widthSegments: number; heightSegments: number }) {
    if (this.objRef) {
      this.objRef.parameters = value;
    }
  }
}
