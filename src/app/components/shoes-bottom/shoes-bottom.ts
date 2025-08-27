import { Component, inject } from '@angular/core';
import { ColorService } from '../../services/color-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-shoes-bottom',
  imports: [],
  templateUrl: './shoes-bottom.html',
  styleUrl: './shoes-bottom.css'
})
export class ShoesBottom {
  private colorService = inject(ColorService);

  color = toSignal(this.colorService.color$);
}
