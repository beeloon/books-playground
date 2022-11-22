import random


def quicksort(array):
    if len(array) < 2:
        return array

    pivot = array[0]
    
    greater = [i for i in array[1:] if i > pivot]
    less = [i for i in array[1:] if i <= pivot]

    return quicksort(less) + [pivot] + quicksort(greater)

def quicksortV2(array):
    if len(array) < 2:
        return array
    
    pivot = array[0]
    lesser = []
    greater = []

    for i in array[1:]:
        greater.append(i) if i > pivot else lesser.append(i)

    return quicksort(lesser) + [pivot] + quicksort(greater)


RANDOM_ARRAY_LENGTH = 100 
random_array = [random.choice(range(RANDOM_ARRAY_LENGTH)) for _ in range(RANDOM_ARRAY_LENGTH)]

print('From:')
print(random_array)
print('To:')
print(quicksort(random_array))