import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { ShoesSide } from '../../components/shoes-side/shoes-side';
import { ShoesBack } from '../../components/shoes-back/shoes-back';
import { ShoesBottom } from '../../components/shoes-bottom/shoes-bottom';
import { ColorService, ShoeColor } from '../../services/color-service';
import { COLOR_DEFAULT, CUSTOMIZE_FORM } from '../../constants/constants';
import { NgStyle } from '@angular/common';
import { JaCurrencyPipe } from '../../pipes/ja-currency-pipe';

@Component({
  selector: 'app-home-page',
  imports: [ShoesSide, ShoesBack, ShoesBottom, NgStyle, JaCurrencyPipe],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  formList = CUSTOMIZE_FORM;

  private colorService = inject(ColorService);

  color = toSignal(this.colorService.color$);

  isShowQuotation = signal<boolean>(false);

  remainingItem = computed(
    () => Object.values(this.color() || {}).filter((item) => item !== COLOR_DEFAULT).length
  );

  itemCount = this.colorService.stateCount;

  itemBasePrice = 4500;

  itemCustomPrice = 100;

  discount = 0.25;

  totalPrice = computed(() => this.remainingItem() * this.itemCustomPrice + this.itemBasePrice);

  discountPrice = computed(() => this.totalPrice() * this.discount);

  finalPrice = computed(() => this.totalPrice() - this.discountPrice());

  onColorChange(event: Event): void {
    const selectedValue = (event.target as HTMLInputElement).value;
    const selectedName = (event.target as HTMLInputElement).name;
    if (selectedValue) {
      this.colorService.updateColor(selectedName as keyof ShoeColor, selectedValue);
    }
  }

  showQuotation() {
    this.isShowQuotation.set(true);
  }
}
