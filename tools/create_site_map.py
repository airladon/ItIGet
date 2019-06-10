import subprocess
from datetime import timezone
from datetime import datetime
import os
import re
import pdb
import requests
from lxml import etree


# Get current sitemap

local_sitemap = os.path.join(
    os.getcwd(), 'app', 'app', 'static', 'sitemap.xml')
remote_sitemap = 'https://www.thisiget.com/sitemap.xml'

existing_sitemap_content = ''
r = requests.get(remote_sitemap)
if r.status_code == 200:
    existing_sitemap_content = r.content
else:
    with open(local_sitemap, 'r') as f:
        existing_sitemap_content = f.read().encode('UTF-8')

existing_sitemap = {}
root = etree.fromstring(existing_sitemap_content)
for sitemap in root:
    children = sitemap.getchildren()
    existing_sitemap[children[0].text] = children[1].text

# print(existing_sitemap)

# Get all lesson versions
versions = []
for root, dirs, files in os.walk("./src/Lessons"):
    for file in files:
        if ('quickReference' in root):
            continue
        if ('boilerplate' in root):
            continue
        if file == 'version.js':
            versions.append(root)


def get_last_edit(file):
    output = subprocess.run(
        ["git", "log", "-1", '--pretty="format:%ci"', file],
        capture_output=True)
    if output.returncode == 0:
        results = output.stdout.decode("utf-8").strip().replace(
            "format:", "").replace('"', '')
        return datetime.strptime(results, '%Y-%m-%d %H:%M:%S %z')
    return None


# Get the latest git changed date of all versions
pages = [['https://www.thisiget.com/', '2019-06-10', 'weekly']]
for version in versions:
    files = os.listdir(version)
    valid_files = []
    valid_dates = []
    for file in files:
        if file.endswith('scss') \
           or file.endswith('css') \
           or file == 'version.js' \
           or file == 'lesson.js' \
           or file == '.DS_Store' \
           or os.path.isdir(os.path.join(version, file)):
            continue

        valid_files.append(file)
        valid_dates.append(get_last_edit(os.path.join(version, file)))

    if len(valid_files) == 0:
        continue

    most_recent = (sorted(valid_dates))[-1].strftime("%Y-%m-%dT%H:%M:%S%z")
    lesson = re.sub(r".*\/src\/", '', version)
    pages.append([
        f'https://www.thisiget.com/{lesson}/', most_recent, 'weekly'])

# Show all added and removed pages in sitemap
existing_urls = set(existing_sitemap.keys())
current_urls = set([page[0] for page in pages])
added_urls = current_urls.difference(existing_urls)
removed_urls = existing_urls.difference(current_urls)

if len(added_urls) > 0:
    for url in added_urls:
        print(f'Adding page: {url}')
    print()

if len(removed_urls) > 0:
    for url in removed_urls:
        print(f'Removing page: {url}')
    print()


def to_time(time_str):
    if len(time_str) == 10:
        return datetime.strptime(
            time_str, '%Y-%m-%d').replace(tzinfo=timezone.utc)
    return datetime.strptime(time_str, '%Y-%m-%dT%H:%M:%S%z')


# Show all pages with updated time
for page in pages:
    url = page[0]
    if url not in existing_urls:
        continue

    current_time = to_time(page[1])
    existing_time = to_time(existing_sitemap[url])
    if current_time > existing_time:
        print(f'Updating last modified time: {url}   '
              f'{existing_sitemap[url]} => {page[1]}')

exit()
# Check all created pages in sitemap against existing pages in sitemap and
# compare dates
for page in pages:
    url = page[0]
    time = page[1]
    # if url not in sitemap


def writeURL(f, link, last_mod, changeFreq):
    f.write('  <url>\n')
    f.write(f'    <loc>{link}</loc>\n')
    f.write(f'    <lastmod>{last_mod}</lastmod>\n')
    f.write(f'    <changefreq>{changeFreq}</changefreq>\n')
    f.write('  </url>\n')


with open(local_sitemap, 'w') as f:
    f.write('<?xml version="1.0" encoding="UTF-8"?>\n')
    f.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')
    # writeURL(f, 'https://www.thisiget.com/', '2019-06-10', 'weekly')

    for page in pages:
        writeURL(f, page[0], page[1], page[3])

    f.write('</urlset>\n')
