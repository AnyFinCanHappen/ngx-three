/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { BufferGeometry, Sprite, SpriteMaterial, Vector2 } from 'three';
import { applyValue } from '../util';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-sprite',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThSprite) }]
})
export class ThSprite<TARGS extends any[] = [material?: SpriteMaterial]> extends ThObject3D<TARGS> {
  @Input()
  public objRef!: Sprite;
  protected getType(): Type<Sprite> {
    return Sprite;
  }

  @Input()
  public set type(value: 'Sprite') {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set geometry(value: BufferGeometry) {
    if (this.objRef) {
      this.objRef.geometry = value;
    }
  }

  @Input()
  public set material(value: SpriteMaterial) {
    if (this.objRef) {
      this.objRef.material = value;
    }
  }

  @Input()
  public set center(value: Vector2 | [x: number, y: number]) {
    if (this.objRef) {
      this.objRef.center = applyValue<Vector2>(this.objRef.center, value);
    }
  }
}
