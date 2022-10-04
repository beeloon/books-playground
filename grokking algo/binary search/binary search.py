def binary_search(list, target): 
    low = 0
    high = len(list) - 1

    while low <= high: 
        mid = (low + high) 
        guess = list[mid] 
        
        if guess == target:
            return mid

        if guess > target: 
            high = mid - 1
        else:
            low = mid + 1
    
    return None

my_list = [1, 3, 5, 7, 9]

binary_search(my_list, 3)
