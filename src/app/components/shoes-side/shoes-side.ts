import { Component, inject } from '@angular/core';
import { ColorService } from '../../services/color-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-shoes-side',
  imports: [],
  templateUrl: './shoes-side.html',
  styleUrl: './shoes-side.css',
})
export class ShoesSide {
  private colorService = inject(ColorService);

  color = toSignal(this.colorService.color$);
}
