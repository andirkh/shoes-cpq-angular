import { Component, inject } from '@angular/core';
import { ColorService } from '../../services/color-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-shoes-back',
  imports: [],
  templateUrl: './shoes-back.html',
  styleUrl: './shoes-back.css'
})
export class ShoesBack {
  private colorService = inject(ColorService);

  color = toSignal(this.colorService.color$);
}
