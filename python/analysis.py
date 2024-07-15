import pandas as pd
from sklearn.neighbors import NearestNeighbors
import matplotlib.pyplot as plt
import seaborn as sns

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

if __name__ == "__main__":
    # Read in sample data and create a Pandas DataFrame
    data = pd.read_csv("sample1000.csv")
    df = pd.DataFrame(data)

    # Tests - ID's 1, 816, and 995 appear to be identical datapoints (they are!)
    distances, indices = game_store_knn(df, 3)
    print(indices[1])
