import { Injectable } from '@angular/core';
import { COLOR_DEFAULT } from '../constants/constants';
import { BehaviorSubject } from 'rxjs';

export interface ShoeColor {
  toeCapColor: string;
  secondToeCapColor: string;
  midSoleColor: string;
  tongueColor: string;
  innerColor: string;
  upperSideColor: string;
  backTabColor: string;
  upperLiningColor: string;
  quarterColor: string;
  upperTopColor: string;
  wovenColor: string;
  outSoleColor: string;
  stitchingColor: string;
}

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  private readonly initialState: ShoeColor = {
    toeCapColor: COLOR_DEFAULT,
    secondToeCapColor: COLOR_DEFAULT,
    midSoleColor: COLOR_DEFAULT,
    tongueColor: COLOR_DEFAULT,
    innerColor: COLOR_DEFAULT,
    upperSideColor: COLOR_DEFAULT,
    backTabColor: COLOR_DEFAULT,
    upperLiningColor: COLOR_DEFAULT,
    quarterColor: COLOR_DEFAULT,
    upperTopColor: COLOR_DEFAULT,
    wovenColor: COLOR_DEFAULT,
    outSoleColor: COLOR_DEFAULT,

    stitchingColor: COLOR_DEFAULT,
  };

  private readonly colorSubject = new BehaviorSubject<ShoeColor>(this.initialState);

  public readonly color$ = this.colorSubject.asObservable();

  public readonly stateCount = Object.keys(this.initialState).length;

  updateColor(colorKey: keyof ShoeColor, newColor: string) {
    const currentColors = this.colorSubject.getValue();

    const updatedColor = {
      ...currentColors,
      [colorKey]: newColor
    }

    this.colorSubject.next(updatedColor)
  }
}
