const Jimp = require('jimp')
const path = require('path')

// Instead of a hard cut at white, we scale alpha proportionally through the
// anti-aliased edge zone so the text edges look smooth against any background.
function removeWhiteBg(img) {
  img.scan(0, 0, img.bitmap.width, img.bitmap.height, function (x, y, idx) {
    const r = this.bitmap.data[idx]
    const g = this.bitmap.data[idx + 1]
    const b = this.bitmap.data[idx + 2]
    const brightness = (r + g + b) / 3

    if (brightness > 230) {
      // Pure white background — fully transparent
      this.bitmap.data[idx + 3] = 0
    } else if (brightness > 180) {
      // Anti-aliased edge zone — fade alpha proportionally for smooth edges
      this.bitmap.data[idx + 3] = Math.round(((230 - brightness) / 50) * 255)
    }
    // Below 180: fully opaque, leave as-is
  })
  return img
}

async function main() {
  const src = path.join(__dirname, '../public/Logo.png')

  // Logo-color.png — transparent bg, original colors (for white/gradient backgrounds)
  const colorImg = await Jimp.read(src)
  removeWhiteBg(colorImg)
  colorImg.autocrop({ cropOnlyFrames: false, tolerance: 0.01 })
  await colorImg.writeAsync(path.join(__dirname, '../public/Logo-color.png'))
  console.log('Logo-color.png written')

  // Logo-light.png — transparent bg, white text + red graphic (for solid dark backgrounds)
  const lightImg = await Jimp.read(src)
  removeWhiteBg(lightImg)

  lightImg.scan(0, 0, lightImg.bitmap.width, lightImg.bitmap.height, function (x, y, idx) {
    const r = this.bitmap.data[idx]
    const g = this.bitmap.data[idx + 1]
    const b = this.bitmap.data[idx + 2]
    const a = this.bitmap.data[idx + 3]
    if (a === 0) return

    const isRed = r > 150 && r > g + 80 && r > b + 80
    if (isRed) return

    const brightness = (r + g + b) / 3
    if (brightness < 220) {
      const light = brightness < 80 ? 255 : Math.min(255, Math.round(200 + (brightness / 220) * 55))
      this.bitmap.data[idx] = light
      this.bitmap.data[idx + 1] = light
      this.bitmap.data[idx + 2] = light
    }
  })

  lightImg.autocrop({ cropOnlyFrames: false, tolerance: 0.01 })
  await lightImg.writeAsync(path.join(__dirname, '../public/Logo-light.png'))
  console.log('Logo-light.png written')
}

main().catch(console.error)
