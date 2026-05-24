import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MOCK_DATA } from '../data';

@Component({
  selector: 'app-hub',
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-[1400px] mx-auto w-full p-4 md:p-6 lg:p-8">
      
      <!-- Featured Hero Banner -->
      <section class="relative rounded-2xl overflow-hidden h-[360px] md:h-[400px] border border-outline-variant mb-12 group">
        <img [src]="data().featured.image" referrerpolicy="no-referrer" alt="Hero Featured" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
        <div class="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
        
        <div class="absolute inset-0 p-6 md:p-10 lg:p-12 flex flex-col justify-end max-w-3xl">
          <div class="bg-primary-container text-white px-2 py-0.5 rounded font-mono text-[11px] font-bold tracking-wider w-fit mb-4">
             {{ data().featured.tag }}
          </div>
          <h2 class="text-3xl md:text-4xl lg:text-[44px] font-display font-bold text-white mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-md">
            {{ data().featured.title }}
          </h2>
          <p class="text-on-surface-variant font-body text-sm md:text-base mb-6 max-w-xl">
            {{ data().featured.description }}
          </p>
          <div class="flex flex-wrap gap-3 md:gap-4">
            <button class="bg-primary-container text-white px-6 md:px-8 py-3 rounded-full font-display font-semibold flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary-container/20">
              <mat-icon [style.font-variation-settings]="'\\'FILL\\' 1'">play_arrow</mat-icon> Listen Now
            </button>
            <button class="glass-panel text-white px-6 md:px-8 py-3 rounded-full font-display font-semibold hover:bg-white/10 transition-colors">
              View Show
            </button>
          </div>
        </div>
        <!-- Ornamental dots -->
        <div class="absolute right-6 bottom-6 md:right-8 md:bottom-8 flex gap-1.5 opacity-80">
          <div class="w-3 h-1.5 bg-primary-container rounded-full"></div>
          <div class="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
          <div class="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
        </div>
      </section>

      <!-- Live Radio -->
      <section class="mb-14">
        <div class="flex justify-between items-end mb-6">
          <div>
            <h3 class="font-display font-semibold text-2xl text-on-surface">Live Radio</h3>
            <p class="font-body text-sm text-on-surface-variant mt-1">Global broadcast stations available 24/7</p>
          </div>
          <button class="text-primary font-display font-medium text-sm flex items-center gap-1 hover:underline">
            View All <mat-icon class="text-sm">arrow_forward</mat-icon>
          </button>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          @for (radio of data().liveRadios; track radio.name) {
            <div class="bg-surface-container-low border border-outline-variant p-4 rounded-[20px] orange-glow-hover transition-all cursor-pointer group flex flex-col gap-4">
              <div class="relative h-32 md:h-36 rounded-xl overflow-hidden bg-surface-container-high">
                <img [src]="radio.image" referrerpolicy="no-referrer" alt="Radio" class="w-full h-full object-cover">
                @if (radio.isLive) {
                  <div class="absolute top-3 left-3 flex items-center gap-1.5 bg-error/90 backdrop-blur text-white px-2 py-0.5 rounded font-mono text-[10px] font-bold">
                    <span class="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> LIVE
                  </div>
                } @else {
                  <div class="absolute top-3 left-3 bg-surface-container-highest/90 backdrop-blur border border-outline-variant text-on-surface-variant px-2 py-0.5 rounded font-mono text-[10px] font-bold">
                    {{ radio.schedule }}
                  </div>
                }
                <!-- Play overlay -->
                <div class="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div class="w-12 h-12 bg-primary-container rounded-full text-white flex items-center justify-center scale-90 group-hover:scale-100 transition-transform">
                     <mat-icon [style.font-variation-settings]="'\\'FILL\\' 1'">play_arrow</mat-icon>
                  </div>
                </div>
              </div>
              <div class="flex items-start justify-between">
                <div class="pr-3">
                  <h4 class="font-display font-semibold text-on-surface text-[15px] truncate">{{ radio.name }}</h4>
                  <p class="font-body text-xs text-on-surface-variant mt-0.5 truncate">{{ radio.sub }}</p>
                </div>
                <!-- Equalizer icon standing in for live stats -->
                <mat-icon class="text-primary-container opacity-80 mt-0.5 shrink-0">equalizer</mat-icon>
              </div>
            </div>
          }
        </div>
      </section>

      <!-- Top Podcasts -->
      <section class="mb-14">
        <h3 class="font-display font-semibold text-2xl text-on-surface mb-1">Top Podcasts</h3>
        <p class="font-body text-sm text-on-surface-variant mb-6">Trending shows this week across all genres</p>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <!-- Main Card -->
          <div class="lg:col-span-2 bg-surface-container-highest rounded-2xl overflow-hidden flex flex-col sm:flex-row border border-outline-variant hover:border-primary-container/40 transition-colors cursor-pointer group">
             <div class="w-full sm:w-1/2 md:w-5/12 h-48 sm:h-auto overflow-hidden relative">
               <img [src]="data().topPodcasts.featured.image" referrerpolicy="no-referrer" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Featured Podcast">
             </div>
             <div class="w-full sm:w-1/2 md:w-7/12 p-6 md:p-8 flex flex-col justify-center">
               <div class="flex items-center gap-1.5 text-primary-container mb-3">
                 <mat-icon class="text-[18px] leading-none shrink-0" style="width: 18px; height: 18px">trending_up</mat-icon>
                 <span class="font-mono text-xs font-semibold">{{ data().topPodcasts.featured.tag }}</span>
               </div>
               <h4 class="font-display font-bold text-2xl md:text-3xl text-on-surface mb-3">{{ data().topPodcasts.featured.title }}</h4>
               <p class="font-body text-sm text-on-surface-variant mb-6 leading-relaxed line-clamp-3">
                 {{ data().topPodcasts.featured.description }}
               </p>
               <div class="flex items-center gap-4 mt-auto">
                 <button class="bg-primary-container text-white px-6 py-2.5 rounded-full font-display font-semibold flex items-center gap-2 hover:brightness-110 transition-all text-sm">
                   <mat-icon [style.font-variation-settings]="'\\'FILL\\' 1'" class="text-[20px] leading-none" style="width: 20px; height: 20px">play_circle</mat-icon> Listen
                 </button>
                 <span class="text-on-surface-variant font-body text-sm">{{ data().topPodcasts.featured.episodes }} Episodes</span>
               </div>
             </div>
          </div>
          
          <!-- Secondary List -->
          <div class="flex flex-col gap-2">
            @for (pod of data().topPodcasts.list; track pod.name) {
              <div class="bg-surface-container-low rounded-xl border border-outline-variant p-3 flex items-center gap-4 hover:bg-surface-container-highest transition-colors cursor-pointer group">
                <div class="w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-surface">
                  <img [src]="pod.image" referrerpolicy="no-referrer" alt="Podcast thumbnail" class="w-full h-full object-cover">
                </div>
                <div class="flex-1 min-w-0">
                  <h5 class="font-display font-semibold text-on-surface group-hover:text-primary-container transition-colors truncate">{{ pod.name }}</h5>
                  <p class="font-body text-xs text-on-surface-variant mt-0.5 truncate">{{ pod.host }}</p>
                </div>
                <button class="text-on-surface-variant group-hover:text-primary-container transition-colors shrink-0">
                   <mat-icon>add_circle</mat-icon>
                </button>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Local Originals (Horizontal Overflow) -->
      <section>
        <h3 class="font-display font-semibold text-2xl text-on-surface mb-6">Local Originals</h3>
        <div class="flex gap-5 overflow-x-auto pb-4 snap-x pr-4">
          @for (item of data().localOriginals; track item.name) {
            <div class="flex-shrink-0 w-60 snap-start group cursor-pointer">
              <div class="aspect-square rounded-[20px] bg-surface-container overflow-hidden border border-outline-variant mb-4 relative orange-glow-hover transition-all">
                <img [src]="item.image" referrerpolicy="no-referrer" alt="Original" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <div class="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors"></div>
              </div>
              <h4 class="font-display font-semibold text-on-surface text-base truncate">{{ item.name }}</h4>
              <p class="font-body text-sm text-on-surface-variant mt-0.5 mb-3 truncate">{{ item.host }}</p>
              <button class="text-primary-container font-mono text-xs font-bold flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                LISTEN NOW <mat-icon class="text-[16px] leading-none" style="width: 16px; height: 16px">play_arrow</mat-icon>
              </button>
            </div>
          }
        </div>
      </section>
      
    </div>
  `
})
export class Hub {
  data = computed(() => MOCK_DATA.hub);
}
