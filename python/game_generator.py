import random
import csv
import json

def gen_randoms(n = 1000):
    filename = f"sample{n}.csv"
    data = []

    # Lists of fields to choose from
    popularities = [f"{r}/5" for r in range(1, 6)]
    ratings = ["E", "E10+", "T", "M", "RP"]
    genres = ["Action", "Fighting", "Adventure", "RPG", "Sports", "Racing", "Strategy", "Survival", "Shooter"]
    prices = [0.00, 14.99, 19.99, 24.99, 29.99, 39.99, 59.99, 69.99]

    # For n entries...
    for i in range(0, n):
        id = i
        name = f"Game{i}"
        # Randomly choose options for each of the fields
        popularity = random.choice(popularities)
        rating = random.choice(ratings)
        genre = random.choice(genres)
        price = random.choice(prices)

        # Create a list of the information and add it to the main list
        data_entry = [id, name, popularity, rating, genre, price]
        data.append(data_entry)
    
    # Write data to .csv file
    with open(filename, "w", newline="") as file:
        writer = csv.writer(file)
        writer.writerow(
            ["id", "game_title", "popularity", "rating", "genre", "price"]
        )
        writer.writerows(data)
    print(f"Successfully generated {n} entries!")

    

def gen_inventory(a = 2, b = 10):
    # Game information
    game0 = {
        "id": 0,
        "game_title": "Rocket League",
        "inventory": random.randint(a, b),
        "product_information": {
            "popularity": "4/5",
            "rating": "E",
            "genre": "Racing",
            "release_date": "July 7, 2015",
            "price": 0.00,
            "cover_art": None
        }
    }
    game1 = {
        "id": 1,
        "game_title": "Grand Theft Auto V",
        "inventory": random.randint(a, b),
        "product_information": {
            "popularity": "5/5",
            "rating": "M",
            "genre": "Adventure",
            "release_date": "September 17, 2013",
            "price": 29.99,
            "cover_art": None
        }
    }
    game2 = {
        "id": 2,
        "game_title": "Final Fantasy XIV - Dawntrail",
        "inventory": random.randint(a, b),
        "product_invformation": {
            "popularity": "5/5",
            "rating": "T",
            "genre": "RPG",
            "release_date": "July 2, 2024",
            "price": 39.99,
            "cover_art": None
        }
    }
    game3 = {
        "id": 3,
        "game_title": "Sekiro: Shadows Die Twice",
        "inventory": random.randint(a, b),
        "product_information": {
            "popularity": "5/5",
            "rating": "M",
            "genre": "Action",
            "release_date": "March 22, 2019",
            "price": 59.99,
            "cover_art": None
        }
    }
    game4 = {
        "id": 4,
        "game_title": "Call of Duty: World at War",
        "inventory": random.randint(a, b),
        "product_information": {
            "popularity": "4/5",
            "rating": "M",
            "genre": "Shooter",
            "release_date": "November 11, 2008",
            "price": 19.99,
            "cover_art": None
        }
    }

    # Convert a list of games to a JSON object and write to a JSON file
    json_list = json.dumps([game0, game1, game2, game3, game4], indent=4)
    with open("games_inventory.json", "w") as file:
        file.write(json_list)
    print("Successfully generated inventory JSON!")
    

if __name__ == "__main__":
    gen_randoms(1000)
    # gen_inventory()