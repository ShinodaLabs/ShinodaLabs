from pathlib import Path
import json
p=Path('package.json');j=json.loads(p.read_text());j['scripts']['generate:ai']='node scripts/generate-ai-content.mjs'
for name in ['predev','prebuild','prebuild:vercel','prebuild:dev']: j['scripts'][name]='npm run generate:ai'
p.write_text(json.dumps(j,indent=2)+'\n',encoding='utf-8')
p=Path('public/sitemap.xml');p.write_text(p.read_text().replace('2026-06-11','2026-09-12'),encoding='utf-8')
