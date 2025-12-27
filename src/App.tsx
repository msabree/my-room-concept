import { useState } from 'react'
import './App.css'

interface Link {
  id: string
  title: string
  url: string
  icon: string
  color?: string
}

interface Room {
  id: string
  name: string
  icon: string
  description: string
  image: string
  color: string
}

const sampleLinks: Link[] = [
  { id: '1', title: 'Spotify', url: 'https://spotify.com', icon: '🎵', color: '#1DB954' },
  { id: '2', title: 'SoundCloud', url: 'https://soundcloud.com', icon: '🎧', color: '#FF7700' },
  { id: '3', title: 'YouTube', url: 'https://youtube.com', icon: '▶️', color: '#FF0000' },
  { id: '4', title: 'Instagram', url: 'https://instagram.com', icon: '📸', color: '#E4405F' },
  { id: '5', title: 'TikTok', url: 'https://tiktok.com', icon: '🎬', color: '#000000' },
  { id: '6', title: 'Facebook', url: 'https://facebook.com', icon: '👥', color: '#1877F2' },
  { id: '7', title: 'Twitter', url: 'https://twitter.com', icon: '🐦', color: '#1DA1F2' },
  { id: '8', title: 'Bandcamp', url: 'https://bandcamp.com', icon: '💿', color: '#629AA0' },
]

const rooms: Room[] = [
  { 
    id: 'studio', 
    name: 'The Studio', 
    icon: '🎙️', 
    description: 'Producer / Beatmaker',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1200',
    color: '#3b82f6' // Neon Blue
  },
  { 
    id: 'stage', 
    name: 'The Stage', 
    icon: '🎸', 
    description: 'Independent Artist',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1200',
    color: '#ef4444' // Stage Red
  },
  { 
    id: 'booth', 
    name: 'The Booth', 
    icon: '🎧', 
    description: 'DJ / Party Curator',
    image: 'https://images.unsplash.com/photo-1571332655065-38760451acb0?auto=format&fit=crop&q=80&w=1200',
    color: '#8b5cf6' // Cyber Purple
  },
  { 
    id: 'production', 
    name: 'Production Office', 
    icon: '📋', 
    description: 'Event Producer',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    color: '#06b6d4' // Cyan
  },
  { 
    id: 'clubroom', 
    name: 'The Clubroom', 
    icon: '👥', 
    description: 'Student Org / Campus',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200',
    color: '#10b981' // Emerald
  },
  { 
    id: 'gallery', 
    name: 'The Gallery', 
    icon: '🎨', 
    description: 'Visual Artist / Designer',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=1200',
    color: '#f59e0b' // Golden
  },
  { 
    id: 'editsuite', 
    name: 'The Edit Suite', 
    icon: '📷', 
    description: 'Photographer / Videographer',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    color: '#8b5cf6' // Purple
  },
  { 
    id: 'listening', 
    name: 'Listening Room', 
    icon: '🎙️', 
    description: 'Podcaster / Media Host',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=1200',
    color: '#ec4899' // Pink
  },
  { 
    id: 'shopfront', 
    name: 'The Shopfront', 
    icon: '🛍️', 
    description: 'Small Creative Business',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
    color: '#f97316' // Orange
  },
  { 
    id: 'community', 
    name: 'Community Room', 
    icon: '🤝', 
    description: 'Nonprofit / Initiative',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200',
    color: '#14b8a6' // Teal
  },
]

function App() {
  const [currentRoom, setCurrentRoom] = useState(0)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const nextRoom = () => {
    setCurrentRoom((prev) => (prev + 1) % rooms.length)
  }

  const prevRoom = () => {
    setCurrentRoom((prev) => (prev - 1 + rooms.length) % rooms.length)
  }

  return (
    <div 
      className="app" 
      style={{ '--room-color': rooms[currentRoom].color } as React.CSSProperties}
    >
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-logo">
            <span className="logo-icon">🏠</span>
            <span className="logo-text">My Room</span>
          </div>
          <div className="nav-links">
            <button className="nav-button">Login</button>
            <button className="nav-button primary">Get Started</button>
          </div>
        </div>
      </nav>

      {/* 3D Room Container */}
      <div className="room-container">
        <div className="room-3d">
          {/* Left Wall - Links */}
          <div className="wall left-wall">
            <div className="wall-content">
              <h3 className="wall-title">Connect</h3>
              <div className="links-grid">
                {sampleLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`link-icon ${hoveredLink === link.id ? 'hovered' : ''}`}
                    style={{ '--link-color': link.color || '#6366f1' } as React.CSSProperties}
                    onMouseEnter={() => setHoveredLink(link.id)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <div className="icon-bg"></div>
                    <span className="icon-emoji">{link.icon}</span>
                    <span className="icon-label">{link.title}</span>
                    <div className="icon-glow"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Center - The "Window" into their world */}
          <div className="center-portal">
            <div 
              key={rooms[currentRoom].id} // Key forces a re-render for the zoom animation
              className="portal-image"
              style={{ backgroundImage: `url(${rooms[currentRoom].image})` }}
            >
              <div className="portal-overlay">
                <div className="room-info-card">
                  <span className="room-icon">{rooms[currentRoom].icon}</span>
                  <h2>{rooms[currentRoom].name}</h2>
                  <p>{rooms[currentRoom].description}</p>
                  <button 
                    className="enter-btn"
                    style={{ '--btn-color': rooms[currentRoom].color } as React.CSSProperties}
                  >
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Wall - Secondary Content */}
          <div className="wall right-wall">
            <div className="wall-content">
              <h3 className="wall-title">Gallery</h3>
              <div className="gallery-content">
                <div className="gallery-item"></div>
                <div className="gallery-item"></div>
                <div className="gallery-item"></div>
                <div className="gallery-item"></div>
              </div>
              <div className="stats-section">
                <div className="stat">
                  <div className="stat-value">1.2M</div>
                  <div className="stat-label">Streams</div>
                </div>
                <div className="stat">
                  <div className="stat-value">45K</div>
                  <div className="stat-label">Followers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Room Switcher */}
        <div className="room-switcher">
          <button className="room-nav-btn" onClick={prevRoom}>←</button>
          <div className="room-dots">
            {rooms.map((room, index) => (
              <button
                key={room.id}
                className={`room-dot ${index === currentRoom ? 'active' : ''}`}
                onClick={() => setCurrentRoom(index)}
                aria-label={room.name}
              >
                <span>{room.icon}</span>
              </button>
            ))}
          </div>
          <button className="room-nav-btn" onClick={nextRoom}>→</button>
        </div>
      </div>
    </div>
  )
}

export default App
