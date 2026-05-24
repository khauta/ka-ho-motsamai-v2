import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-mini-player',
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="glass-panel p-3 md:p-4 rounded-xl md:rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-4 group relative overflow-hidden border border-outline-variant/50">
      <div class="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-outline-variant/30 relative">
        <img src="https://picsum.photos/seed/pod_main/100/100" referrerpolicy="no-referrer" alt="Thumbnail" class="w-full h-full object-cover">
        <!-- Progress bar line -->
        <div class="absolute bottom-0 left-0 w-full h-[3px] bg-background">
           <div class="h-full bg-primary-container w-[35%]"></div>
        </div>
      </div>
      
      <div class="flex-1 overflow-hidden min-w-0">
        <p class="font-display font-semibold text-sm text-on-surface truncate leading-tight">Architecture of Mind</p>
        <p class="font-body text-xs text-on-surface-variant truncate mt-0.5">S1 E12: Spatial Realities</p>
      </div>

      <div class="flex items-center gap-1 md:gap-2 shrink-0">
        <button class="p-1 md:p-2 text-on-surface-variant hover:text-primary-container transition-colors shrink-0">
          <mat-icon>skip_previous</mat-icon>
        </button>
        <button class="w-10 h-10 bg-primary-container text-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-lg shrink-0">
          <mat-icon [style.font-variation-settings]="'\\'FILL\\' 1'">pause</mat-icon>
        </button>
        <button class="p-1 md:p-2 text-on-surface-variant hover:text-primary-container transition-colors shrink-0">
          <mat-icon>skip_next</mat-icon>
        </button>
      </div>
    </div>
  `
})
export class MiniPlayer {}
