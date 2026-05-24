import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <aside class="h-full bg-surface border-r border-outline-variant flex flex-col py-6 gap-6 overflow-y-auto">
      <div class="px-6 flex items-center gap-3 shrink-0">
        <div class="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary-container/20">
          <mat-icon [style.font-variation-settings]="'\\'FILL\\' 1'">radio</mat-icon>
        </div>
        <div>
          <p class="font-display font-semibold text-on-surface leading-tight">Motsamai</p>
          <p class="font-body text-xs text-on-surface-variant">Media Platform</p>
        </div>
      </div>

      <nav class="flex flex-col gap-1 px-2 flex-1">
        <!-- Main Dashboard View Toggle -->
        <button (click)="navigate.emit('hub')" 
                class="flex items-center gap-4 px-4 py-3 rounded-lg transition-all text-left group"
                [class.bg-secondary-container]="active() === 'hub'"
                [class.text-on-secondary-container]="active() === 'hub'"
                [class.border-l-4]="active() === 'hub'"
                [class.border-primary-container]="active() === 'hub'"
                [class.rounded-l-none]="active() === 'hub'"
                [class.text-on-surface-variant]="active() !== 'hub'"
                [class.hover.bg-surface-container-highest]="active() !== 'hub'">
          <mat-icon [style.font-variation-settings]="active() === 'hub' ? '\\'FILL\\' 1' : '\\'FILL\\' 0'">home</mat-icon>
          <span class="font-body font-medium">Home</span>
        </button>
        
        <button class="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all text-left">
          <mat-icon>explore</mat-icon>
          <span class="font-body font-medium">Explores</span>
        </button>

        <button class="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all text-left">
          <mat-icon>reorder</mat-icon>
          <span class="font-body font-medium">Drops</span>
        </button>
        
        <button class="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all text-left">
          <mat-icon>description</mat-icon>
          <span class="font-body font-medium">Documents</span>
        </button>

        <!-- Profile/Library View Toggle -->
        <button (click)="navigate.emit('profile')" 
                class="flex items-center gap-4 px-4 py-3 rounded-lg transition-all text-left group"
                [class.bg-secondary-container]="active() === 'profile'"
                [class.text-on-secondary-container]="active() === 'profile'"
                [class.border-l-4]="active() === 'profile'"
                [class.border-primary-container]="active() === 'profile'"
                [class.rounded-l-none]="active() === 'profile'"
                [class.text-on-surface-variant]="active() !== 'profile'"
                [class.hover.bg-surface-container-highest]="active() !== 'profile'">
          <mat-icon [style.font-variation-settings]="active() === 'profile' ? '\\'FILL\\' 1' : '\\'FILL\\' 0'">person</mat-icon>
          <span class="font-body font-medium">Profile</span>
        </button>
        
        <button class="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all text-left">
          <mat-icon>settings</mat-icon>
          <span class="font-body font-medium">Settings</span>
        </button>
      </nav>

      <div class="px-2 mt-auto border-t border-outline-variant pt-4 flex flex-col gap-1 shrink-0">
        <button class="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all text-left">
          <mat-icon>help</mat-icon>
          <span class="font-body font-medium">Support</span>
        </button>
        <button class="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all text-left">
          <mat-icon>monitor</mat-icon>
          <span class="font-body font-medium">Display</span>
        </button>
      </div>
    </aside>
  `
})
export class Sidebar {
  active = input.required<'hub' | 'profile'>();
  navigate = output<'hub' | 'profile'>();
}
