// Modular Room Configuration System
export type DeskType = 'minimal' | 'producer' | 'gaming' | 'artist'
export type ItemSlot1 = 'laptop' | 'mixer' | 'turntable' | 'canvas' | 'camera'
export type ItemSlot2 = 'plant' | 'microphone' | 'monitor' | 'speaker' | 'light'
export type WallItem = 'gold-record' | 'poster' | 'neon-sign' | 'guitar' | 'artwork'
export type Lighting = 'neon' | 'natural' | 'dim' | 'studio'

export interface RoomConfig {
  wallpaper: string
  deskType: DeskType
  items: {
    slot1: ItemSlot1
    slot2: ItemSlot2
    wall: WallItem
  }
  lighting: Lighting
}

export interface Room {
  id: string
  name: string
  icon: string
  description: string
  color: string
  // Support both image and Spline scene
  image?: string
  splineScene?: string
  // Modular configuration
  config?: RoomConfig
}

