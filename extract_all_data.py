import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('program_full_extracted.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Parse Glossary (1-қосымша)
glossary = []
g_pos = text.find('1-қосымша', 50000)
if g_pos != -1:
    g_end = text.find('2-қосымша', g_pos)
    g_chunk = text[g_pos:g_end]
    lines = [l.strip() for l in g_chunk.split('\n') if l.strip()]
    start_idx = 0
    for idx, l in enumerate(lines):
        if 'Анықтамасы' in l or 'Термин' in l:
            start_idx = idx + 1
            break
    i = start_idx
    while i < len(lines):
        term = lines[i]
        if i + 1 < len(lines):
            definition = lines[i+1]
            glossary.append({"term": term, "definition": definition})
            i += 2
        else:
            break

print(f"Glossary count: {len(glossary)}")

# 2. Parse Tools (6-қосымша)
tools = []
t_pos = text.find('6-қосымша', 50000)
if t_pos != -1:
    t_end = text.find('7-қосымша', t_pos)
    t_chunk = text[t_pos:t_end]
    lines = [l.strip() for l in t_chunk.split('\n') if l.strip()]
    start_idx = 0
    for idx, l in enumerate(lines):
        if 'Курста қолданылу мысалы' in l:
            start_idx = idx + 1
            break
    i = start_idx
    while i < len(lines):
        if i + 2 < len(lines):
            tool_name = lines[i]
            purpose = lines[i+1]
            example = lines[i+2]
            if not tool_name.startswith('7-қосымша'):
                tools.append({
                    "name": tool_name,
                    "purpose": purpose,
                    "example": example
                })
            i += 3
        else:
            break

print(f"Tools count: {len(tools)}")

# 3. Parse Projects (5-қосымша)
projects = []
p_pos = text.find('5-қосымша', 50000)
if p_pos != -1:
    p_end = text.find('6-қосымша', p_pos)
    p_chunk = text[p_pos:p_end]
    lines = [l.strip() for l in p_chunk.split('\n') if l.strip()]
    for l in lines:
        m = re.match(r'^(\d+)\.\s*(.*)', l)
        if m:
            projects.append({
                "id": int(m.group(1)),
                "title": m.group(2)
            })

print(f"Projects count: {len(projects)}")

data = {
    "glossary": glossary,
    "tools": tools,
    "projects": projects
}

with open('course_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Saved course_data.json successfully!")
