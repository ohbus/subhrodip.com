import { Component, OnInit, signal, OnDestroy, Inject, PLATFORM_ID, computed } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../shared/header/header';
import { FooterComponent } from '../shared/footer/footer';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.html',
  host: {
    'class': 'flex flex-col flex-grow w-full'
  },
  styles: []
})
export class HomeComponent implements OnInit, OnDestroy {
  protected readonly currentText = signal('');
  readonly c;
  private roles;
  
  private phraseIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typeSpeed = 100;
  private timeoutId: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private contentService: ContentService
  ) {
    this.c = this.contentService.c;
    this.roles = computed(() => this.c().common.roles);
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.timeoutId = setTimeout(() => this.type(), 1000);
    }
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  onSearch() {
    this.router.navigate(['/search']);
  }

  onCurious() {
    this.router.navigate(['/sde']);
  }

  private type() {
    const currentRoles = this.roles();
    const currentPhrase = currentRoles[this.phraseIndex % currentRoles.length];

    if (this.isDeleting) {
      this.currentText.set(currentPhrase.substring(0, this.charIndex - 1));
      this.charIndex--;
      this.typeSpeed = 50;
    } else {
      this.currentText.set(currentPhrase.substring(0, this.charIndex + 1));
      this.charIndex++;
      this.typeSpeed = 150;
    }

    if (!this.isDeleting && this.charIndex === currentPhrase.length) {
      this.isDeleting = true;
      this.typeSpeed = 2000;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.phraseIndex++;
      this.typeSpeed = 500;
    }

    this.timeoutId = setTimeout(() => this.type(), this.typeSpeed);
  }
}
