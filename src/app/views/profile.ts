import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MOCK_DATA } from '../data';

@Component({
  selector: 'app-profile',
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-[1400px] mx-auto w-full p-4 md:p-6 lg:p-8 flex flex-col gap-6 md:gap-8 lg:gap-10">

      <!-- Profile Header Grid -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
        
        <!-- Main Identity Panel -->
        <div class="lg:col-span-8 glass-panel rounded-[24px] p-6 md:p-8 lg:p-10 flex flex-col sm:flex-row gap-6 md:gap-8 items-center sm:items-start relative overflow-hidden group">
          <!-- Decorative Background Icon -->
          <mat-icon class="absolute top-0 right-0 text-[120px] md:text-[180px] w-auto h-auto opacity-5 text-white/50 -mt-10 -mr-10 select-none pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">auto_awesome</mat-icon>
          
          <div class="relative shrink-0">
            <div class="w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full border-[3px] border-primary-container p-1 bg-surface shadow-xl">
              <img [src]="data().user.avatar" referrerpolicy="no-referrer" alt="User Profile" class="w-full h-full object-cover rounded-full">
            </div>
            <button class="absolute bottom-1 md:bottom-2 right-1 md:right-2 bg-primary-container text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform border border-surface">
              <mat-icon class="text-xl">edit</mat-icon>
            </button>
          </div>

          <div class="flex-1 text-center sm:text-left z-10 flex flex-col h-full justify-center">
            <div class="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4 mb-3">
              <h1 class="font-display font-bold text-3xl md:text-4xl lg:text-[44px] text-on-surface tracking-tight">{{ data().user.name }}</h1>
              <span class="bg-primary-container/10 border border-primary-container/30 text-primary-container px-3 py-1 rounded-full font-mono text-[11px] font-bold inline-block self-center sm:self-auto uppercase tracking-wider backdrop-blur-sm">
                Pro Member
              </span>
            </div>
            <p class="text-on-surface-variant font-body text-sm md:text-base mb-6 md:mb-8 max-w-xl leading-relaxed">
              {{ data().user.role }}
            </p>
            
            <div class="grid grid-cols-3 gap-4 md:gap-8 pt-6 border-t border-outline-variant/50 mt-auto">
              <div>
                <p class="text-primary-container font-display font-bold text-2xl md:text-3xl lg:text-4xl leading-none mb-1 md:mb-2">{{ data().user.stats.saved }}</p>
                <p class="text-on-surface-variant font-body text-xs md:text-sm font-medium">Saved Content</p>
              </div>
              <div>
                <p class="text-primary-container font-display font-bold text-2xl md:text-3xl lg:text-4xl leading-none mb-1 md:mb-2">{{ data().user.stats.watched }}</p>
                <p class="text-on-surface-variant font-body text-xs md:text-sm font-medium">Minutes Watched</p>
              </div>
              <div>
                <p class="text-primary-container font-display font-bold text-2xl md:text-3xl lg:text-4xl leading-none mb-1 md:mb-2">{{ data().user.stats.collections }}</p>
                <p class="text-on-surface-variant font-body text-xs md:text-sm font-medium">Collections</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar Actions -->
        <div class="lg:col-span-4 flex flex-col gap-5 lg:gap-6">
          <div class="flex-1 glass-panel rounded-[20px] p-6 lg:p-8 flex flex-col justify-between border-primary-container/30 bg-primary-container/5 relative overflow-hidden group">
            <div class="absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent pointer-events-none"></div>
            <div class="flex justify-between items-start z-10 mb-4">
              <div class="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary-container">
                 <mat-icon class="text-3xl" [style.font-variation-settings]="'\\'FILL\\' 1'">bolt</mat-icon>
              </div>
              <button class="text-primary-container font-body text-sm font-bold flex items-center gap-1 hover:underline">
                Upgrade <mat-icon class="text-[16px] leading-none" style="width: 16px; height: 16px">arrow_forward</mat-icon>
              </button>
            </div>
            <div class="z-10 mt-auto">
              <h3 class="font-display font-bold text-[22px] text-on-surface mb-2 tracking-tight">Motsamai Prime</h3>
              <p class="text-on-surface-variant font-body text-sm leading-relaxed">Unlock 4K exports, unlimited drops, and exclusive motion templates.</p>
            </div>
          </div>
          
          <div class="glass-panel rounded-[20px] p-6 border border-outline-variant hover:border-primary-container/50 transition-all cursor-pointer group">
            <div class="flex items-center gap-5">
              <div class="w-14 h-14 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-white group-hover:scale-105 transition-all shadow-md">
                <mat-icon>cloud_download</mat-icon>
              </div>
              <div>
                <h3 class="font-display font-bold text-lg text-on-surface mb-0.5">Offline Library</h3>
                <p class="text-on-surface-variant font-body text-sm">12.4 GB available offline</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Recently Played -->
      <section>
        <div class="flex justify-between items-end mb-6">
          <div>
            <h2 class="font-display font-bold text-[28px] md:text-[32px] text-on-surface tracking-tight mb-1">Recently Played</h2>
            <p class="text-on-surface-variant font-body text-sm md:text-base">Continue where you left off</p>
          </div>
          <button class="text-primary font-body text-sm font-bold flex items-center gap-1 hover:underline shrink-0">
            View All <mat-icon class="text-[16px] leading-none" style="width: 16px; height: 16px">chevron_right</mat-icon>
          </button>
        </div>
        
        <div class="flex overflow-x-auto gap-4 md:gap-5 pb-6 snap-x -mx-4 px-4 md:mx-0 md:px-0">
          @for (item of data().recentlyPlayed; track item.name) {
            <div class="flex-shrink-0 w-[240px] md:w-[260px] lg:w-[280px] snap-start group cursor-pointer">
              <div class="aspect-[16/10] rounded-xl overflow-hidden relative border border-outline-variant orange-glow-hover transition-all mb-4 bg-surface-container">
                <img [src]="item.image" referrerpolicy="no-referrer" alt="Content" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                
                <div class="absolute inset-0 bg-background/50 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <div class="w-14 h-14 rounded-full bg-primary-container text-white flex items-center justify-center scale-90 group-hover:scale-100 transition-transform shadow-lg">
                    <mat-icon class="text-[32px]" [style.font-variation-settings]="'\\'FILL\\' 1'">play_arrow</mat-icon>
                  </div>
                </div>
                
                <div class="absolute bottom-0 left-0 right-0 h-1.5 bg-background border-t border-outline-variant overflow-hidden">
                  <div class="h-full bg-primary-container rounded-r-full" [style.width.%]="item.progress"></div>
                </div>
              </div>
              <h4 class="font-display font-semibold text-lg text-on-surface truncate mb-1">{{ item.name }}</h4>
              <p class="text-on-surface-variant font-body text-xs md:text-sm truncate">{{ item.sub }}</p>
            </div>
          }
        </div>
      </section>

      <!-- Two-Column Grid: Playlists & Shows -->
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <!-- My Playlists -->
        <div class="glass-panel rounded-[24px] p-6 md:p-8">
          <div class="flex justify-between items-center mb-8">
            <h3 class="font-display font-bold text-2xl md:text-[28px] text-on-surface tracking-tight">My Playlists</h3>
            <button class="bg-surface-container-highest p-2.5 rounded-xl hover:bg-primary-container text-on-surface hover:text-white transition-all">
              <mat-icon>add</mat-icon>
            </button>
          </div>
          
          <div class="flex flex-col gap-3">
            @for (playlist of data().playlists; track playlist.name) {
              <div class="flex items-center gap-5 p-3 rounded-2xl hover:bg-surface-variant/40 transition-colors cursor-pointer group border border-transparent hover:border-outline-variant/30">
                <div class="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden bg-surface-container shrink-0 border border-outline-variant/50 shadow-sm relative">
                  <img [src]="playlist.image" referrerpolicy="no-referrer" alt="Playlist" class="w-full h-full object-cover">
                  <div class="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div class="flex-1 min-w-0">
                  <h4 class="font-display font-bold text-lg md:text-xl text-on-surface mb-1 truncate">{{ playlist.name }}</h4>
                  <p class="text-on-surface-variant font-body text-xs md:text-sm truncate">{{ playlist.sub }}</p>
                </div>
                <button class="text-on-surface-variant md:opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-surface-container-highest rounded-full">
                  <mat-icon>more_vert</mat-icon>
                </button>
              </div>
            }
          </div>
        </div>

        <!-- Subscribed Shows -->
        <div class="glass-panel rounded-[24px] p-6 md:p-8">
          <div class="flex justify-between items-center mb-8">
            <h3 class="font-display font-bold text-2xl md:text-[28px] text-on-surface tracking-tight">Subscribed Shows</h3>
            <button class="text-on-surface-variant hover:text-primary-container transition-colors p-2 rounded-full hover:bg-surface-variant/40">
              <mat-icon>settings</mat-icon>
            </button>
          </div>
          
          <div class="grid grid-cols-2 gap-4 md:gap-6">
            @for (show of data().shows; track show.name) {
               <div class="group cursor-pointer">
                <div class="aspect-[3/4] rounded-2xl overflow-hidden relative mb-4 border border-outline-variant bg-surface-container">
                  <img [src]="show.image" referrerpolicy="no-referrer" alt="Show" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                  @if (show.isNew) {
                    <div class="absolute top-3 right-3 w-3 h-3 rounded-full bg-primary-container shadow-[0_0_12px_rgba(255,122,0,0.8)] border-2 border-surface"></div>
                  }
                  <div class="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h4 class="font-body font-bold text-base md:text-lg text-on-surface mb-1 truncate">{{ show.name }}</h4>
                <p class="text-on-surface-variant font-body text-xs md:text-sm truncate">{{ show.sub }}</p>
              </div>
            }
          </div>
        </div>
      </section>
      
      <!-- Downloads (Horizontal) -->
      <section class="pb-6">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container shrink-0">
             <mat-icon [style.font-variation-settings]="'\\'FILL\\' 1'">download_done</mat-icon>
          </div>
          <h2 class="font-display font-bold text-[28px] text-on-surface tracking-tight">Downloads</h2>
        </div>
        
        <div class="flex overflow-x-auto gap-4 md:gap-5 pb-4 snap-x -mx-4 px-4 md:mx-0 md:px-0">
          @for (dl of data().downloads; track dl.name) {
            <div class="flex-shrink-0 w-44 md:w-48 group">
              <div class="aspect-square rounded-2xl bg-surface-container-high border border-outline-variant mb-4 flex flex-col items-center justify-center relative overflow-hidden transition-all group-hover:border-primary-container/50">
                 <!-- Icon background -->
                 <mat-icon class="text-5xl md:text-6xl text-on-surface-variant/30 group-hover:text-primary-container/20 transition-colors" [style.transform]="'scale(2)'">{{ dl.icon }}</mat-icon>
                 
                 <!-- Checkmark -->
                 <div class="absolute bottom-3 right-3 bg-surface/80 backdrop-blur-sm rounded-lg p-1.5 shadow border border-outline-variant">
                   <mat-icon class="text-[18px] text-primary-container leading-none" style="width: 18px; height: 18px" [style.font-variation-settings]="'\\'FILL\\' 1'">check_circle</mat-icon>
                 </div>
              </div>
              <h4 class="font-body font-bold text-sm md:text-base text-on-surface truncate">{{ dl.name }}</h4>
              <p class="text-on-surface-variant font-body text-xs mt-1">{{ dl.sub }}</p>
            </div>
          }
          
          <div class="flex-shrink-0 w-44 md:w-48">
            <button class="w-full aspect-square rounded-2xl border-2 border-dashed border-outline-variant hover:border-primary-container hover:bg-primary-container/5 transition-all flex flex-col items-center justify-center gap-3 group">
               <div class="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant group-hover:bg-primary-container group-hover:text-white transition-colors">
                 <mat-icon>add</mat-icon>
               </div>
               <span class="font-body text-sm font-medium text-on-surface-variant group-hover:text-primary-container">Download more</span>
            </button>
          </div>
        </div>
      </section>
      
    </div>
  `
})
export class Profile {
  data = computed(() => MOCK_DATA.profile);
}
