def quicksort(array):
    if len(array) < 2:
        return array

    pivot = array[0]
    
    greater = [i for i in array[1:] if i > pivot]
    less = [i for i in array[1:] if i <= pivot]

    return quicksort(less) + [pivot] + quicksort(greater)

print(quicksort([4,3,8,1]))

# v2
# def quicksort(array):
#     if len(array) < 2:
#         return array
    
#     pivot = array[0]
#     lesser = []
#     greater = []

#     for i in array[1:]:
#         greater.append(i) if i > pivot else lesser.append(i)

#     return quicksort(lesser) + [pivot] + quicksort(greater)
