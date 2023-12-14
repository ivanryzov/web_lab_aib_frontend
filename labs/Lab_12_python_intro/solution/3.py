def build_histogram(text):
    # Создаем словарь для подсчета количества символов
    histogram = {}

    # Подсчитываем количество символов в тексте
    for char in text:
        if char != ' ' and char != '\n':
            histogram[char] = histogram.get(char, 0) + 1

    # Сортируем символы по возрастанию кодов
    sorted_chars = sorted(histogram.keys())

    # Выводим гистограмму
    for char in sorted_chars:
        print('#' * histogram[char], char)

# Считываем зашифрованный текст из файла
encrypted_text = 'Twas brillig, and the slithy toves
Did gyre and gimble in the wabe;
All mimsy were the borogoves,
And the mome raths outgrabe.
'

# Построение гистограммы количества символов
build_histogram(encrypted_text)