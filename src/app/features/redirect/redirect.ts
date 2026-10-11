import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { REDIRECT_MAP } from '../../data/redirects';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-redirect',
  standalone: true,
  template: `
    <div class="flex flex-col items-center justify-center min-h-[60vh]">
      <div class="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
      <p class="text-on-surface-variant font-body-snippet">Redirecting...</p>
    </div>
  `,
  styles: []
})
export class RedirectComponent implements OnDestroy, OnInit {
  private redirectTimer: ReturnType<typeof setTimeout> | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    
    if (slug && REDIRECT_MAP[slug]) {
      // Small delay to show the "Redirecting" UI for a smoother transition
      this.redirectTimer = setTimeout(() => {
        this.document.location!.replace(REDIRECT_MAP[slug]);
      }, 500);
    } else {
      // Fallback to home if slug not found
      this.router.navigate(['/']);
    }
  }

  ngOnDestroy() {
    if (this.redirectTimer) {
      clearTimeout(this.redirectTimer);
    }
  }
}
