import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ads-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ads-list.component.html',
  styleUrl: './ads-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdsListComponent { }
