// Challenge: Write a function to check if a linked list is a palindrome.

function isPalindromeLinkedList(head) {
    const values = [];
    let current = head;
    while (current) {
        values.push(current.val);
        current = current.next;
    }
    const reversedValues = [...values].reverse();
    return JSON.stringify(values) === JSON.stringify(reversedValues);
}
