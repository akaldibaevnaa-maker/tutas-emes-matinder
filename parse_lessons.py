import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('program_full_extracted.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Locate 7-қосымша
pos7 = text.find('7-қосымша', 50000)
chunk7 = text[pos7:]

# Match № X САБАҚ
lesson_pattern = re.compile(r'№\s*(\d+)\s*САБАҚ', re.IGNORECASE)
matches = list(lesson_pattern.finditer(chunk7))
print(f"Total lesson matches found: {len(matches)}")

lessons = []
for idx in range(len(matches)):
    start_pos = matches[idx].start()
    end_pos = matches[idx+1].start() if idx + 1 < len(matches) else len(chunk7)
    l_text = chunk7[start_pos:end_pos]
    num = int(matches[idx].group(1))
    
    # Extract fields
    def extract_between(kw1, kw2):
        p1 = l_text.find(kw1)
        if p1 == -1: return ""
        p1 += len(kw1)
        p2 = l_text.find(kw2, p1) if kw2 else len(l_text)
        if p2 == -1: p2 = len(l_text)
        return l_text[p1:p2].strip()

    section = extract_between("Бөлім", "Педагогтің аты-жөні")
    title = extract_between("Сабақтың тақырыбы", "Оқу бағдарламасына")
    curriculum_obj = extract_between("Оқу бағдарламасына сәйкес оқу мақсаты", "Курстың оқу мақсаты")
    course_obj = extract_between("Курстың оқу мақсаты", "Сабақтың мақсаты")
    lesson_goal = extract_between("Сабақтың мақсаты", "Сабақтың күтілетін өнімі")
    expected_product = extract_between("Сабақтың күтілетін өнімі", "Сабақтың жүру барысы:")
    
    # Process steps
    middle = extract_between("Сабақтың ортасы", "Сабақтың соңы / Рефлексия")
    reflection = extract_between("Сабақтың соңы / Рефлексия", "Үй тапсырмасы")
    homework = extract_between("Үй тапсырмасы", "Ресурстар")
    resources = extract_between("Ресурстар", "№")

    lessons.append({
        "number": num,
        "title": title.replace('\n', ' ').strip(),
        "section": section.replace('\n', ' ').strip(),
        "curriculum_obj": curriculum_obj.replace('\n', ' ').strip(),
        "course_obj": course_obj.replace('\n', ' ').strip(),
        "goal": lesson_goal.strip(),
        "expected_product": expected_product.replace('\n', ' ').strip(),
        "middle": middle.strip(),
        "reflection": reflection.strip(),
        "homework": homework.strip(),
        "resources": resources.strip()
    })

print(f"Extracted {len(lessons)} lessons.")
with open('lessons_data.json', 'w', encoding='utf-8') as f:
    json.dump(lessons, f, ensure_ascii=False, indent=2)

print("Saved lessons_data.json!")
