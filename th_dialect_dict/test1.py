import csv
import re

def process_file(input_file, output_file):
    with open(input_file, "r", encoding="utf-8") as file:
        content = file.read()

    sections = re.split(r"\nข \d+", content)[1:]

    results = []
    for section in sections:
        lines = section.strip().split("\n")
        
        for line in lines:
            if "\t" in line:
                parts = line.split("\t", 1)
                words = parts[0]
                definition = parts[1] if len(parts) > 1 else ""
                
                word_parts = words.split(";", 1)
                main_words = word_parts[0].strip()
                synonyms = word_parts[1].strip() if len(word_parts) > 1 else ""
                
                results.append([main_words, synonyms, definition])

    with open(output_file, "w", newline="", encoding="utf-8") as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(["headword", "subword", "definition"])
        writer.writerows(results)

input_file = r"th_dialect_dict\datasets\ข ๑.txt"
output_file = r"th_dialect_dict\output_test\test1.csv"
process_file(input_file, output_file)