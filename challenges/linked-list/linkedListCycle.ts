
interface ListNode {
  val: number
  next: ListNode | null
}

export default function hasCycle (head: ListNode | null): boolean {
  let fastNode = head

  while (fastNode?.next !== null) {
    head = head?.next ?? null
    fastNode = fastNode?.next?.next ?? null

    if (head === fastNode) {
      return true
    }
  }
  return false
};
