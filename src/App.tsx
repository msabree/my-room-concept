import { useState } from 'react'
import './App.css'

interface Link {
  id: string
  title: string
  url: string
  icon: string
  category: 'music' | 'social' | 'merch' | 'contact' | 'other'
  description?: string
  color?: string
}

const sampleLinks: Link[] = [
  {
    id: '1',
    title: 'Spotify',
    url: 'https://spotify.com',
    icon: '🎵',
    category: 'music',
    description: 'Stream my latest tracks',
    color: '#1DB954'
  },
  {
    id: '2',
    title: 'Apple Music',
    url: 'https://apple.com/music',
    icon: '🎧',
    category: 'music',
    description: 'Listen on Apple Music',
    color: '#FA243C'
  },
  {
    id: '3',
    title: 'YouTube',
    url: 'https://youtube.com',
    icon: '▶️',
    category: 'music',
    description: 'Watch music videos & live performances',
    color: '#FF0000'
  },
  {
    id: '4',
    title: 'Instagram',
    url: 'https://instagram.com',
    icon: '📸',
    category: 'social',
    description: 'Behind the scenes & updates',
    color: '#E4405F'
  },
  {
    id: '5',
    title: 'TikTok',
    url: 'https://tiktok.com',
    icon: '🎬',
    category: 'social',
    description: 'Short clips & viral moments',
    color: '#000000'
  },
  {
    id: '6',
    title: 'Merch Store',
    url: '#',
    icon: '👕',
    category: 'merch',
    description: 'Official merchandise & apparel',
    color: '#8B5CF6'
  },
  {
    id: '7',
    title: 'Bandcamp',
    url: 'https://bandcamp.com',
    icon: '💿',
    category: 'music',
    description: 'Buy digital & physical albums',
    color: '#629AA0'
  },
  {
    id: '8',
    title: 'Booking',
    url: '#',
    icon: '📧',
    category: 'contact',
    description: 'Book me for shows & events',
    color: '#F59E0B'
  }
]

function App() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="app">
      <div className="background-gradient"></div>
      
      <div className="container">
        {/* Hero Section */}
        <div className="hero">
          <div className="profile-image">
            <div className="profile-glow"></div>
            <div className="profile-placeholder">🎤</div>
          </div>
          <h1 className="artist-name">Artist Name</h1>
          <p className="artist-tagline">Musician • Producer • Creator</p>
          <p className="artist-bio">
            Welcome to my creative space. Explore my music, connect with me, and discover what I'm working on.
          </p>
        </div>

        {/* Links Grid */}
        <div className="links-container">
          {sampleLinks.map((link, index) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`link-card ${link.category} ${hoveredId === link.id ? 'hovered' : ''}`}
              style={{
                '--card-color': link.color || '#6366f1',
                '--delay': `${index * 0.05}s`
              } as React.CSSProperties}
              onMouseEnter={() => setHoveredId(link.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="card-background"></div>
              <div className="card-content">
                <div className="card-icon">{link.icon}</div>
                <div className="card-text">
                  <h3 className="card-title">{link.title}</h3>
                  {link.description && (
                    <p className="card-description">{link.description}</p>
                  )}
                </div>
                <div className="card-arrow">→</div>
              </div>
              <div className="card-shine"></div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="footer">
          <p>Made with ❤️ for artists and creators</p>
        </div>
      </div>
    </div>
  )
}

export default App
