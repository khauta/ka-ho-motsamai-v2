import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Header } from './ui/header';
import { Sidebar } from './ui/sidebar';
import { MobileNav } from './ui/mobile-nav';
import { MiniPlayer } from './ui/mini-player';
import { Hub } from './views/hub';
import { Profile } from './views/profile';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [Header, Sidebar, MobileNav, Hub, Profile, MiniPlayer],
  template: `
    <div class="h-screen w-screen flex flex-col bg-surface text-on-surface font-body overflow-hidden selection:bg-primary-container selection:text-white">
      <!-- Fixed Header -->
      <app-header class="z-50 shrink-0 h-[72px]" />
      
      <!-- Main Layout Body -->
      <div class="flex flex-1 overflow-hidden relative z-0">
        <!-- Desktop Sidebar -->
        <app-sidebar class="hidden md:flex w-[240px] shrink-0 z-40 border-r border-outline-variant/30" 
                     [active]="currentView()" 
                     (navigate)="currentView.set($event)" />
        
        <!-- Scrollable Content Outlet -->
        <main class="flex-1 overflow-y-auto overflow-x-hidden bg-background relative z-0">
          <div class="pb-[110px] md:pb-32">
            @if (currentView() === 'hub') {
              <app-hub />
            } @else {
              <app-profile />
            }
          </div>
        </main>
      </div>

      <!-- Floating Mini Player -->
      <app-mini-player class="fixed bottom-[88px] md:bottom-8 right-4 md:right-8 left-4 md:left-auto md:w-[420px] z-[60]" />

      <!-- Mobile Bottom Nav -->
      <app-mobile-nav class="md:hidden fixed bottom-0 left-0 w-full z-[70]" 
                      [active]="currentView()" 
                      (navigate)="currentView.set($event)" />
    </div>
  `
})
export class App {
  readonly currentView = signal<'hub' | 'profile'>('hub');
}
