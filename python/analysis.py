import pandas as pd
from sklearn.neighbors import NearestNeighbors
import random

def game_store_knn(dataframe, k = 10):
    # Isolate feature set - popularity, rating, genre, price - and encode it
    X = dataframe[["popularity", "rating", "genre", "price"]]
    x_encoded = pd.get_dummies(X)

    # Create a NearestNeighbors instance and run on the data, searching for k neighbors
    model = NearestNeighbors(n_neighbors = k)
    model.fit(x_encoded)

    # Return k distances and their respective indices from the model
    distances, indices = model.kneighbors(x_encoded)
    return distances, indices

def demo_function(dat_frame, indices, distances):
    # Randomly choose a datapoint and display it for reference
    choice = random.randint(0, 999)
    print(f"Displaying the nearest neighbors to {dat_frame.iloc[choice].game_title}:")
    print(dat_frame.iloc[choice])
    print("------------------------")
    # For each *other* index, display that row (skip 'choice')
    for i in indices[choice]:
        if i != choice:
            print(dat_frame.iloc[i], "\n")
    print("Finished displaying results!")
    

if __name__ == "__main__":
    # Read in sample data and create a Pandas DataFrame
    data = pd.read_csv("sample1000.csv")
    df = pd.DataFrame(data)

    # Run our model on the test DataFrame
    # k = 4: Give us the closest three (3) neighbors to a given datapoint
    # These neighbors would be our "recommendations" in our web-app
    distances, indices = game_store_knn(df, k = 4)
    results = (indices, distances)

    # * operation expands arguments to meet positional requirements
    # The below function call matches the function signature:
    #     demo_function(dat_frame, indices, distances)
    demo_function(df, *results)
