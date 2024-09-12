import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ads-list-new',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ads-list-new.component.html',
  styleUrl: './ads-list-new.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdsListNewComponent { }
