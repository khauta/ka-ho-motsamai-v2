import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-mobile-nav',
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="h-[72px] bg-surface-container-highest/90 backdrop-blur-md border-t border-outline-variant flex justify-around items-center px-4 rounded-t-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
      <button (click)="navigate.emit('hub')" 
              class="flex flex-col items-center justify-center p-2 rounded-xl transition-all w-16"
              [class.text-primary-container]="active() === 'hub'"
              [class.text-on-surface-variant]="active() !== 'hub'">
        <mat-icon [style.font-variation-settings]="active() === 'hub' ? '\\'FILL\\' 1' : '\\'FILL\\' 0'">home</mat-icon>
        <span class="font-body text-[10px] mt-1 font-medium">Home</span>
      </button>

      <button class="flex flex-col items-center justify-center p-2 rounded-xl text-on-surface-variant w-16">
        <mat-icon>explore</mat-icon>
        <span class="font-body text-[10px] mt-1 font-medium">Explore</span>
      </button>

      <button class="flex flex-col items-center justify-center p-2 rounded-xl text-on-surface-variant w-16">
        <mat-icon>reorder</mat-icon>
        <span class="font-body text-[10px] mt-1 font-medium">Drops</span>
      </button>

      <button (click)="navigate.emit('profile')" 
              class="flex flex-col items-center justify-center p-2 rounded-xl transition-all w-16"
              [class.text-primary-container]="active() === 'profile'"
              [class.text-on-surface-variant]="active() !== 'profile'">
        <mat-icon [style.font-variation-settings]="active() === 'profile' ? '\\'FILL\\' 1' : '\\'FILL\\' 0'">person</mat-icon>
        <span class="font-body text-[10px] mt-1 font-medium">Profile</span>
      </button>
    </nav>
  `
})
export class MobileNav {
  active = input.required<'hub' | 'profile'>();
  navigate = output<'hub' | 'profile'>();
}
