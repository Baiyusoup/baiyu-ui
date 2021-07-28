
/**
 *
 * @param func 回调函数
 * @param wait 指定时间
 * @returns 节流函数
 */
export const throttle = (func: () => any, wait: number) => {
  let timeoutId, pre = 0

  // 定时器处理函数
  function later(...args: any[]) {
    // 更新上一次定时器执行时间
    pre = Date.now()
    // 消除定时器
    timeoutId = undefined

    // 执行函数
    func.apply(this, args)
  }

  return function (...args: any[]) {
    const now = Date.now()
    // 剩余时间，即还剩多久时间可以执行事件处理
    const remaining = wait - (now - pre)
    if (remaining <= 0) {
      // 没有剩余时间，说明可以执行
      if (timeoutId) {
        clearTimeout(timeoutId)
        timeoutId = undefined
      }
      pre = now
      func.apply(this, args)
    } else if (!timeoutId) {
      timeoutId = setTimeout(later.bind(this, args), remaining)
    }
  }
}

/**
 *
 * @param func 回调函数
 * @param wait 指定时间
 * @param immediate 是否立即执行
 * @returns 防抖函数
 */
export const debounce = (func: () => any, wait = 300, immediate = false) => {
  let timeoutId
  return function (...args: any[]) {
    clearTimeout(timeoutId)
    if (immediate) {
      // 立即执行
      // 如果没有定时器的话，说明可以立即执行
      const callNow = !timeoutId
      timeoutId = setTimeout(() => timeoutId = undefined, wait)
      callNow && func.apply(this, args)
    } else {
      timeoutId = setTimeout(() => func.apply(this, args), wait)
    }
  }
}
