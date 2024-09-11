import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  public breadcrumbs: any[] = [];

  constructor(private ac: ActivatedRoute, private router: Router, private cdr: ChangeDetectorRef) {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      this.breadcrumbs = [];
      this.setBreadCrumbs(this.ac.children[0]);
      this.cdr.detectChanges();
    })
  }

  private setBreadCrumbs(route: ActivatedRoute, path: string = '') {
    if (route.routeConfig && route.routeConfig.title) {
      path = `${path}/${route.routeConfig.path}`;
      if ((route.snapshot.params as any).id) {
        path = `${path}/${(route.snapshot.params as any).id}`;
      }

      this.breadcrumbs.push({
        label: route.routeConfig.title,
        path
      })
    }
    if (route.children.length) {
      this.setBreadCrumbs(route.children[0], path)
    }
  }
}
