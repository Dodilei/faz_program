import pandas as pd
import os
import math
from events import Sale, Purchase

def find_blocks(
    array,
    value = float('nan'),
    key = (lambda x, y: x == y),
    return_only = True):

    if math.isnan(value):
        onearg = True
    else:
        onearg = False

    blocks = []

    last = "undefined"
    for index, item in enumerate(array):
        current = key(item, value) if not onearg else key(item)

        if last == current:
            pass

        else:
            if last != "undefined":
                end = index-1
                blocks.append(((start, end), btype))

            start = index
            btype = current
        
        last = current

    blocks.append(((start, index), btype))
    
    if not return_only:
        return blocks
    elif return_only == 'this':
        return [block for block, btype in blocks if btype]
    elif return_only == 'other':
        return [block for block, btype in blocks if not btype]

def analyze(file, **kwargs):
    sheet = pd.read_excel(
        file,
        header = None,
        keep_default_na=False,
        na_values="",
        **kwargs
    )

    nas = sheet.apply(lambda r: r.dropna().empty, axis = 1)
    sizes = sheet.apply(lambda r: r.dropna().size, axis = 1)
    boundaries = sheet.apply(
        lambda r: find_blocks(
            r, key = lambda x: x != x, return_only = "other"),
            axis = 1)
    blocks = find_blocks(nas, False, return_only = "this")

    for b in blocks:
        start, end = b
        if end - start < 1:
            blocks.remove(b)
        elif sizes[start] < sizes[start:end+1].max()*0.8:
            blocks.remove(b)

    tables = []
    for b in blocks:
        start, end = b

        hmin = min(boundaries[start:end+1],
            key = lambda x: x[0][0])[0][0]
        hmax = max(boundaries[start:end+1],
            key = lambda x: x[-1][-1])[-1][-1]

        tables.append((start, end, hmin, hmax))
    
    print(tables)


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser()
    parser.add_argument(
        "file",
        help="excel file to import",
    )
    parser.add_argument(
        "-a", "--analyze",
        action="store_true",
        help="Analyze sheet, try to acknowledge boundaries and dtypes"
    )
    parser.add_argument(
        "-n", "--sheet_index",
        help="zero-indexed sheet number",
        default=0
    )

    args = parser.parse_args()

    if args.analyze:
        analyze(args.file, sheet_name=args.sheet_index)