"""


"""

import csv

def process_file(input_file, output_file):
    results = []
    current_entry = None

    with open(input_file, "r", encoding="utf-8") as file:
        for line in file:
            line = line.strip()
            if not line:
                continue

            if "\t" in line:
                if current_entry:
                    results.append(current_entry)
                parts = line.split("\t", 1)
                words = parts[0]
                definition = parts[1] if len(parts) > 1 else ""
                
                word_parts = words.split(";", 1)
                main_words = word_parts[0].strip()
                synonyms = word_parts[1].strip() if len(word_parts) > 1 else ""
                
                current_entry = [main_words, synonyms, definition]
            elif current_entry:
                current_entry[2] += " " + line

    if current_entry:
        results.append(current_entry)

    with open(output_file, "w", newline="", encoding="utf-8") as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(["headword", "subword", "definition"])
        writer.writerows(results)

# input_file = r"th_dialect_dict\datasets\ข ๑.txt"
# output_file = r"th_dialect_dict\output_test\test2.csv"
# process_file(input_file, output_file)