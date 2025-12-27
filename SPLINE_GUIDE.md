# Spline Integration Guide

## 🎨 Getting Started with Spline

### 1. Create Your 3D Room in Spline

1. Go to [spline.design](https://spline.design)
2. Sign up/login and create a new project
3. Design your room with:
   - Walls, floor, ceiling
   - Desk, equipment, decorations
   - Lighting setup
   - Interactive objects (vinyl player, neon signs, etc.)

### 2. Set Up Interactive States

In Spline, you can create "States" for objects:

1. Select an object (e.g., a vinyl player)
2. In the Properties panel, add a "State Machine"
3. Create states like:
   - `idle` - Default state
   - `playing` - When clicked/activated
   - `glow` - Hover state

### 3. Export Your Scene

1. In Spline, click **Export** → **Code**
2. Choose **React** as the framework
3. Copy the scene URL (looks like: `https://prod.spline.design/xxxxx.splinecode`)

### 4. Add to Your Room Config

Update `src/App.tsx`:

```typescript
const rooms: Room[] = [
  { 
    id: 'studio', 
    name: 'The Studio', 
    icon: '🎙️', 
    description: 'Producer / Beatmaker',
    // Replace with your Spline scene URL
    splineScene: 'https://prod.spline.design/YOUR_SCENE_URL.splinecode',
    color: '#3b82f6',
    config: {
      wallpaper: 'studio-dark',
      deskType: 'producer',
      items: {
        slot1: 'mixer',
        slot2: 'microphone',
        wall: 'neon-sign'
      },
      lighting: 'neon'
    }
  },
  // ... other rooms
]
```

## 🎮 Interacting with Spline Objects

### Trigger States from React

```typescript
const handleSplineLoad = (spline: Application) => {
  splineRef.current = spline
  
  // Find an object by name
  const vinylPlayer = spline.findObjectByName('VinylPlayer')
  
  // Trigger a state change
  vinylPlayer?.emitEvent('mouseDown')
  
  // Or set a variable
  spline.setVariable('roomState', 'loaded')
}
```

### Handle Clicks in Spline

In Spline, you can set up event listeners:

1. Select an object
2. Add an **Event Listener** → **onClick**
3. Choose an action (play sound, change state, etc.)

## 🎯 Modular Room System

### Room Configuration

Each room can have a `config` object that defines:

```typescript
config: {
  wallpaper: 'studio-dark',      // Room texture/theme
  deskType: 'producer',           // Type of desk
  items: {
    slot1: 'mixer',               // Item in slot 1
    slot2: 'microphone',          // Item in slot 2
    wall: 'neon-sign'             // Wall decoration
  },
  lighting: 'neon'                // Lighting preset
}
```

### Future: Dynamic Item Swapping

You can extend this to allow users to swap items:

```typescript
const updateRoomItem = (slot: 'slot1' | 'slot2' | 'wall', item: string) => {
  if (splineRef.current) {
    // Hide current item
    const currentItem = splineRef.current.findObjectByName(currentItems[slot])
    currentItem?.visible = false
    
    // Show new item
    const newItem = splineRef.current.findObjectByName(item)
    newItem?.visible = true
  }
}
```

## 🎨 Design Tips

1. **Performance**: Keep polygon count reasonable (< 100k triangles)
2. **Lighting**: Use baked lighting for better performance
3. **Textures**: Compress textures to reduce file size
4. **Interactivity**: Use states instead of animations for better control
5. **Naming**: Name objects clearly in Spline (e.g., "Desk", "VinylPlayer", "NeonSign")

## 📚 Resources

- [Spline Documentation](https://docs.spline.design/)
- [Spline React Examples](https://spline.design/examples)
- [Spline Community](https://discord.gg/spline)

## 🚀 Next Steps

1. Design your first room in Spline
2. Export and add the scene URL to a room config
3. Test interactions and states
4. Build out modular item system
5. Add drag-and-drop customization UI

