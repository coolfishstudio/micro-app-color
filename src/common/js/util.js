/**
 *  根据RGB判断颜色深浅
 *  return false 浅色
 *  return true 深色
 **/
export function colorDepthByRgb (color) {
  const rgb = color.replace(/\(?(:||rgb|RGB)*\)?/g, '').split(',')
  const r = parseInt(rgb[0])
  const g = parseInt(rgb[1])
  const b = parseInt(rgb[2])
  const grayLevel = r * 0.299 + g * 0.587 + b * 0.114
  return grayLevel <= 192
}
/**
 * hex 转 rgb
 * return rgb
 **/
export function hex2Rgb (color) {
  let _color = color.toLowerCase()
  const reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/
  if (reg.test(_color)) {
    _color = _color.replace(/#/, '')
    if (_color.length === 3) {
      let tempHex = ''
      for (let i = 0; i < _color.length; i++) {
        tempHex += _color[i] + _color[i]
      }
      _color = tempHex
    }
    const r = parseInt(_color.substring(0, 2), 16)
    const g = parseInt(_color.substring(2, 4), 16)
    const b = parseInt(_color.substring(4, 6), 16)
    return `rgb(${r}, ${g}, ${b})`
  }
  return null
}
/**
 * rgb 转 cmyk
 * return [c, m, y, k]
 */
export function rgb2Cmyk (color) {
  const rgb = color.replace(/(?:||rgb|RGB)*/g, '').split(',')
  const r = parseInt(rgb[0])
  const g = parseInt(rgb[1])
  const b = parseInt(rgb[2])

  let computedC = 1 - (r / 255)
  let computedM = 1 - (g / 255)
  let computedY = 1 - (b / 255)
  let minCMY = Math.min(computedC, Math.min(computedM, computedY))

  computedC = (computedC - minCMY) / (1 - minCMY)
  computedM = (computedM - minCMY) / (1 - minCMY)
  computedY = (computedY - minCMY) / (1 - minCMY)
  let computedK = minCMY

  return [computedC, computedM, computedY, computedK]
}
/**
  * 复制
  */
export function copy (value, callback) {
  let copyTextArea = null
  try {
    copyTextArea = document.createElement('textarea')
    copyTextArea.style.height = '0px'
    copyTextArea.style.width = '0px'
    copyTextArea.style.opacity = '0'
    document.body.appendChild(copyTextArea)
    copyTextArea.value = value
    copyTextArea.select()
    document.execCommand('copy')
    callback && callback()
  } finally {
    if (copyTextArea && copyTextArea.parentNode) {
      copyTextArea.parentNode.removeChild(copyTextArea)
    }
  }
}
