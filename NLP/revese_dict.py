import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

data = {
    "Word": ["แล", "เบิ่ง", "ผ่อ"],
    "POS" : ["ก.", "ก.", "ก."],
    "Definition": ["ดู มอง", "ดู มอง เหลียวดู", "ดู ดูแล มอง"]
}

df = pd.DataFrame(data)

def calculate_cosine_similarity(definitions):
    vectorizer = TfidfVectorizer()
    tfidf_matrix = vectorizer.fit_transform(definitions)
    cosine_sim = cosine_similarity(tfidf_matrix)
    return cosine_sim

def pos_similarity(pos_list):
    n = len(pos_list)
    total_sim = 0
    count = 0
    for i in range(n):
        for j in range(i+1, n):
            total_sim += 1 if pos_list[i] == pos_list[j] else 0
            count += 1
    return total_sim / count if count > 0 else 0

def definition_similarity(definitions):
    similarity_matrix = calculate_cosine_similarity(definitions)
    n = similarity_matrix.shape[0]
    total_sim = 0
    count = 0
    for i in range(n):
        for j in range(i+1, n):
            total_sim += similarity_matrix[i, j]
            count += 1
    return total_sim / count if count > 0 else 0

alpha = 0.5
beta = 0.5

pos = df["POS"].values
pos_sim = pos_similarity(pos)

definitions = df["Definition"]
def_sim = definition_similarity(definitions)
similarity = alpha * pos_sim + beta * def_sim

print(f"POS Similarity: {pos_sim:.2f}")
print(f"Definition Similarity: {def_sim:.2f}")
print(f"Overall Similarity: {similarity:.2f}")