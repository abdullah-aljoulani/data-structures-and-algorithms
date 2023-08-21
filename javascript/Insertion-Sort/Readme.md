### Insertion Sort Step-by-Step Explanation

Initial Array: [5, 3, 8, 1, 2]
Pass 1: Current element: 3
Compare 3 with 5. Since 3 < 5, move 5 one position to the right.
Array after this step: [3, 5, 8, 1, 2]
Pass 2: Current element: 8
Compare 8 with 5. Since 8 > 5, no need to move 5.
Array after this step: [3, 5, 8, 1, 2]
Pass 3: Current element: 1
Compare 1 with 8. Since 1 < 8, move 8 one position to the right.
Compare 1 with 5. Since 1 < 5, move 5 one position to the right.
Compare 1 with 3. Since 1 < 3, move 3 one position to the right.
Array after this step: [1, 3, 5, 8, 2]
Pass 4: Current element: 2
Compare 2 with 8. Since 2 < 8, move 8 one position to the right.
Compare 2 with 5. Since 2 < 5, move 5 one position to the right.
Compare 2 with 3. Since 2 < 3, move 3 one position to the right.
Compare 2 with 1. Since 2 > 1, insert 2 in the correct position.
Array after this step: [1, 2, 3, 5, 8]
