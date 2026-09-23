"use client"

import { useEffect, useState } from "react"
import { CodigoContent } from "@/components/codigo-content"
import { DeviceFrame } from "@/components/device-frame"
import { DeviceViewToggle } from "@/components/device-view-toggle"

type View = "desktop" | "mobile"

export default function Page() {
  const [mounted, setMounted] = useState(false)
  const [native, setNative] = useState<View>("desktop")
  const [view, setView] = useState<View>("desktop")

  useEffect(() => {
    const isMobile =
      window.matchMedia("(max-width: 767px)").matches ||
      /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    const detected: View = isMobile ? "mobile" : "desktop"
    setNative(detected)
    setView(detected)
    setMounted(true)
  }, [])

  if (!mounted) {
    return <CodigoContent />
  }

  const simulating = view !== native

  return (
    <>
      {simulating ? <DeviceFrame view={view} /> : <CodigoContent />}
      <DeviceViewToggle view={view} native={native} onChange={setView} />
    </>
  )
}
