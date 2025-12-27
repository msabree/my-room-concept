# Spline Rooms Directory

This directory contains all your custom Spline 3D room components.

## Structure

```
/spline
  ├── BakingRoom.tsx    # Example baking room
  ├── index.ts          # Exports all rooms
  └── README.md         # This file
```

## Adding a New Spline Room

### 1. Create the Component

Create a new file: `YourRoomName.tsx`

```typescript
import { Suspense } from 'react'
import Spline from '@splinetool/react-spline'

interface YourRoomNameProps {
  onLoad?: (spline: any) => void
  className?: string
}

export default function YourRoomName({ onLoad, className }: YourRoomNameProps) {
  return (
    <div className={`spline-container ${className || ''}`}>
      <Suspense fallback={
        <div className="spline-loading">
          <div className="loading-spinner"></div>
          <p>Loading your room...</p>
        </div>
      }>
        <Spline
          scene="https://prod.spline.design/YOUR_SCENE_URL.splinecode"
          onLoad={onLoad}
        />
      </Suspense>
    </div>
  )
}
```

### 2. Export from index.ts

```typescript
export { default as YourRoomName } from './YourRoomName'
```

### 3. Add Scene URL to SPLINE_SCENES

```typescript
export const SPLINE_SCENES = {
  bakingRoom: 'https://prod.spline.design/...',
  yourRoomName: 'https://prod.spline.design/...', // Add here
} as const
```

### 4. Add to App.tsx

1. Import the component:
```typescript
import { BakingRoom, YourRoomName } from './spline'
```

2. Add room config:
```typescript
{
  id: 'yourroom',
  name: 'Your Room',
  icon: '🎨',
  description: 'Your description',
  splineScene: SPLINE_SCENES.yourRoomName,
  color: '#yourcolor',
}
```

3. Add conditional render:
```typescript
{rooms[currentRoom].id === 'baking' ? (
  <BakingRoom ... />
) : rooms[currentRoom].id === 'yourroom' ? (
  <YourRoomName ... />
) : (
  <SplineRoom ... />
)}
```

## Current Rooms

- **BakingRoom** 🍰 - Creative kitchen space

## Tips

- Keep component names descriptive
- Use consistent loading states
- Pass `onLoad` callback for interactions
- Use the `className` prop for styling

