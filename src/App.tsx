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
  { id: 'studio', name: 'Recording Studio', icon: '🎙️', description: 'Professional recording space' },
  { id: 'stage', name: 'Concert Stage', icon: '🎸', description: 'Live performance venue' },
  { id: 'painting', name: 'Art Studio', icon: '🎨', description: 'Creative painting space' },
  { id: 'bedroom', name: 'Home Studio', icon: '🏠', description: 'Cozy bedroom setup' },
  { id: 'rooftop', name: 'Rooftop', icon: '🌆', description: 'Urban outdoor space' },
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
    <div className="app">
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
        <div className="room-3d" data-room={rooms[currentRoom].id}>
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

          {/* Center Wall - Room Visualization */}
          <div className="wall center-wall">
            <div className="room-visualization">
              <div className={`room-scene ${rooms[currentRoom].id}`}>
                {/* Recording Studio */}
                <div className="room-content studio-room">
                  <div className="studio-equipment">
                    <div className="mic-stand"></div>
                    <div className="speaker left"></div>
                    <div className="speaker right"></div>
                    <div className="mixer"></div>
                    <div className="keyboard"></div>
                    <div className="sound-waves">
                      <div className="wave"></div>
                      <div className="wave"></div>
                      <div className="wave"></div>
                    </div>
                  </div>
                </div>

                {/* Concert Stage */}
                <div className="room-content stage-room">
                  <div className="stage-setup">
                    <div className="stage-floor"></div>
                    <div className="guitar-stand"></div>
                    <div className="drum-kit">
                      <div className="drum"></div>
                      <div className="drum"></div>
                      <div className="drum"></div>
                    </div>
                    <div className="spotlight"></div>
                    <div className="crowd-silhouette"></div>
                  </div>
                </div>

                {/* Art Studio */}
                <div className="room-content painting-room">
                  <div className="art-setup">
                    <div className="easel">
                      <div className="canvas"></div>
                    </div>
                    <div className="paint-palette"></div>
                    <div className="paint-brush"></div>
                    <div className="paint-splatter"></div>
                    <div className="paint-splatter"></div>
                    <div className="paint-splatter"></div>
                  </div>
                </div>

                {/* Home Studio */}
                <div className="room-content bedroom-room">
                  <div className="bedroom-setup">
                    <div className="bed"></div>
                    <div className="desk">
                      <div className="laptop"></div>
                      <div className="headphones"></div>
                    </div>
                    <div className="window">
                      <div className="window-light"></div>
                    </div>
                    <div className="plant"></div>
                  </div>
                </div>

                {/* Rooftop */}
                <div className="room-content rooftop-room">
                  <div className="rooftop-setup">
                    <div className="city-skyline"></div>
                    <div className="city-building"></div>
                    <div className="city-building"></div>
                    <div className="city-building"></div>
                    <div className="sunset-gradient"></div>
                    <div className="rooftop-floor"></div>
                    <div className="vinyl-player"></div>
                  </div>
                </div>
              </div>
              <div className="room-info">
                <div className="room-icon">{rooms[currentRoom].icon}</div>
                <h2 className="room-name">{rooms[currentRoom].name}</h2>
                <p className="room-description">{rooms[currentRoom].description}</p>
              </div>
            </div>
          </div>

          {/* Right Wall - Additional Content */}
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
