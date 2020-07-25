import pandas as pd
import os
from events import Sale, Purchase

def analyze(file, **kwargs):
    sheet = pd.read_excel(
        file,
        header = None,
        keep_default_na=False,
        na_values="",
        **kwargs
    )

    pass
   

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