import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ads-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ads-card.component.html',
  styleUrl: './ads-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdsCardComponent { }
