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

/**
  * 内核判断
  *
  */
const deviceCore = {
  _ua: navigator.userAgent.toLowerCase(),
  // 获取浏览器版本
  _getVersion: (nece) => {
    let arr = nece.split('.')
    return parseFloat(`${arr[ 0 ]}.${arr[ 1 ]}`)
  },
  // 设备检测
  _detect: (kernel) => {
    let reg = new RegExp(kernel, 'img')
    return reg.test(deviceCore._ua)
  }
}
export const device = {
  isIOS: () => { return deviceCore._detect('iPhone|iPad|iPod|iOS|mac os') },
  isAndroid: () => { return deviceCore._detect('Android') },
  isUCBrowser: () => { return deviceCore._detect('UCBrowser') },
  isQQBrowser: () => { return deviceCore._detect('QQBrowser') },
  isWeixin: () => { return deviceCore._detect('MicroMessenger') },
  isPC: () => { return !deviceCore._detect('phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone') },
  qqBrowserVersion: () => { return device.isQQBrowser() ? deviceCore._getVersion(deviceCore._ua.split('mqqbrowser/')[ 1 ]) : 0 },
  ucBrowserVersion: () => { return device.isUCBrowser() ? deviceCore._getVersion(deviceCore._ua.split('ucbrowser/')[ 1 ]) : 0 },
  iOSVersion: () => { return device.isIOS() ? parseInt(deviceCore._ua.match(/\s*os\s*\d+/gi)[ 0 ].split(' ')[ 2 ], 10) : 0 }
}
