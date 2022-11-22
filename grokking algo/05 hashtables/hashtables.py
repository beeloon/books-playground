# eg with groceries prices book
book = dict()

book["apple"] = 0.67
book["milk"] = 1.53
book["avocado"] = 2.33

# eg with phone book
phone_book = dict()

phone_book["jenny"] = 8675309 
phone_book["mergency"] = 911

# check if person voted
voted = {}

def check_voter(name): 
    if voted.get(name):
        print ("kick them out!") 
    else:
        voted[name] = True 
        print( "let them vote!")

check_voter("tom")
check_voter("annie")
check_voter("ron")
check_voter("ron")


# cache example
cache = {}

def get_page(url):
    if cache.get(url):
        return cache[url]
    
    data = get_data_from_server(url)
    cache[url] = data
    return data
