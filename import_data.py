import pandas as pd
import os
from events import Sale, Purchase

FILE = ""
SHEET_INDEX = 0

DEFAULT_CONFIG = {
    "header": None
}


sheet = pd.read_excel(file, header = 0, skiprows = 2, index_col = None,
    usecols = "A:E", parse_dates = [0], keep_default_na=False)

