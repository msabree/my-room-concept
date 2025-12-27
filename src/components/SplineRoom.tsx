import { Suspense, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { Application } from '@splinetool/runtime'

interface SplineRoomProps {
  scene: string
  onLoad?: (spline: Application) => void
  className?: string
}

export default function SplineRoom({ scene, onLoad, className }: SplineRoomProps) {
  const splineRef = useRef<Application | null>(null)

  const handleLoad = (spline: Application) => {
    splineRef.current = spline
    if (onLoad) {
      onLoad(spline)
    }
  }

  return (
    <div className={`spline-container ${className || ''}`}>
      <Suspense fallback={
        <div className="spline-loading">
          <div className="loading-spinner"></div>
          <p>Loading room...</p>
        </div>
      }>
        <Spline
          scene={scene}
          onLoad={handleLoad}
        />
      </Suspense>
    </div>
  )
}

