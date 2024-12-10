#include <iostream>
#include <filesystem>
#include <string>

namespace fs = std::filesystem;

uintmax_t calculateFolderSize(const fs::path& folderPath) {
    uintmax_t totalSize = 0;
    
    try {
        for (const auto& entry : fs::recursive_directory_iterator(folderPath)) {
            if (fs::is_regular_file(entry.path())) {
                totalSize += fs::file_size(entry.path());
            }
        }
    } catch (const std::filesystem::filesystem_error& e) {
        std::cerr << "Error accessing " << folderPath << ": " << e.what() << std::endl;
    }
    
    return totalSize;
}

void getFolderSizes(const std::string& directoryPath) {
    fs::path dirPath(directoryPath);

    if (!fs::is_directory(dirPath)) {
        std::cerr << "Error: " << directoryPath << " is not a valid directory." << std::endl;
        return;
    }

    std::cout << "Folder sizes in '" << directoryPath << "':\n" << std::endl;

    for (const auto& entry : fs::directory_iterator(dirPath)) {
        if (fs::is_directory(entry)) {
            uintmax_t folderSize = calculateFolderSize(entry.path());
            std::cout << entry.path().filename().string() << " = " << folderSize << " bytes" << std::endl;
        }
    }
}

int main() {
    std::string directoryPath;
    std::cout << "Enter the path of the directory: ";
    std::getline(std::cin, directoryPath);
    getFolderSizes(directoryPath);
    return 0;
}