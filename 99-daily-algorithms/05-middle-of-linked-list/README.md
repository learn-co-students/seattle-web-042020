# Find the Middle Node of a Linked List

Given a non-empty, singly linked list with a head node *head*, return a middle node of the linked list. If there are two middle nodes, return the second middle node. 

Note that the return node should be serialized, returning its attached *next* nodes as well. For example 1 below, the returning ListNode object contains the serialzed node of [node.val, node.next.val, node.next.next.val, node.next.next.next]. The final element there, node.next.next.next is NULL. 

## Examples

```javascript
    middleNode([1,2,3,4,5])
        => [3,4,5]
    middleNode([1,2,3,4,5,6])
        => [4,5,6]
```

## Constraints:
- The number of nodes in the given list will be between 1 and 100.

[Source](https://leetcode.com/problems/middle-of-the-linked-list/)