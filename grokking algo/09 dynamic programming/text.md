## dynamic programming

Dynamic programming is a technique to solve a hard problem by breaking it up into subproblems and solving those subproblems first.

Dynamic programming only works when each subproblem is discrete—when it doesn’t depend on other subproblems.

Dynamic programming is useful when you’re trying to optimize something given a constraint. In the knapsack problem, you had to maximize the value of the goods you stole, constrained by the size of the knapsack.
You can use dynamic programming when the problem can be broken into discrete subproblems, and they don’t depend on each other.

Some tips: 
- Every dynamic-programming solution involves a grid.
- The values in the cells are usually what you’re trying to optimize. For the knapsack problem, the values were the value of the goods.
- Each cell is a subproblem, so think about how you can divide your problem into subproblems. That will help you igure out what the axes are.

Dynamic programming usecases:
- Biologists use the longest common subsequence to ind similarities in DNA strands. hey can use this to tell how similar two animals or two diseases are. he longest common subsequence is being used to ind a cure for multiple sclerosis.
- Have you ever used dif (like git diff)? Dif tells you the diferences between two iles, and it uses dynamic programming to do so.
- We talked about string similarity. Levenshtein distance measures how similar two strings are, and it uses dynamic programming. Levenshtein distance is used for everything from spell-check to iguring out whether a user is uploading copyrighted data.
- Have you ever used an app that does word wrap, like Microsot Word? How does it igure out where to wrap so that the line length stays consistent? Dynamic programming!


## Recap
- Dynamic programming is useful when you’re trying to optimize something given a constraint.
- You can use dynamic programming when the problem can be broken into discrete subproblems.
- Every dynamic-programming solution involves a grid.
- he values in the cells are usually what you’re trying to optimize.
- Each cell is a subproblem, so think about how you can divide your problem into subproblems.
- here’s no single formula for calculating a dynamic-programming solution.