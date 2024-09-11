import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ads-card',
  templateUrl: './ads-card.component.html',
  styleUrl: './ads-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdsCardComponent { }
