import { Suspense } from 'react'
import Spline from '@splinetool/react-spline'

interface BakingRoomProps {
  onLoad?: (spline: any) => void
  className?: string
}

export default function BakingRoom({ onLoad, className }: BakingRoomProps) {
  return (
    <div className={`spline-container ${className || ''}`}>
      <Suspense fallback={
        <div className="spline-loading">
          <div className="loading-spinner"></div>
          <p>Loading baking room...</p>
        </div>
      }>
        <Spline
          scene="https://prod.spline.design/2cGfd5SUnOFRsOZi/scene.splinecode"
          onLoad={onLoad}
        />
      </Suspense>
    </div>
  )
}

