export const MOCK_DATA = {
    hub: {
        featured: {
            tag: 'EXCLUSIVES',
            title: 'The Future of Sound: Motsamai Originals',
            description: 'Dive into the minds of visionaries. Our flagship series explores the intersection of design, technology, and human experience.',
            image: 'https://picsum.photos/seed/motsamai1/1200/800'
        },
        liveRadios: [
            { name: 'Urban Beats FM', sub: 'Techno & House • 12k listening', image: 'https://picsum.photos/seed/radio1/400/300', isLive: true },
            { name: 'Global News Daily', sub: 'Politics & Economics', image: 'https://picsum.photos/seed/radio2/400/300', isLive: true },
            { name: 'Ambient Horizon', sub: 'Lofi & Meditation', schedule: 'STARTS AT 20:00', image: 'https://picsum.photos/seed/radio3/400/300', isLive: false },
            { name: 'Tech Talk Radio', sub: 'Innovation & Future', image: 'https://picsum.photos/seed/radio4/400/300', isLive: true }
        ],
        topPodcasts: {
            featured: {
                title: 'Architecture of Mind',
                tag: '#1 TRENDING',
                episodes: 45,
                description: 'Explore the cognitive science behind spatial design and how our environments shape our reality.',
                image: 'https://picsum.photos/seed/pod_main/600/800'
            },
            list: [
                { name: 'Design Matters', host: 'Debbie Millman', image: 'https://picsum.photos/seed/pod1/200/200' },
                { name: 'Mindscape', host: 'Sean Carroll', image: 'https://picsum.photos/seed/pod2/200/200' },
                { name: 'Sound Exploder', host: 'Hrishikesh Hirway', image: 'https://picsum.photos/seed/pod3/200/200' },
                { name: 'The Daily', host: 'NY Times', image: 'https://picsum.photos/seed/pod4/200/200' }
            ]
        },
        localOriginals: [
            { name: 'Creatives Collective', host: 'By Motsamai Media', image: 'https://picsum.photos/seed/orig1/400/400' },
            { name: 'City Pulse', host: 'Local News & Events', image: 'https://picsum.photos/seed/orig2/400/400' },
            { name: 'Tech Frontiers', host: 'Silicon Valley Updates', image: 'https://picsum.photos/seed/orig3/400/400' },
            { name: 'Canvas Talks', host: 'Art & Culture', image: 'https://picsum.photos/seed/orig4/400/400' }
        ]
    },
    profile: {
        user: {
            name: 'Marcus Holloway',
            role: 'Visual Storyteller & Motion Designer. Curating the best in cinematic motions and immersive media tools since 2022.',
            avatar: 'https://picsum.photos/seed/marcus/300/300',
            stats: { saved: 128, watched: '14k', collections: 42 }
        },
        recentlyPlayed: [
            { name: 'Ethereal Shifts vol. 4', sub: 'Motion Pack • 12m left', progress: 60, image: 'https://picsum.photos/seed/rec1/600/400' },
            { name: 'Vector Dynamics', sub: 'Tools • 45m left', progress: 30, image: 'https://picsum.photos/seed/rec2/600/400' },
            { name: 'Urban Nightscapes', sub: 'Video Series • 2m left', progress: 95, image: 'https://picsum.photos/seed/rec3/600/400' },
            { name: 'Mastering the Lens', sub: 'Documentary • New', progress: 0, image: 'https://picsum.photos/seed/rec4/600/400' },
            { name: 'Data Horizons', sub: 'Motions • 5m watched', progress: 10, image: 'https://picsum.photos/seed/rec5/600/400' }
        ],
        playlists: [
            { name: 'Client Projects 2024', sub: '24 items • Last updated 2d ago', image: 'https://picsum.photos/seed/play1/200/200' },
            { name: 'Motion Assets', sub: '56 items • Last updated 5h ago', image: 'https://picsum.photos/seed/play2/200/200' },
            { name: 'Daily Inspiration', sub: '128 items • Last updated 1w ago', image: 'https://picsum.photos/seed/play3/200/200' }
        ],
        shows: [
            { name: 'The Lens Master', sub: 'New Episode Today', image: 'https://picsum.photos/seed/show1/300/400', isNew: true },
            { name: 'Retro/Future', sub: 'Next: Friday', image: 'https://picsum.photos/seed/show2/300/400', isNew: false }
        ],
        downloads: [
            { name: 'Cinematic LUTs...', sub: '450 MB • Ready', icon: 'movie' },
            { name: 'Audio SFX Bundle', sub: '1.2 GB • Ready', icon: 'equalizer' },
            { name: 'Project Mockups', sub: '89 MB • Ready', icon: 'architecture' },
            { name: 'Scripts & Presets', sub: '12 MB • Ready', icon: 'code' },
        ]
    }
};
