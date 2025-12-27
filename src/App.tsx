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
  { id: 'studio', name: 'The Studio', icon: '🎙️', description: 'Producer / Beatmaker' },
  { id: 'stage', name: 'The Stage', icon: '🎸', description: 'Independent Artist' },
  { id: 'booth', name: 'The Booth', icon: '🎧', description: 'DJ / Party Curator' },
  { id: 'production', name: 'Production Office', icon: '📋', description: 'Event Producer' },
  { id: 'clubroom', name: 'The Clubroom', icon: '👥', description: 'Student Org / Campus' },
  { id: 'gallery', name: 'The Gallery', icon: '🎨', description: 'Visual Artist / Designer' },
  { id: 'editsuite', name: 'The Edit Suite', icon: '📷', description: 'Photographer / Videographer' },
  { id: 'listening', name: 'Listening Room', icon: '🎙️', description: 'Podcaster / Media Host' },
  { id: 'shopfront', name: 'The Shopfront', icon: '🛍️', description: 'Small Creative Business' },
  { id: 'community', name: 'Community Room', icon: '🤝', description: 'Nonprofit / Initiative' },
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
    <div className={`app room-${rooms[currentRoom].id}`}>
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

          {/* Center - Immersive Room View */}
          <div className="center-room-view">
            <div className={`room-scene ${rooms[currentRoom].id}`}>
              {/* T-01: The Studio - Producer/Beatmaker */}
              <div className="room-content studio-room">
                <div className="desk-setup">
                  <div className="desk-surface"></div>
                  <div className="desk-items">
                    <div className="audio-player-module">
                      <div className="player-screen">
                        <div className="track-artwork"></div>
                        <div className="track-info">
                          <div className="track-title">Top Beats</div>
                          <div className="track-controls">
                            <div className="play-button"></div>
                            <div className="waveform">
                              <div className="wave-bar"></div>
                              <div className="wave-bar"></div>
                              <div className="wave-bar"></div>
                              <div className="wave-bar"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="booking-widget-module">
                      <div className="calendar-icon"></div>
                      <div className="booking-text">Book Session</div>
                    </div>
                    <div className="profile-card-module">
                      <div className="profile-avatar"></div>
                      <div className="profile-name">Producer Name</div>
                    </div>
                    <div className="hero-cta">License beats. Book sessions. Build sound.</div>
                  </div>
                </div>
              </div>

              {/* T-02: The Stage - Independent Artist */}
              <div className="room-content stage-room">
                <div className="desk-setup">
                  <div className="desk-surface"></div>
                  <div className="desk-items">
                    <div className="smart-link-hub">
                      <div className="link-platforms">
                        <div className="platform-card spotify"></div>
                        <div className="platform-card apple"></div>
                        <div className="platform-card youtube"></div>
                      </div>
                      <div className="primary-release">New Single</div>
                    </div>
                    <div className="profile-card-module">
                      <div className="profile-avatar"></div>
                      <div className="profile-name">Artist Name</div>
                    </div>
                    <div className="hero-cta">Start here: the newest release.</div>
                  </div>
                </div>
              </div>

              {/* T-03: The Booth - DJ/Party Curator */}
              <div className="room-content booth-room">
                <div className="desk-setup">
                  <div className="desk-surface"></div>
                  <div className="desk-items">
                    <div className="dj-deck">
                      <div className="turntable left"></div>
                      <div className="turntable right"></div>
                      <div className="mixer-center"></div>
                    </div>
                    <div className="booking-widget-module large">
                      <div className="calendar-icon"></div>
                      <div className="booking-text">Book Me</div>
                    </div>
                    <div className="smart-link-hub compact">
                      <div className="link-platforms">
                        <div className="platform-card soundcloud"></div>
                        <div className="platform-card mixcloud"></div>
                      </div>
                    </div>
                    <div className="profile-card-module">
                      <div className="profile-avatar"></div>
                      <div className="profile-name">DJ Name</div>
                    </div>
                    <div className="hero-cta">Book me. Pull up. Let's make it move.</div>
                  </div>
                </div>
              </div>

              {/* T-04: Production Office - Event Producer */}
              <div className="room-content production-room">
                <div className="desk-setup">
                  <div className="desk-surface"></div>
                  <div className="desk-items">
                    <div className="case-study-tiles">
                      <div className="case-tile"></div>
                      <div className="case-tile"></div>
                      <div className="case-tile"></div>
                    </div>
                    <div className="inquiry-form-module">
                      <div className="form-header">Request Quote</div>
                      <div className="form-fields">
                        <div className="form-field"></div>
                        <div className="form-field"></div>
                      </div>
                    </div>
                    <div className="profile-card-module">
                      <div className="profile-avatar"></div>
                      <div className="profile-name">Producer Name</div>
                    </div>
                    <div className="hero-cta">Production that feels inevitable.</div>
                  </div>
                </div>
              </div>

              {/* T-05: The Clubroom - Student Org */}
              <div className="room-content clubroom-room">
                <div className="desk-setup">
                  <div className="desk-surface"></div>
                  <div className="desk-items">
                    <div className="rsvp-form-module">
                      <div className="event-card">
                        <div className="event-date">Next Meeting</div>
                        <div className="rsvp-button">RSVP</div>
                      </div>
                    </div>
                    <div className="stats-counters-module">
                      <div className="stat-counter">
                        <div className="stat-number">150</div>
                        <div className="stat-label">Members</div>
                      </div>
                      <div className="stat-counter">
                        <div className="stat-number">12</div>
                        <div className="stat-label">Events</div>
                      </div>
                    </div>
                    <div className="profile-card-module org">
                      <div className="profile-avatar"></div>
                      <div className="profile-name">Org Name</div>
                    </div>
                    <div className="hero-cta">Join the team. Build the scene.</div>
                  </div>
                </div>
              </div>

              {/* T-06: The Gallery - Visual Artist */}
              <div className="room-content gallery-room">
                <div className="desk-setup">
                  <div className="desk-surface"></div>
                  <div className="desk-items">
                    <div className="gallery-grid-module">
                      <div className="gallery-item-small"></div>
                      <div className="gallery-item-small"></div>
                      <div className="gallery-item-small"></div>
                      <div className="gallery-item-small"></div>
                    </div>
                    <div className="inquiry-form-module">
                      <div className="form-header">Commission</div>
                      <div className="form-fields">
                        <div className="form-field"></div>
                      </div>
                    </div>
                    <div className="profile-card-module">
                      <div className="profile-avatar"></div>
                      <div className="profile-name">Artist Name</div>
                    </div>
                    <div className="hero-cta">Work you can feel. Commission-ready.</div>
                  </div>
                </div>
              </div>

              {/* T-07: The Edit Suite - Photographer */}
              <div className="room-content editsuite-room">
                <div className="desk-setup">
                  <div className="desk-surface"></div>
                  <div className="desk-items">
                    <div className="video-reel-module">
                      <div className="video-screen">
                        <div className="play-overlay"></div>
                        <div className="video-title">Portfolio Reel</div>
                      </div>
                    </div>
                    <div className="booking-widget-module">
                      <div className="calendar-icon"></div>
                      <div className="booking-text">Book Session</div>
                    </div>
                    <div className="profile-card-module">
                      <div className="profile-avatar"></div>
                      <div className="profile-name">Photographer</div>
                    </div>
                    <div className="hero-cta">Fast turnaround. Clean visuals. Real moments.</div>
                  </div>
                </div>
              </div>

              {/* T-08: Listening Room - Podcaster */}
              <div className="room-content listening-room">
                <div className="desk-setup">
                  <div className="desk-surface"></div>
                  <div className="desk-items">
                    <div className="smart-link-hub">
                      <div className="link-platforms">
                        <div className="platform-card spotify"></div>
                        <div className="platform-card apple"></div>
                        <div className="platform-card youtube"></div>
                      </div>
                      <div className="primary-release">Subscribe</div>
                    </div>
                    <div className="audio-player-module podcast">
                      <div className="player-screen">
                        <div className="track-artwork"></div>
                        <div className="track-info">
                          <div className="track-title">Featured Episode</div>
                          <div className="track-controls">
                            <div className="play-button"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="profile-card-module">
                      <div className="profile-avatar"></div>
                      <div className="profile-name">Host Name</div>
                    </div>
                    <div className="hero-cta">Start with this episode.</div>
                  </div>
                </div>
              </div>

              {/* T-09: The Shopfront - Small Business */}
              <div className="room-content shopfront-room">
                <div className="desk-setup">
                  <div className="desk-surface"></div>
                  <div className="desk-items">
                    <div className="shop-feature-module">
                      <div className="product-grid">
                        <div className="product-card"></div>
                        <div className="product-card"></div>
                        <div className="product-card"></div>
                      </div>
                    </div>
                    <div className="booking-widget-module">
                      <div className="calendar-icon"></div>
                      <div className="booking-text">Services</div>
                    </div>
                    <div className="profile-card-module">
                      <div className="profile-avatar"></div>
                      <div className="profile-name">Business Name</div>
                    </div>
                    <div className="hero-cta">Buy once. Come back forever.</div>
                  </div>
                </div>
              </div>

              {/* T-10: Community Room - Nonprofit */}
              <div className="room-content community-room">
                <div className="desk-setup">
                  <div className="desk-surface"></div>
                  <div className="desk-items">
                    <div className="stats-counters-module large">
                      <div className="stat-counter">
                        <div className="stat-number">5K+</div>
                        <div className="stat-label">Lives Impacted</div>
                      </div>
                      <div className="stat-counter">
                        <div className="stat-number">200+</div>
                        <div className="stat-label">Volunteers</div>
                      </div>
                      <div className="stat-counter">
                        <div className="stat-number">50+</div>
                        <div className="stat-label">Programs</div>
                      </div>
                    </div>
                    <div className="donation-module">
                      <div className="donate-button">Donate</div>
                      <div className="volunteer-button">Volunteer</div>
                    </div>
                    <div className="profile-card-module">
                      <div className="profile-avatar"></div>
                      <div className="profile-name">Organization</div>
                    </div>
                    <div className="hero-cta">Help fund the work. Join the mission.</div>
                  </div>
                </div>
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
