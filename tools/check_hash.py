import sys
sys.path.insert(0, './app/app')
from tools import check_hash    # noqa

# sys.argv[1] = plain text
# sys.argv[2] = hash to compare
print(check_hash(sys.argv[1], sys.argv[2]))
