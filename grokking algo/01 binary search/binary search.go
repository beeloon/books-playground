package main

// In general, for any list of n, binary search will take log2 n steps to run in the worst case, whereas simple search will take n steps.
func BinarySearch(list []int, target int) int {
    low := 0
	high := len(list) - 1

	for low <= high {
		mid := (low + high) / 2
		guess := list[mid]

		if guess == target {
			return mid
		}
		
		if guess > target {
			high = mid - 1
		} else {
			low = mid + 1
		}
	}

	return -1
}

func main() {
	myList := []int{1, 3, 5, 7, 9}

	output := BinarySearch(myList, 3)

	println(output)
}
