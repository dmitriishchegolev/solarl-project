import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ads-list-popular',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ads-list-popular.component.html',
  styleUrl: './ads-list-popular.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdsListPopularComponent { }
