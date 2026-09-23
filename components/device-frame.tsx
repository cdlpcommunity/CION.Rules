"use client"

import { useEffect, useState } from "react"

const DESKTOP_WIDTH = 1280
const PHONE_WIDTH = 390
const PHONE_HEIGHT = 800

export function DeviceFrame({ view }: { view: "desktop" | "mobile" }) {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    if (view !== "desktop") return
    const update = () => {
      const w = window.innerWidth
      setScale(Math.min(1, (w - 16) / DESKTOP_WIDTH))
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [view])

  if (view === "mobile") {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-[#0b1120] px-4 py-8">
        <div
          className="relative rounded-[2.75rem] border-[12px] border-black bg-black shadow-[0_40px_120px_-20px_rgba(255,90,54,0.35)]"
          style={{ width: PHONE_WIDTH + 24, height: PHONE_HEIGHT + 24 }}
        >
          <div className="absolute left-1/2 top-3 z-10 h-6 w-36 -translate-x-1/2 rounded-full bg-black" />
          <iframe
            src="/preview"
            title="Vista de teléfono"
            className="block rounded-[1.9rem] bg-white"
            style={{ width: PHONE_WIDTH, height: PHONE_HEIGHT }}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full overflow-hidden bg-[#0b1120]">
      <div
        style={{
          width: DESKTOP_WIDTH,
          height: `${100 / scale}vh`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <iframe src="/preview" title="Vista de PC" className="h-full w-full border-0" style={{ width: DESKTOP_WIDTH }} />
      </div>
    </div>
  )
}
