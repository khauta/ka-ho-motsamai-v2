import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="h-full bg-surface-container-low border-b border-outline-variant flex justify-between items-center px-4 md:px-6 shadow-sm">
      <div class="flex items-center md:gap-8 gap-3">
        <h1 class="font-display font-bold text-2xl text-primary-container tracking-tight shrink-0">Motsamai</h1>
        <nav class="hidden lg:flex gap-6 items-center h-full">
          <a class="font-body text-primary font-semibold border-b-2 border-primary py-5 cursor-pointer">Home</a>
          <a class="font-body text-on-surface-variant hover:bg-surface-variant transition-colors px-3 py-1.5 rounded cursor-pointer">Video</a>
          <a class="font-body text-on-surface-variant hover:bg-surface-variant transition-colors px-3 py-1.5 rounded cursor-pointer">Tools</a>
          <a class="font-body text-on-surface-variant hover:bg-surface-variant transition-colors px-3 py-1.5 rounded cursor-pointer">Motions</a>
          <a class="font-body text-on-surface-variant hover:bg-surface-variant transition-colors px-3 py-1.5 rounded cursor-pointer">Products</a>
          <a class="font-body text-on-surface-variant hover:bg-surface-variant transition-colors px-3 py-1.5 rounded cursor-pointer">About</a>
        </nav>
      </div>

      <div class="flex items-center gap-3 md:gap-5">
        <div class="hidden lg:flex items-center bg-surface-container-lowest px-4 py-2 rounded-full border border-outline-variant w-64 focus-within:border-primary-container transition-colors">
          <mat-icon class="text-on-surface-variant text-[20px] leading-none shrink-0 mr-2">search</mat-icon>
          <input type="text" placeholder="Search library..." class="bg-transparent border-none focus:ring-0 focus:outline-none text-sm text-on-surface w-full placeholder:text-on-surface-variant/70 font-body">
        </div>
        
        <div class="flex items-center gap-1 md:gap-2">
          <button class="p-2 text-on-surface-variant hover:bg-surface-variant rounded-full transition-colors hidden sm:flex items-center justify-center">
            <mat-icon>help</mat-icon>
          </button>
          <button class="p-2 text-on-surface-variant hover:bg-surface-variant rounded-full transition-colors flex items-center justify-center relative">
            <mat-icon>notifications</mat-icon>
            <span class="absolute top-2 right-2 w-2 h-2 bg-primary-container rounded-full animate-pulse border border-surface"></span>
          </button>
          <div class="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-primary-container overflow-hidden shrink-0 hidden md:block cursor-pointer">
              <img src="https://picsum.photos/seed/marcus/100/100" alt="Avatar" referrerpolicy="no-referrer" class="w-full h-full object-cover">
          </div>
        </div>
        
        <button class="hidden md:block bg-primary-container text-white px-6 py-2 rounded-full font-display font-bold hover:brightness-110 active:scale-95 transition-all text-sm shadow-md">
            Sign In
        </button>
      </div>
    </header>
  `
})
export class Header {}
