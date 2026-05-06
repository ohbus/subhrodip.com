import { Component, OnInit, signal, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../shared/header/header';
import { FooterComponent } from '../shared/footer/footer';

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

  private phrases = [
    "Software Developer",
    "Full Stack Engineer",
    "UI/UX Designer",
    "DevOps and Cloud Computing Consultant"
  ];
  private phraseIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typeSpeed = 100;
  private timeoutId: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

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

  private type() {
    const currentPhrase = this.phrases[this.phraseIndex];

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
      if (this.phraseIndex === this.phrases.length - 1) return;
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
