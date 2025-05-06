/*
 * FUNCTION TO CHECK IF A SCROLL IS NEAR THE BOTTOM
 * - @param scrollHeight: height of the scrollable element
 * - @param scrollTop: current scroll position
 * - @param clientHeight: height of the visible element
 * - @param isReverse: true if the scroll is reversed
 * - @param offset: offset from the bottom
 * - @return: true if the scroll is near the bottom
 *
 */
export function shouldLoadMore(
  scrollHeight: number,
  scrollTop: number,
  clientHeight: number,
  isReverse: boolean,
  offset = 10
) {
  if (isReverse) return scrollHeight + scrollTop - clientHeight < offset

  return scrollHeight - scrollTop - clientHeight < offset
}
